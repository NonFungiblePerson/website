import { Text, chakra, HStack } from '@chakra-ui/react';
import React, { Dispatch } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { CenteredTitle } from '../../atoms/CenteredTitle';
import { RadiusButton } from '../../atoms/RadiusButton';

import { Gallery } from './Gallery';
import { OtherGallery } from './OtherGallery';
import { useMintSend } from './hooks/useMintSend';
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
  const { call: mintSend } = useMintSend({ contract, publicAddress, web3 });
  return (
    <chakra.div mb="6.4rem">
      <CenteredTitle text="Mint NFT" />
      <Text
        color="nfpGreys.400"
        fontSize="2rem"
        lineHeight="4rem"
        mb="1.6rem"
        textAlign="center"
      >
        Now Mintable!
      </Text>
      <HStack justifyContent="center" mb="1rem">
        <RadiusButton
          label="Mint"
          onClick={() => {
            mintSend({
              value: state.currentPrice,
            });
          }}
        />
      </HStack>
      {state.latestTokenId && (
        <Text color="nfpGreys.400" fontSize="1.6rem" mb="1rem" textAlign="center">
          latestTokenId: {state.latestTokenId}
        </Text>
      )}
      <Text color="nfpGreys.400" fontSize="1.6rem" mb="3.2rem" textAlign="center">
        Your Address: {publicAddress}
      </Text>
      <Gallery
        contract={contract}
        dispatch={dispatch}
        publicAddress={publicAddress}
        state={state}
        web3={web3}
      />
      {state.latestTokenId && (
        <OtherGallery
          contract={contract}
          dispatch={dispatch}
          publicAddress={publicAddress}
          state={state}
          web3={web3}
        />
      )}
    </chakra.div>
  );
};
