import {
  Cocktail,
  SET_CRITERIA,
  FIND_COCKTAILS,
  CocktailFinderTypes,
  TOGGLE_LOADING,
} from '../types/cocktailFinderTypes';

import {ThunkAction, ThunkDispatch} from 'redux-thunk';

export function setCriteria(criteria: string): CocktailFinderTypes {
  return {
    type: SET_CRITERIA,
    criteria,
  };
}

export function findCocktails(cocktails: Array<Cocktail>): CocktailFinderTypes {
  return {
    type: FIND_COCKTAILS,
    cocktails,
  };
}

export function toggleLoading(): CocktailFinderTypes {
  return {
    type: TOGGLE_LOADING,
  };
}

export function search(
  criteria: string,
): ThunkAction<Promise<void>, {}, {}, CocktailFinderTypes> {
  // Invoke API
  return async (
    dispatch: ThunkDispatch<{}, {}, CocktailFinderTypes>,
  ): Promise<void> => {
    return new Promise<void>(resolve => {
      dispatch(setCriteria(criteria));
      if (criteria.length > 2) {
        dispatch(toggleLoading());
        return fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${criteria}`,
        )
          .then(response => response.json())
          .then(json => {
            const cocktails = (json.drinks || []).map(
              (d: {
                strDrink: string;
                strDrinkThumb: string;
                idDrink: string;
              }) => ({
                name: d.strDrink,
                imgURI: d.strDrinkThumb,
                id: d.idDrink,
              }),
            );
            dispatch(findCocktails(cocktails));
            dispatch(toggleLoading());
            resolve();
          });
      } else {
        dispatch(findCocktails([]));
        resolve();
      }
    });
  };
}
