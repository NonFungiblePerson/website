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
  onSuccess?: (_: string) => void;
  tokenId: number;
};

export function useGenerateVecCall({ contract, publicAddress, web3 }: Props) {
  const call = useCallback(
    (args: Args) => {
      const generateVec = contract.methods['generateVec'](args.tokenId);
      (generateVec.call({ from: publicAddress }) as Promise<string>)
        .then(ret => {
          console.log(ret);
          args.onSuccess?.(ret);
        })
        .catch(e => {
          console.error(e);
          args.onError?.();
        });
    },
    [contract, publicAddress, web3],
  );
  return { call };
}
