import { useCallback } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { useGenerateVecCall } from './useGenerateVec';

type Props = {
  contract: Contract;
  publicAddress: string;
  web3: Web3;
};

type Args = {
  index: number;
  onSuccess: (_: string, _tokenId: number) => void;
};

export function useMyVecByIndex({ contract, publicAddress, web3 }: Props) {
  const { call: generateVecCall } = useGenerateVecCall({ contract, publicAddress, web3 });
  const call = useCallback(
    (args: Args) => {
      const tokenByIndexCall = () => {
        return contract.methods['tokenByIndex'](args.index).call({
          from: publicAddress,
        }) as Promise<number>;
      };
      tokenByIndexCall()
        .then(ret => {
          console.log(ret);
          generateVecCall({
            onSuccess(vec) {
              args.onSuccess(vec, ret);
            },
            tokenId: ret,
          });
        })
        .catch(e => {
          console.error(e);
        });
    },
    [contract, web3, publicAddress],
  );

  return { call };
}
