import { chakra } from '@chakra-ui/react';
import React, { ReactElement, CSSProperties, ReactNode } from 'react';

type Kind =
  | 'greenFilled'
  | 'greenOutlined'
  | 'greenFilledWhiteOutlined'
  | 'orangeFilledWhiteOutlined'
  | 'redFilled'
  | 'whiteTransparent';

const colors: { [_ in Kind]: { bg: string; border: string; text: string } } = {
  greenFilled: {
    bg: 'nfpGreen',
    border: 'nfpGreen',
    text: 'white',
  },
  greenFilledWhiteOutlined: {
    bg: 'nfpGreen',
    border: 'rgba(255, 255, 255, 0.5)',
    text: 'white',
  },
  greenOutlined: {
    bg: 'white',
    border: 'nfpGreen',
    text: 'nfpGreen',
  },
  orangeFilledWhiteOutlined: {
    bg: 'nfpOrange',
    border: 'rgba(255, 255, 255, 0.5)',
    text: 'white',
  },
  redFilled: {
    bg: 'nfpRed',
    border: 'rgba(255, 255, 255, 0.5)',
    text: 'white',
  },
  whiteTransparent: {
    bg: 'transparent',
    border: 'rgba(255, 255, 255, 0.5)',
    text: 'white',
  },
};

export type Props = {
  disabled?: boolean;
  icon?: ReactNode;
  kind?: Kind;
  label: string;
  onClick?: (_?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  style?: CSSProperties;
  type?: 'submit' | 'reset' | 'button';
};

export function RadiusButton({
  disabled = false,
  icon,
  kind = 'greenFilled',
  label,
  onClick,
  style,
  type,
}: Props): ReactElement {
  const color = colors[kind];
  return (
    <chakra.button
      _disabled={{
        bg: 'nfpGreys.200',
      }}
      _hover={{
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      }}
      alignItems="center"
      backgroundColor={color.bg}
      border={`1px solid ${color.border}`}
      borderRadius="8px"
      color={color.text}
      cursor="pointer"
      disabled={disabled}
      display="inline-flex"
      fontSize="20px"
      height="60px"
      justifyContent="center"
      lineHeight="60px"
      style={style}
      textAlign="center"
      type={type}
      w="300px"
      onClick={onClick}
    >
      {icon && <chakra.div mr="5px">{icon}</chakra.div>}
      {label}
    </chakra.button>
  );
}
