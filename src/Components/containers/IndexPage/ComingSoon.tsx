import { chakra, Text, useToast, VStack } from '@chakra-ui/react';
import React from 'react';
import Web3 from 'web3';

type Props = {
  publicAddress: string;
  web3: Web3;
};
export const ComingSoon = ({ publicAddress, web3 }: Props) => {
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
      </VStack>
    </chakra.div>
  );
};
