import { chakra } from '@chakra-ui/react';
import React from 'react';

type Props = {
  text: string;
};
export const CenteredTitle = ({ text }: Props) => {
  return (
    <chakra.div
      borderBottom="1px solid inherit"
      color="#00be89"
      fontSize="6rem"
      fontWeight={700}
      mb="1.6rem"
      textAlign="center"
    >
      {text}
    </chakra.div>
  );
};
