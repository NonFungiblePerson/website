export const onTokenAdded = (tokenId: number, vec: string) =>
  ({
    payload: { tokenId, vec },
    type: 'onTokenAdded',
  } as const);

export const onTokenFetched = (tokenId: number, svg: string) =>
  ({
    payload: { svg, tokenId },
    type: 'onTokenFetched',
  } as const);

export const onOtherTokenFetched = (tokenId: number, svg: string) =>
  ({
    payload: { svg, tokenId },
    type: 'onOtherTokenFetched',
  } as const);

export const onChangeBalance = (balance: number) =>
  ({
    payload: { balance },
    type: 'onChangeBalance',
  } as const);

export const onChangeCurrentPrice = (price: number) =>
  ({
    payload: { price },
    type: 'onChangeCurrentPrice',
  } as const);

export const onChangeLatestTokenId = (tokenId: number) =>
  ({
    payload: { tokenId },
    type: 'onChangeLatestTokenId',
  } as const);

export const onChangeTotalTip = (tip: number) =>
  ({
    payload: { tip },
    type: 'onChangeTotalTip',
  } as const);

export const onChangeTipForm = (tip: number) =>
  ({
    payload: { tip },
    type: 'onChangeTipForm',
  } as const);
