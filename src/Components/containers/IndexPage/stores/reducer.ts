import {
  onChangeBalance,
  onChangeCurrentPrice,
  onChangeLatestTokenId,
  onChangeTipForm,
  onChangeTotalTip,
  onOtherTokenFetched,
  onTokenAdded,
  onTokenFetched,
} from './actions';
import { State } from './state';

export type Action = ReturnType<
  | typeof onTokenAdded
  | typeof onTokenFetched
  | typeof onChangeBalance
  | typeof onChangeLatestTokenId
  | typeof onChangeCurrentPrice
  | typeof onChangeTotalTip
  | typeof onChangeTipForm
  | typeof onOtherTokenFetched
>;

export function reducer(state: State, action: Action): State {
  const patch = (diff: Partial<State>): State => ({ ...state, ...diff });
  switch (action.type) {
    case 'onTokenAdded':
      return patch({
        tokens: [
          ...state.tokens,
          { svg: action.payload.vec, tokenId: action.payload.tokenId },
        ],
      });
    case 'onTokenFetched':
      return patch({
        tokens: state.tokens.map(token => {
          if (token.tokenId === action.payload.tokenId) {
            return { ...token, svg: action.payload.svg };
          } else {
            return token;
          }
        }),
      });
    case 'onOtherTokenFetched':
      return patch({
        otherTokens: [
          ...state.otherTokens.slice(-23),
          { svg: action.payload.svg, tokenId: action.payload.tokenId },
        ],
      });
    case 'onChangeBalance':
      return patch({ balance: action.payload.balance });
    case 'onChangeCurrentPrice':
      return patch({ currentPrice: action.payload.price });
    case 'onChangeLatestTokenId':
      return patch({ latestTokenId: action.payload.tokenId });
    case 'onChangeTotalTip':
      return patch({ totalTip: action.payload.tip });
    case 'onChangeTipForm':
      return patch({ tipForm: action.payload.tip });
  }
}
