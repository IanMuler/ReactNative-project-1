export enum Screens {
  PokedexNavigator = "PokedexNavigator",
  FavoritesNavigator = "FavoritesNavigator",
  Favorites = "Favorites",
  Account = "Account",
  Pokedex = "Pokedex",
  Pokemon = "Pokemon",
}

export type PrincipalScreenValue =
  | Screens.PokedexNavigator
  | Screens.FavoritesNavigator
  | Screens.Account;
