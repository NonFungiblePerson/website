import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

type Props = {
  contract: Contract;
  publicAddress: string;
  web3: Web3;
};

export function useIsMintable({ contract, publicAddress, web3 }: Props) {
  const [isMintable, setIsMintable] = useState<boolean>(false);
  useEffect(() => {
    const isMintableCall = contract.methods['isMintable']();
    (isMintableCall.call({ from: publicAddress }) as Promise<boolean>)
      .then(ret => {
        setIsMintable(ret);
      })
      .catch(e => {
        console.error(e);
      });
  }, [contract, web3, publicAddress]);

  return { isMintable };
}
