export enum Screens {
  PokedexNavigator = "PokedexNavigator",
  Favorites = "Favorites",
  Account = "Account",
  Pokedex = "Pokedex",
  Pokemon = "Pokemon",
}

export type PrincipalScreenValue =
  | Screens.PokedexNavigator
  | Screens.Favorites
  | Screens.Account;

export type PokedexScreenValue = Screens.Pokedex | Screens.Pokemon;
