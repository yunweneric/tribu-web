import {
  SocialPlatform,
  TimesOfDay,
  EngagementLevel,
  ContentTypeShared,
} from '../enums/target.num';

export interface SocialDataDto {
  socialPlatform?: SocialPlatform;
  TimesOfDay?: TimesOfDay;
  engagementLevel?: EngagementLevel;
  contentTypeShared?: ContentTypeShared;
  numberOfFollowers?: number;
  shares?: number;
  comments?: number;
  likes?: number;
  timeSpentOnPlatform?: number;
}

export interface UpdateSocialDataDto extends Partial<SocialDataDto> {}
