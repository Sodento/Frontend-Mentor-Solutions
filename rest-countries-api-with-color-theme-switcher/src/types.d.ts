export type CurrenciesType = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type NativeNameType = {
  [key: string]: {
    official: string;
    common: string;
  }
}

export type NameType = {
  common: string;
  nativeName: NativeNameType;
  official: string;
}

export type LanguagesType = {
  [key: string]: string;
}

export interface Countries {
  flags: {
    png: string;
  };
  name: NameType;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  ccn3: string;
  currencies: CurrenciesType;
  languages: LanguagesType;
  tld: string;
}
