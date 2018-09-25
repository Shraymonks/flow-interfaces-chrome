type chrome$Permissions = {
  origins?: Array<string>,
  permissions?: Array<string>
};

type chrome$permissions = {
  contains(permissions: chrome$Permissions, callback: (result: boolean) => void): void,
  getAll(callback: (permissions: chrome$Permissions) => void): void,
  remove(permissions: chrome$Permissions, callback?: (removed: boolean) => void): void,
  request(permissions: chrome$Permissions, callback?: (granted: boolean) => void): void,

  onAdded: {
    ...chrome$Event,
    addListener(callback: (permissions: chrome$Permissions) => void): void
  },
  onRemoved: {
    ...chrome$Event,
    addListener(callback: (permissions: chrome$Permissions) => void): void
  }
};
