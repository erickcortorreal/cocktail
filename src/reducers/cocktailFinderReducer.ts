import {
  CocktailFinderState,
  CocktailFinderTypes,
  FIND_COCKTAILS,
  SET_CRITERIA,
  TOGGLE_LOADING,
} from '../types/cocktailFinderTypes';

const initialState: CocktailFinderState = {
  criteria: '',
  cocktails: [],
  loading: false,
};

export function cocktailFinderReducer(
  state = initialState,
  action: CocktailFinderTypes,
): CocktailFinderState {
  switch (action.type) {
    case SET_CRITERIA:
      return {...state, criteria: action.criteria};
    case FIND_COCKTAILS:
      return {...state, cocktails: action.cocktails};
    case TOGGLE_LOADING:
      return {...state, loading: !state.loading};
    default:
      return state;
  }
}
