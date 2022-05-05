export type InitiProps = {
    name: string;
};

export interface InitCountry {
    capital: string[];
    population: number;
    latlng: number[];
    flags: {
        svg: string;
    };
}

 export interface InitCountryWeatherInfo {
    temperature: number;
    weather_icons: string[];
    wind_speed: number;
    precip: number;
}

export type ActionType =
  | InitCountry
  | InitCountryWeatherInfo;
