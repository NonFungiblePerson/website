import { chakra } from '@chakra-ui/react';
import React, { Dispatch, useEffect } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { Constants } from '../../../utils/constants';
import { CenteredTitle } from '../../atoms/CenteredTitle';

import { useGenerateVecCall } from './hooks/useGenerateVec';
import { onOtherTokenFetched } from './stores/actions';
import { Action } from './stores/reducer';
import { State } from './stores/state';

type Props = {
  contract: Contract;
  dispatch: Dispatch<Action>;
  publicAddress: string;
  state: State;
  web3: Web3;
};
export const OtherGallery = ({
  contract,
  dispatch,
  publicAddress,
  state,
  web3,
}: Props) => {
  const { call: generateVecCall } = useGenerateVecCall({ contract, publicAddress, web3 });
  useEffect(() => {
    Array.from({ length: 24 }).forEach((_, i) => {
      const tokenId = state.latestTokenId - i;
      if (tokenId < 30) {
        return;
      }
      generateVecCall({
        onSuccess(vec) {
          dispatch(onOtherTokenFetched(tokenId, vec));
        },
        tokenId,
      });
    });
  }, [publicAddress]);
  return (
    <>
      {state.otherTokens.length !== 0 && (
        <chakra.div mb="6.4rem">
          <CenteredTitle text="Gallery" />
          <chakra.div display="flex" flexWrap="wrap" justifyContent="center" w="100%">
            {[...state.otherTokens].reverse().map(token => {
              return (
                <chakra.a
                  key={token.tokenId}
                  href={`${Constants.ChainSettings[Constants.ChainType].openSeaUrlBase}${
                    Constants.ContractAddress
                  }/${token.tokenId}`}
                  target="_blank"
                >
                  <chakra.div
                    dangerouslySetInnerHTML={{ __html: token.svg }}
                    h="150px"
                    mb="20px"
                    mr="20px"
                    w="150px"
                  />
                </chakra.a>
              );
            })}
          </chakra.div>
        </chakra.div>
      )}
    </>
  );
};
