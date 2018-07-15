type chrome$StorageChange = {
  newValue?: any,
  oldValue?: any
};

type chrome$StorageArea = {
  clear(callback?: () => void): void,
  get: (
    ((keys: string | Array<string> | Object | null, callback: (items: Object) => void) => void) &
    ((callback: (items: Object) => void) => void)
  ),
  getBytesInUse: (
    ((keys: string | Array<string> | null, callback: (bytesInUse: number) => void) => void) &
    ((callback: (bytesInUse: number) => void) => void)
  ),
  remove(keys: string | Array<string>, callback?: () => void): void,
  set(items: Object, callback?: () => void): void
};

type chrome$storage = {
  local: chrome$StorageArea,
  managed: chrome$StorageArea,
  sync: chrome$StorageArea,

  onChanged: chrome$Event & {
    addListener(callback: (changes: Object, areaName: 'local' | 'managed' | 'sync') => void): void
  }
};
