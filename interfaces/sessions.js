type chrome$Filter = {maxResults?: number};

type chrome$Session = {
  lastModified: number,
  tab?: chrome$Tab,
  window?: chrome$Window
};

type chrome$Device = {
  deviceName: string,
  sessions: Array<chrome$Session>
};

type chrome$sessions = {
  MAX_SESSION_RESULTS: 25,

  getDevices: (
    ((filter: chrome$Filter, callback: (devices: Array<chrome$Device>) => void) => void) &
    ((callback: (devices: Array<chrome$Device>) => void) => void)
  ),
  getRecentlyClosed: (
    ((filter: chrome$Filter, callback: (sessions: Array<chrome$Session>) => void) => void) &
    ((callback: (sessions: Array<chrome$Session>) => void) => void)
  ),
  restore(sessionId?: string, callback?: (restoredSession: chrome$Session) => void): void,

  onChanged: chrome$Event
}
