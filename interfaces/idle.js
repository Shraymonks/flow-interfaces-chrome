type chrome$IdleState = 'active' | 'idle' | 'locked';

type chrome$idle = {
  queryState(
    detectionIntervalInSeconds: number,
    callback: (newState: chrome$IdleState
  ) => void): void,
  setDetectionInterval(intervalInSeconds: number): void,

  onStateChanged: {
    ...chrome$Event,
    addListener(callback: (newState: chrome$IdleState) => void): void
  }
};
