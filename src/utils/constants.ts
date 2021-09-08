type ChainTypes = 'rinkeby' | 'polygon';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Constants {
  export const ContractAddress = '0x5b474962E24D5948410741a1689d0D36e938b2B7';
  export const ChainType = 'polygon';
  export const ChainSettings: { [_ in ChainTypes]: any } = {
    polygon: {
      blockExplorerUrls: ['https://polygonscan.com/'],
      chainId: '0x89',
      chainName: 'Polygon',
      nativeCurrency: {
        decimals: 18,
        name: 'MATIC',
        symbol: 'MATIC',
      },
      openSeaUrlBase: 'https://opensea.io/assets/matic/',
      rpcUrls: ['https://rpc-mainnet.matic.network'],
    },
    rinkeby: {
      chainId: '0x4',
      openSeaUrlBase: 'https://testnets.opensea.io/assets/',
    },
  };
}
