import { chakra, Text, useToast, VStack } from '@chakra-ui/react';
import React from 'react';

import { RequestArgs, useWeb3 } from '../../../hooks/useWeb3';
import { RadiusButton } from '../../atoms/RadiusButton';

type Props = {
  publicAddress?: string;
};
export const AfterMetamaskContainer = ({ publicAddress }: Props) => {
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
