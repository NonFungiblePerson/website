import { chakra, Text, useToast, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useReducer } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

import ABI from '../../../utils/abi.json';
import { Constants } from '../../../utils/constants';

import { MintableComponent } from './MintableComponent';
import { NotMintableComponent } from './NotMintableComponent';
import { TippingComponent } from './TippingComponent';
import { useBalanceOfCall } from './hooks/useBalanceOfCall';
import { useCurrentPriceCall } from './hooks/useCurrentPriceCall';
import { useGenerateVecCall } from './hooks/useGenerateVec';
import { useIsMintable } from './hooks/useIsMintableCall';
import { useLatestTokenIdCall } from './hooks/useLatestTokenIdCall';
import { useMyVecByIndex } from './hooks/useMyVecByIndex';
import {
  onChangeBalance,
  onChangeCurrentPrice,
  onChangeLatestTokenId,
  onOtherTokenFetched,
  onTokenAdded,
} from './stores/actions';
import { reducer } from './stores/reducer';
import { initState } from './stores/state';

type Props = {
  publicAddress: string;
  web3: Web3;
};
export const AfterMetamaskContainer = ({ publicAddress, web3 }: Props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const contract: Contract = new web3.eth.Contract(
    ABI as AbiItem[],
    Constants.ContractAddress,
  );
  const { call: currentPriceCall } = useCurrentPriceCall({
    contract,
    publicAddress,
    web3,
  });
  const { call: latestTokenIdCall } = useLatestTokenIdCall({
    contract,
    publicAddress,
    web3,
  });
  const { call: balanceOfCall } = useBalanceOfCall({ contract, publicAddress, web3 });
  const { isMintable } = useIsMintable({ contract, publicAddress, web3 });
  const { call: myVecByIndexCall } = useMyVecByIndex({ contract, publicAddress, web3 });
  const { call: generateVecCall } = useGenerateVecCall({ contract, publicAddress, web3 });
  const toast = useToast();
  const updatePriceAndLatestToken = useCallback(() => {
    currentPriceCall({
      onSuccess(price) {
        dispatch(onChangeCurrentPrice(price));
      },
    });
    latestTokenIdCall({
      onSuccess(latestTokenId) {
        dispatch(onChangeLatestTokenId(latestTokenId));
      },
    });
  }, [currentPriceCall, latestTokenIdCall]);

  useEffect(() => {
    updatePriceAndLatestToken();
    balanceOfCall({
      onSuccess(balance) {
        dispatch(onChangeBalance(balance));
        Array.from({ length: balance }).forEach((_, index) =>
          myVecByIndexCall({
            index,
            onSuccess(vec, tokenId) {
              dispatch(onTokenAdded(tokenId, vec));
            },
          }),
        );
      },
    });
    contract.events.tokenPurchased({}).on('data', async (event: any) => {
      updatePriceAndLatestToken();
      if (event.returnValues.buyer.toLowerCase() === publicAddress.toLowerCase()) {
        toast({
          status: 'success',
          title: `Token ID ${event.returnValues.tokenId} Minted!`,
        });
        generateVecCall({
          onSuccess(vec) {
            dispatch(onTokenAdded(event.returnValues.tokenId, vec));
          },
          tokenId: event.returnValues.tokenId,
        });
      } else {
        generateVecCall({
          onSuccess(vec) {
            dispatch(onOtherTokenFetched(event.returnValues.tokenId, vec));
          },
          tokenId: event.returnValues.tokenId,
        });
      }
    });
  }, []);

  return (
    <chakra.div paddingY="12rem">
      {isMintable ? (
        <MintableComponent
          contract={contract}
          dispatch={dispatch}
          publicAddress={publicAddress}
          state={state}
          web3={web3}
        />
      ) : (
        <NotMintableComponent
          contract={contract}
          publicAddress={publicAddress}
          web3={web3}
        />
      )}
      <TippingComponent
        contract={contract}
        dispatch={dispatch}
        publicAddress={publicAddress}
        state={state}
        web3={web3}
      />
    </chakra.div>
  );
};
