export interface Device {
  DeviceType: string; // Enum
  DeviceModel: string;
  OperatingSystem: string; // Enum
  Browser: string; // Enum
  ScreenResolution: string;
  IPAddress: string; // PII
  MACAddress: string; // PII
  DeviceID: string; // PII
  IMEINumber: string; // PII
  MobileCarrier: string;
  NetworkType: string; // Enum
  AppVersion: string;
  ConnectionSpeed: string; // Enum
  BatteryLevel: number;
}
