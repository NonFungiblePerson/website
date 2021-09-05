import { chakra, Text, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useReducer } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

import ABI from '../../../utils/abi.json';
import { Constants } from '../../../utils/constants';

import { Gallery } from './Gallery';
import { useCurrentPriceCall } from './hooks/useCurrentPriceCall';
import { useLatestTokenIdCall } from './hooks/useLatestTokenIdCall';
import { onChangeCurrentPrice, onChangeLatestTokenId } from './stores/actions';
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
    contract.events.tokenPurchased({}).on('data', async (event: any) => {
      updatePriceAndLatestToken();
      console.log(event);
      console.log(event.returnValues.buyer);
      console.log(event.returnValues.tokenId);
      if (event.returnValues.buyer === publicAddress) {
        console.log('my purchase');
      } else {
        console.log('someone purchased');
      }
    });
  }, []);

  return (
    <chakra.div paddingY="12rem">
      <VStack alignItems="center" w="100%">
        <Text color="nfpGreys.400" fontSize="3.2rem" mb="3.2rem">
          Coming soon
        </Text>
        <Text color="nfpGreys.400" fontSize="1.6rem" mb="3.2rem">
          Minting button,seeing current price, your galleries will be shown here.
        </Text>
        <Text color="nfpGreys.400" fontSize="1.6rem" mb="3.2rem">
          Your Address: {publicAddress}
        </Text>
        {state.latestTokenId && <Text>latestTokenId: {state.latestTokenId}</Text>}
        {state.currentPrice && <Text>currentPrice: {state.currentPrice}</Text>}
        <Gallery
          contract={contract}
          dispatch={dispatch}
          publicAddress={publicAddress}
          state={state}
          web3={web3}
        />
      </VStack>
    </chakra.div>
  );
};
