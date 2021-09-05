import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useMetamask } from '../../../hooks/useMetamask';

export const RequireMetamaskWrapper = ({ children }: { children: ReactNode }) => {
  const { isMetamaskInstalled } = useMetamask(window.ethereum);
  console.log(isMetamaskInstalled);
  return <>{isMetamaskInstalled ? children : <Text>install metamask</Text>}</>;
};
