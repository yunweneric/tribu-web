import {
  Browser,
  ConnectionSpeed,
  DeviceType,
  NetworkType,
  OperatingSystem,
} from '../enums/target.num';

export interface IDeviceDto {
  deviceType?: DeviceType;
  deviceModel?: string;
  browser?: Browser;
  screenResolution?: string;
  operatingSystem?: OperatingSystem;
  ipAddress?: string;
  macAddress?: string;
  deviceId?: string;
  mobileCarier?: string;
  imeiNumber?: string;
  networkType?: NetworkType;
  appVerion?: string;
  ConnectionSpeed?: ConnectionSpeed;
  batteryLevel?: number;
}
