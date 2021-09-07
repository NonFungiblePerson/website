import { Text, VStack, chakra } from '@chakra-ui/react';
import React, { Dispatch } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { Gallery } from './Gallery';
import { Action } from './stores/reducer';
import { State } from './stores/state';

type Props = {
  contract: Contract;
  dispatch: Dispatch<Action>;
  publicAddress: string;
  state: State;
  web3: Web3;
};
export const MintableComponent = ({
  contract,
  dispatch,
  publicAddress,
  state,
  web3,
}: Props) => {
  return (
    <chakra.div>
      <Text
        color="nfpGreys.400"
        fontSize="3.2rem"
        lineHeight="4rem"
        mb="3.2rem"
        textAlign="center"
      >
        Now Mintable!
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
    </chakra.div>
  );
};
