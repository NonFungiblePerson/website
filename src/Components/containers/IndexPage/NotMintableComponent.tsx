import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

type Props = {
  contract: Contract;
  publicAddress: string;
  web3: Web3;
};
export const NotMintableComponent = ({ publicAddress }: Props) => {
  return (
    <VStack>
      <Text
        color="nfpGreys.400"
        fontSize="3.2rem"
        lineHeight="4rem"
        mb="3.2rem"
        textAlign="center"
      >
        Currently not mintable.
        <br />
        Wait for a while.
      </Text>
      <Text color="nfpGreys.400" fontSize="1.6rem" mb="3.2rem" textAlign="center">
        Your Address: {publicAddress}
      </Text>
    </VStack>
  );
};
