export interface IAddress {
  type: string;
  properties: {
    datasource: {
      sourcename: string;
      attribution: string;
      license: string;
      url: string;
    };
    old_name: string;
    country: string;
    country_code: string;
    lon: number;
    lat: number;
    name: string;
    result_type: string;
    formatted: string;
    address_line1: string;
    address_line2: string;
    category: string;
    timezone: {
      name: string;
      offset_STD: string;
      offset_STD_seconds: number;
      offset_DST: string;
      offset_DST_seconds: number;
    };
    plus_code: string;
    rank: {
      importance: number;
      confidence: number;
      match_type: string;
    };
    place_id: string;
    bbox: [number, number, number, number];
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

export interface IData {
  type: string;
  features: IAddress[];
  query: {
    text: string;
  };
}
