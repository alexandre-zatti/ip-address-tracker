export type IpData = {
  ip: string;
  is_eu: boolean;
  city: string;
  region: string;
  region_code: string;
  region_type: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  postal: string;
  calling_code: string;
  flag: string;
  emoji_flag: string;
  emoji_unicode: string;
  asn: {
    asn: string;
    name: string;
    domain: string | null;
    route: string;
    type: string;
  };
};

export type IpError = {
  message: string
}

export type IpResult = {
  data?: IpData;
  error?: IpError;
};