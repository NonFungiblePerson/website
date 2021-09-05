import { chakra, useToast, VStack } from '@chakra-ui/react';
import React from 'react';

import { RequestArgs, useWeb3 } from '../../../hooks/useWeb3';
import { RadiusButton } from '../../atoms/RadiusButton';

type Props = {
  requestMetamask: (_: RequestArgs) => void;
};
export const BeforeMetamaskContainer = ({ requestMetamask }: Props) => {
  const toast = useToast();
  return (
    <chakra.div paddingY="12rem">
      <VStack alignItems="center" w="100%">
        <RadiusButton
          kind="greenFilled"
          label="Connect Metamask"
          onClick={() => {
            requestMetamask({
              onEnabled() {
                toast({ status: 'success', title: 'metamask activated' });
              },
              onFailed() {
                toast({ status: 'error', title: 'metamask activation failed' });
              },
            });
          }}
        />
      </VStack>
    </chakra.div>
  );
};
