import { chakra, Box, Text, HStack } from '@chakra-ui/react';
import React, { Dispatch, useEffect } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

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
      <chakra.div display="flex" flexWrap="wrap" w="100%">
        gallery
      </chakra.div>
    </>
  );
};
