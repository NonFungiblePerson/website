import { useCallback } from 'react';

import { Constants } from '../utils/constants';

type Args = {
  onError?: () => void;
};

export function useAddChain() {
  const request = useCallback(
    (args: Args) => {
      if (window.ethereum) {
        try {
          window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [Constants.ChainSettings[Constants.ChainType]],
          });
        } catch (e) {
          args.onError?.();
        }
      }
    },
    [window.ethereum],
  );

  return { request };
}
