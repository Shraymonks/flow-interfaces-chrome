type chrome$Alarm = {
  name: string,
  periodInMinutes?: number,
  scheduledTime: number
};

type $alarm$AlarmInfo = {
  delayInMinutes?: number,
  periodInMinutes?: number,
  when?: number
};

type $alarm$AlarmCallback = (alarm: chrome$Alarm) => void;
type $alarm$WasClearedCallback = (wasCleared: boolean) => void;

type chrome$alarms = {
  clear(name?: string, callback?: $alarm$WasClearedCallback): void,
  clearAll(callback?: $alarm$WasClearedCallback): void,
  create: (
    ((name: string, alarmInfo: $alarm$AlarmInfo) => void) &
    ((alarmInfo: $alarm$AlarmInfo) => void)
  ),
  get: (
    ((name: string, callback: $alarm$AlarmCallback) => void) &
    ((callback: $alarm$AlarmCallback) => void)
  ),
  getAll(callback: (alarms: Array<chrome$Alarm>) => void): void,

  onAlarm: chrome$Event & {
    addListener(callback: $alarm$AlarmCallback): void
  }
};
