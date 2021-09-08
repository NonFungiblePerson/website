import { Contract } from 'web3-eth-contract';

type Props = {
  contract: Contract;
  publicAddress: string;
};

export async function tipTotalCall({ contract, publicAddress }: Props) {
  return contract.methods['currentTipTotal']().call({
    from: publicAddress,
  }) as Promise<number>;
}
