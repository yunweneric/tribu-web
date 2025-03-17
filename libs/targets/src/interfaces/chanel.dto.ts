export interface IChannel {
  channelId?: string;
  name: string;
  specification: {
    dimension: string;
    resolution: string;
    video_quality: string;
  };
  budget: number;
}
