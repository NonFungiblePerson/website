type Token = {
  svg: string;
  tokenId: number;
};

export type State = {
  balance: number;
  currentPrice: number;
  latestTokenId: number;
  mintedTokensCount: number;
  otherTokens: Token[];
  tipForm: number;
  tokens: Token[];
  totalTip: number;
};

export const initState: State = {
  balance: 0,
  currentPrice: 0,
  latestTokenId: 0,
  mintedTokensCount: 0,
  otherTokens: [],
  tipForm: 0,
  tokens: [],
  totalTip: 0,
};
