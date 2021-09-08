import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

type Props = {
  contract: Contract;
  publicAddress: string;
  web3: Web3;
};

type Args = {
  onError?: () => void;
  onSuccess?: () => void;
  value: number;
};

export function useMintSend({ contract, publicAddress, web3 }: Props) {
  const call = useCallback(
    (args: Args) => {
      const mint = contract.methods['mint']();
      (
        mint.send({ from: publicAddress, value: String(args.value) }) as Promise<unknown>
      ).catch(e => {
        console.error(e);
        args.onError?.();
      });
    },
    [contract, publicAddress, web3],
  );
  return { call };
}
