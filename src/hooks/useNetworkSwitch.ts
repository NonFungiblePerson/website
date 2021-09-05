import { useCallback } from 'react';

import { Constants } from '../utils/constants';

type Args = {
  onError?: () => void;
};

export function useNetworkSwitch() {
  const request = useCallback(
    async (args: Args) => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Constants.ChainSettings[Constants.ChainType].chainId }],
          });
        } catch (e) {
          console.error(e);
          args.onError?.();
        }
      }
    },
    [window.ethereum],
  );

  return { request };
}
