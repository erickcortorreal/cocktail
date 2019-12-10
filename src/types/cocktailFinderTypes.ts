export interface Cocktail {
  id: string;
  name: string;
  imgURI: string;
}

export interface CocktailFinderState {
  criteria: string;
  cocktails: Cocktail[];
  loading: boolean;
}
export const SET_CRITERIA = 'SET_CRITERIA';

export const FIND_COCKTAILS = 'FIND_COCKTAILS';

export const TOGGLE_LOADING = 'TOGGLE_LOADING';

interface SetCriteriaAction {
  type: typeof SET_CRITERIA;
  criteria: string;
}

interface FindCocktailsAction {
  type: typeof FIND_COCKTAILS;
  cocktails: Array<Cocktail>;
}

interface ToggleLoadingAction {
  type: typeof TOGGLE_LOADING;
}

export type CocktailFinderTypes =
  | SetCriteriaAction
  | FindCocktailsAction
  | ToggleLoadingAction;
