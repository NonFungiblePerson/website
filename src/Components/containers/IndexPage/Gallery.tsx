import { chakra, Box, Text, HStack } from '@chakra-ui/react';
import React, { Dispatch, useEffect } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { Constants } from '../../../utils/constants';
import { CenteredTitle } from '../../atoms/CenteredTitle';

import { useBalanceOfCall } from './hooks/useBalanceOfCall';
import { onChangeBalance } from './stores/actions';
import { Action } from './stores/reducer';
import { State } from './stores/state';

type Props = {
  contract: Contract;
  dispatch: Dispatch<Action>;
  publicAddress: string;
  state: State;
  web3: Web3;
};
export const Gallery = ({ contract, dispatch, publicAddress, state, web3 }: Props) => {
  const { call: balanceOfCall } = useBalanceOfCall({ contract, publicAddress, web3 });
  useEffect(() => {
    balanceOfCall({
      onSuccess(ret) {
        dispatch(onChangeBalance(Number(ret)));
        console.log(ret);
      },
    });
  }, [publicAddress]);
  return (
    <>
      {state.tokens.length !== 0 && (
        <chakra.div mb="6.4rem">
          <CenteredTitle text="Your Collections" />
          <chakra.div display="flex" flexWrap="wrap" justifyContent="center" w="100%">
            {[...state.tokens].reverse().map(token => {
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
                    h="200px"
                    mb="20px"
                    mr="20px"
                    w="200px"
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
