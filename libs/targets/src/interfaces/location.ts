export interface Location {
  Country: string;
  Region: string;
  City: string;
  PostalCode: string;
  Latitude: number;
  Longitude: number;
  Address: string; // PII
  Neighborhood: string;
  GeoFenceRadius: number;
  ProximityToLandmark: string;
  TimeZone: string;
  RegionType: string; // Enum
}
