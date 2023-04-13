import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({children}) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);
  function addFavorite( id ) {
    setFavoritesMealIds(currentFavIds => [...currentFavIds, id]);
  }
  function removeFavorite( id ) {
    setFavoritesMealIds(currentFavIds => currentFavIds.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favoritesMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )
}

export default FavoriteContextProvider;