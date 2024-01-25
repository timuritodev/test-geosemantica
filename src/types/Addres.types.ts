export interface IAddress {
  country: string,
  country_code: string,
  region: string,
  state: string,
  city: string,
  datasource: {
    sourcename: string,
    attribution: string,
    license: string,
    url: string
  },
  lon: number,
  lat: number,
  population: number,
  result_type: string,
  formatted: string,
  address_line1: string,
  address_line2: string,
  category: string,
  timezone: {
    name: string,
    offset_STD: string,
    offset_STD_seconds: number,
    offset_DST: string,
    offset_DST_seconds: number,
    abbreviation_STD: string,
    abbreviation_DST: string
  },
  plus_code: string,
  plus_code_short: string,
  rank: {
    confidence: number,
    confidence_city_level: number,
    match_type: string
  },
  place_id: string,
}

export interface IData {
  results: IAddress[];
  query: {
    text: string;
  };
}