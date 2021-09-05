import { useEffect, useState } from 'react';
export function useMetamask(globalEthereum: any): { isMetamaskInstalled: boolean } {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(true);

  useEffect(() => {
    if (!globalEthereum) {
      setIsMetamaskInstalled(false);
    }
  }, [globalEthereum]);

  return { isMetamaskInstalled };
}
