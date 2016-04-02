type chrome$FilenameConflightAction = 'overwrite' | 'prompt' | 'uniquify';

type chrome$InterruptReason = (
  'CRASH' |
  'FILE_ACCESS_DENIED' |
  'FILE_BLOCKED' |
  'FILE_FAILED' |
  'FILE_HASH_MISMATCH' |
  'FILE_NAME_TOO_LONG' |
  'FILE_NO_SPACE' |
  'FILE_SECURITY_CHECK_FAILED' |
  'FILE_TOO_LARGE' |
  'FILE_TOO_SHORT' |
  'FILE_TRANSIENT_ERROR' |
  'FILE_VIRUS_INFECTED' |
  'NETWORK_DISCONNECTED' |
  'NETWORK_FAILED' |
  'NETWORK_INVALID_REQUEST' |
  'NETWORK_SERVER_DOWN' |
  'NETWORK_TIMEOUT' |
  'SERVER_BAD_CONTENT' |
  'SERVER_CERT_PROBLEM' |
  'SERVER_FAILED' |
  'SERVER_FORBIDDEN' |
  'SERVER_NO_RANGE' |
  'SERVER_UNAUTHORIZED' |
  'SERVER_UNREACHABLE' |
  'USER_CANCELED' |
  'USER_SHUTDOWN'
);

type chrome$DangerType = (
  'accepted' |
  'content' |
  'file' |
  'host' |
  'safe' |
  'uncommon' |
  'unwanted' |
  'url'
);

type chrome$State = 'complete' | 'in_progress' | 'interrupted';

type chrome$DownloadItem = {
  byExtensionId?: string,
  byExtensionName?: string,
  bytesReceived: number,
  canResume: boolean,
  danger: chrome$DangerType,
  endTime?: string,
  error?: chrome$InterruptReason,
  estimatedEndTime?: string,
  exists: boolean,
  fileSize: number,
  filename: string,
  id: number,
  incognito: boolean,
  mime: string,
  paused: boolean,
  referrer: string,
  startTime: string,
  state: chrome$State,
  totalBytes: number,
  url: string
};

type chrome$StringDelta = {
  current?: string,
  previous?: string
};

type chrome$DoubleDelta = {
  current?: string,
  previous?: string
};

type chrome$BooleanDelta = {
  current?: string,
  previous?: string
};

type $downloads$Query = {
  bytesReceived?: number,
  danger?: chrome$DangerType,
  endTime?: string,
  endedAfter?: string,
  endedBefore?: string,
  error?: chrome$InterruptReason,
  exists?: boolean,
  fileSize?: number,
  filename?: string,
  filenameRegex?: string,
  id?: number,
  limit?: number,
  mine?: string,
  orderBy?: Array<string>,
  paused?: boolean,
  query?: Array<string>,
  startTime?: string,
  startedAfter?: string,
  startedBefore?: string,
  state?: chrome$State,
  totalBytes?: number,
  totalBytesGreater?: number,
  totalBytesLess?: number,
  url?: string,
  urlRegex?: string
};

type chrome$downloads = {
  acceptDanger(downloadId: number, callback?: () => void): void,
  cancel(downloadId: number, callback?: () => void): void,
  download(options: {
    body?: string,
    conflictAction?: chrome$FilenameConflightAction,
    filename?: string,
    headers?: Array<{name: string, value: string} | {name: string, binaryValue: string}>,
    method?: 'GET' | 'POST',
    saveAs?: boolean,
    url: string
  }, callback?: (downloadId: number) => void): void,
  drag(downloadId: number): void,
  erase(query: $downloads$Query, callback?: (erasedIds: Array<number>) => void): void,
  getFileIcon: (
    ((downloadId: number, options: {size?: 16 | 32}, callback: (iconURL: ?string) => void) => void) &
    ((downloadId: number, callback: (iconURL: ?string) => void) => void)
  ),
  open(downloadId: number): void,
  pause(downloadId: number, callback?: () => void): void,
  removeFile(downloadId: number, callback?: () => void): void,
  resume(downloadId: number, callback?: () => void): void,
  search(query: $downloads$Query, callback: (results: Array<chrome$DownloadItem>) => void): void,
  setShelfEnabled(enabled: boolean): void,
  show(downloadId: number): void,
  showDefaultFolder(): void,

  onChanged: chrome$Event & {
    addListener(callback: (downloadDelta: {
      canResume?: chrome$BooleanDelta,
      danger?: chrome$StringDelta,
      endTime?: chrome$StringDelta,
      error?: chrome$StringDelta,
      exists?: chrome$BooleanDelta,
      fileSize?: chrome$DoubleDelta,
      filename?: chrome$StringDelta,
      id: number,
      mime?: chrome$StringDelta,
      paused?: chrome$BooleanDelta,
      startTime?: chrome$StringDelta,
      state?: chrome$StringDelta,
      totalBytes?: chrome$DoubleDelta,
      url?: chrome$StringDelta
    }) => void): void
  },
  onCreated: chrome$Event & {
    addListener(callback: (downloadItem: chrome$DownloadItem) => void): void
  },
  onDeterminingFilename: chrome$Event & {
    addListener(callback: (
      downloadItem: chrome$DownloadItem,
      suggest: (suggestion?: {
        conflictAction?: chrome$FilenameConflightAction,
        filename: string
      }) => void
    ) => void): void
  },
  onErased: chrome$Event & {
    addListener(callback: (downloadId: number) => void): void
  },
};
