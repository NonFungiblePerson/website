type Token = {
  svg?: string;
  tokenId: number;
};

export type State = {
  balance: number;
  currentPrice: number;
  latestTokenId: number;
  mintedTokensCount: number;
  tokens: Token[];
};

export const initState: State = {
  balance: 0,
  currentPrice: 0,
  latestTokenId: 0,
  mintedTokensCount: 0,
  tokens: [],
};
