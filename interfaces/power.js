type chrome$Level = 'display' | 'system';

type chrome$power = {
  releaseKeepAwake(): void,
  requestKeepAwake(level: chrome$Level): void
}
