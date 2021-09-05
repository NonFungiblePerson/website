import { Box, chakra, HStack, Text } from '@chakra-ui/react';
import { useRef } from 'react';

import { useAppBar } from '../../../hooks/useAppBar';

const height = `70px`;

export const BasicLayoutHeader = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollDirection } = useAppBar({ ref });
  return (
    <>
      <chakra.header
        ref={ref}
        bgColor={'white'}
        boxShadow="0 4px 8px -3px rgba(17, 17, 17, .06)"
        height={height}
        position="fixed"
        top="0"
        transform={scrollDirection === 'down' ? 'translateY(-100%)' : ''}
        transition=".6s cubic-bezier(.4, 0, .2, 1)"
        width="100%"
        zIndex="10"
      >
        <HStack alignItems="center">
          <Text fontSize="2xl" textAlign="center">
            Web3 Utils
          </Text>
        </HStack>
      </chakra.header>
      <Box height={height} />
    </>
  );
};
