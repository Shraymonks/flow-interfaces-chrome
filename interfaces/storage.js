type chrome$StorageChange = {
  newValue?: any,
  oldValue?: any,
};

type chrome$StorageArea = {
  clear(callback?: () => void): void,
  get: ((
    keys: string | Array<string> | { [key: string]: any } | null,
    callback: (items: { [key: string]: any }) => void
  ) => void) &
    ((callback: (items: { [key: string]: any }) => void) => void),
  getBytesInUse: ((
    keys: string | Array<string> | null,
    callback: (bytesInUse: number) => void
  ) => void) &
    ((callback: (bytesInUse: number) => void) => void),
  remove(keys: string | Array<string>, callback?: () => void): void,
  set(items: { [key: string]: any }, callback?: () => void): void,
};

type chrome$storage = {
  local: chrome$StorageArea,
  managed: chrome$StorageArea,
  sync: chrome$StorageArea,

  onChanged: {
    ...chrome$Event,
    addListener(
      callback: (changes: { [key: string]: any }, areaName: 'local' | 'managed' | 'sync') => void
    ): void,
  },
};
