import {
  DaysOfWeek,
  EventType,
  SignificantMileStone,
  TimesOfDay,
  TimeZone,
} from '../enums/target.num';

export interface TimeAndEventBasedTargetingDto {
  eventType?: EventType;
  timeOfDay?: TimesOfDay;
  dateRange?: Date;
  dayOfTheWeek?: DaysOfWeek;
  recuringEvent?: boolean;
  significantMilestone?: SignificantMileStone;
  timeZone?: TimeZone;
}

export interface UpdateTimeAndEventBasedTargetingDto
  extends Partial<TimeAndEventBasedTargetingDto> {}
