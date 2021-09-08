import { Contract } from 'web3-eth-contract';

type Props = {
  contract: Contract;
  publicAddress: string;
  value: number;
};

export async function tipSend({ contract, publicAddress, value }: Props) {
  return contract.methods['tip']().send({
    from: publicAddress,
    value: String(value),
  }) as Promise<unknown>;
}
