type ChainTypes = 'rinkeby' | 'polygon';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Constants {
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
      rpcUrls: ['https://rpc-mainnet.matic.network'],
    },
    rinkeby: {
      chainId: '0x4',
    },
  };
}
