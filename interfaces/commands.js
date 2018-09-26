type chrome$Command = {
  description?: string,
  name?: string,
  shortcut?: string
};

type chrome$commands = {
  getAll(callback: (commands: Array<chrome$Command>) => void): void,

  onCommand: {
    ...chrome$Event,
    addListener(callback: (command: string) => void): void
  }
};
