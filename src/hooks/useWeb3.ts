import { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';

import { useMetamask } from './useMetamask';

export type RequestArgs = {
  onEnabled?: () => void;
  onFailed?: () => void;
};

export function useWeb3(
  globalEthereum: any,
  globalWeb3: any,
): {
  isMetamaskActivated: boolean;
  isMetamaskApproved: boolean;
  isMetamaskInstalled: boolean;
  publicAddress: string | undefined;
  requestMetamask: (_: RequestArgs) => void;
  web3?: Web3;
} {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const { isMetamaskInstalled } = useMetamask(globalEthereum);
  const [isMetamaskApproved, setIsMetamaskApproved] = useState<boolean>(false);
  const [isMetamaskActivated, setIsMetamaskActivated] = useState<boolean>(false);
  const [publicAddress, setPublicAddress] = useState<string | undefined>();

  const requestMetamask = useCallback(
    ({ onEnabled, onFailed }: RequestArgs) => {
      if (!web3) {
        if (window.ethereum) {
          const newWeb3 = new Web3(window.ethereum);
          setWeb3(newWeb3);
          try {
            window.ethereum.enable().then(function () {
              setIsMetamaskApproved(true);
              onEnabled?.();
            });
          } catch (e) {
            setIsMetamaskApproved(false);
            onFailed?.();
          }
        }
        // Legacy DApp Browsers
        else if (window.web3) {
          setWeb3(new Web3(window.web3.currentProvider));
        }
        // Non-DApp Browsers
        else {
          window.alert('You have to install MetaMask');
        }
      } else {
        try {
          window.ethereum.enable().then(function () {
            setIsMetamaskApproved(true);
            onEnabled?.();
          });
        } catch (e) {
          setIsMetamaskApproved(false);
          onFailed?.();
        }
      }
    },
    [web3, globalWeb3, globalEthereum],
  );

  useEffect(() => {
    if (web3) {
      web3?.eth
        ?.getCoinbase()
        .then(coinbase => {
          setPublicAddress(coinbase.toLowerCase());
          setIsMetamaskActivated(true);
        })
        .catch(e => {
          console.error(e);
          setPublicAddress(undefined);
          setIsMetamaskActivated(false);
        });
    } else {
      setPublicAddress(undefined);
      setIsMetamaskActivated(false);
    }
  }, [web3]);

  return {
    isMetamaskActivated,
    isMetamaskApproved,
    isMetamaskInstalled,
    publicAddress,
    requestMetamask,
    web3,
  };
}
