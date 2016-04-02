type chrome$RemovalOptions = {
  originTypes?: {
    extension?: boolean,
    protectedWeb?: boolean,
    unprotectedWeb?: boolean
  },
  since?: number
};

type chrome$DataTypeSet = {
  appcache?: boolean,
  cache?: boolean,
  cookies?: boolean,
  downloads?: boolean,
  fileSystems?: boolean,
  formData?: boolean,
  history?: boolean,
  indexedDB?: boolean,
  localStorage?: boolean,
  passwords?: boolean,
  pluginData?: boolean,
  serverBoundCertificates?: boolean,
  serviceWorkers?: boolean,
  webSQL?: boolean
};

type chrome$browsingData = {
  remove(options: chrome$RemovalOptions, dataToRemove: chrome$DataTypeSet, callback?: () => void): void,
  removeAppcache(options: chrome$RemovalOptions, callback?: () => void): void,
  removeCache(options: chrome$RemovalOptions, callback?: () => void): void,
  removeCookies(options: chrome$RemovalOptions, callback?: () => void): void,
  removeDownloads(options: chrome$RemovalOptions, callback?: () => void): void,
  removeFileSystems(options: chrome$RemovalOptions, callback?: () => void): void,
  removeFormData(options: chrome$RemovalOptions, callback?: () => void): void,
  removeHistory(options: chrome$RemovalOptions, callback?: () => void): void,
  removeIndexedDB(options: chrome$RemovalOptions, callback?: () => void): void,
  removeLocalStorage(options: chrome$RemovalOptions, callback?: () => void): void,
  removePasswords(options: chrome$RemovalOptions, callback?: () => void): void,
  removePluginData(options: chrome$RemovalOptions, callback?: () => void): void,
  removeWebSQL(options: chrome$RemovalOptions, callback?: () => void): void,
  settings(callback: (result: {
    dataRemovalPermitted: chrome$DataTypeSet,
    dataToRemove: chrome$DataTypeSet,
    options: chrome$RemovalOptions
  }) => void): void,
};
