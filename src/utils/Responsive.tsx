import { useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function useResponsiveCondition(): { isSp: boolean } {
  const [isSp] = useMediaQuery('(max-width: 800px)');
  return { isSp };
}

export const Pc: React.FC<Props> = ({ children }: Props) => {
  const { isSp } = useResponsiveCondition();
  return <>{isSp ? undefined : children}</>;
};

export const Sp: React.FC<Props> = ({ children }: Props) => {
  const { isSp } = useResponsiveCondition();
  return <>{isSp ? children : undefined}</>;
};
