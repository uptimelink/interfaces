export type TServiceStatus = 'up' | 'down';

export interface IHourlyStatus {
  states: { unixTimes: number; status: TServiceStatus };
}
