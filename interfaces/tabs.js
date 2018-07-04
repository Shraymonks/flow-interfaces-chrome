type chrome$MutedInfo = {
  extensionId?: string,
  muted: boolean,
  reason?: chrome$MutedInfoReason
};

type chrome$MutedInfoReason = 'capture' | 'extension' | 'user';

type chrome$Tab = {
  active: boolean,
  audible?: boolean,
  favIconUrl?: string,
  height?: number,
  highlighted: boolean,
  id?: number,
  incognito: boolean,
  index: number,
  mutedInfo?: chrome$MutedInfo,
  openerTabId?: number,
  pinned: boolean,
  selected: boolean,
  sessionId?: string,
  status?: string,
  title?: string,
  url?: string,
  width?: number,
  windowId: number
};

type chrome$TabStatus = 'complete' | 'loading';

type chrome$TabChangeInfo = {
  audible?: boolean,
  favIconUrl?: string,
  mutedInfo?: chrome$MutedInfo,
  pinned?: boolean,
  status?: string,
  title?: string,
  url?: string
};

type chrome$ZoomSettings = {
  defaultZoomFactor?: number,
  mode?: chrome$ZoomSettingsMode,
  scope?: chrome$ZoomSettingsScope
};

type chrome$ZoomSettingsScope = 'per-origin' | 'per-tab';

type chrome$ZoomSettingsMode = 'automatic' | 'disabled' | 'manual';

type $tabs$UpdateProperties = {
  active?: boolean,
  highlighted?: boolean,
  muted?: boolean,
  openerTabId?: number,
  pinned?: boolean,
  selected?: boolean,
  url?: string
};

type chrome$tabs = {
  TAB_ID_NONE: -1,

  captureVisibleTab: (
    ((
      windowId: number,
      options: {
        format?: 'jpeg' | 'png',
        quanlity?: number
      },
      callback: (dataUrl: string) => void
    ) => void) &
    ((windowId: number, callback: (dataUrl: string) => void) => void) &
    ((
      options: {
        format?: 'jpeg' | 'png',
        quanlity?: number
      },
      callback: (dataUrl: string) => void
    ) => void) &
    ((callback: (dataUrl: string) => void) => void)
  ),
  connect(tabId: number, connectInfo?: {
    frameId?: number,
    name?: string
  }): chrome$Port,
  create(createProperties: {
    active?: boolean,
    index?: number,
    openerTabId?: number,
    pinned?: boolean,
    selected?: boolean,
    url?: string,
    windowId?: number
  }, callback?: (tab: chrome$Tab) => void): void,
  detectLanguage: (
    ((tabId: number, callback: (language: string) => void) => void) &
    ((callback: (language: string) => void) => void)
  ),
  duplicate(tabId: number, callback?: (tab?: chrome$Tab) => void): void,
  executeScript: (
    ((
      tabId?: number,
      details: {
        allFrames?: boolean,
        code?: string,
        file?: string,
        frameId?: number,
        matchAboutBlank?: boolean,
        runAt?: chrome$RunAt
      },
      callback?: (result?: Array<any>) => void
    ) => void) &
    ((
      details: {
        allFrames?: boolean,
        code?: string,
        file?: string,
        frameId?: number,
        matchAboutBlank?: boolean,
        runAt?: chrome$RunAt
      },
      callback?: (result?: Array<any>) => void
    ) => void)
  ),
  get(tabId: number, callback: (tab: chrome$Tab) => void): void,
  getAllInWindow: (
    ((windowId: number, callback: (tabs: Array<chrome$Tab>) => void) => void) &
    ((callback: (tabs: Array<chrome$Tab>) => void) => void)
  ),
  getCurrent(callback: (tab?: chrome$Tab) => void): void,
  getSelected: (
    ((windowId: number, callback: (tab: chrome$Tab) => void) => void) &
    ((callback: (tab: chrome$Tab) => void) => void)
  ),
  getZoom: (
    ((tabId: number, callback: (zoomFactor: number) => void) => void) &
    ((callback: (zoomFactor: number) => void) => void)
  ),
  getZoomSettings: (
    ((
      tabId: number,
      zoomSettings: chrome$ZoomSettings,
      callback?: () => void
    ) => void) &
    ((
      zoomSettings: chrome$ZoomSettings,
      callback?: () => void
    ) => void)
  ),
  highlight(highlightInfo: {
    tabs: number | Array<number>,
    windowId?: number
  }, callback?: (window: chrome$Window) => void): void,
    insertCSS: (
      ((
        tabId: number,
        details: {
          allFrames?: boolean,
          code?: string,
          file?: string,
          frameId?: number,
          matchAboutBlank?: boolean,
          runAt?: chrome$RunAt
        },
        callback?: () => void
      ) => void) &
      ((
        details: {
          allFrames?: boolean,
          code?: string,
          file?: string,
          frameId?: number,
          matchAboutBlank?: boolean,
          runAt?: chrome$RunAt
        },
        callback?: () => void
      ) => void)
    ),
  move(
    tabIds: number | Array<number>,
    moveProperties: {
      index: number,
      windowId?: number
    },
    callback?: (tabs: chrome$Tab | Array<chrome$Tab>) => void
  ): void,
  query(queryInfo: {
    active?: boolean,
    audible?: boolean,
    currentWindow?: boolean,
    highlighted?: boolean,
    index?: number,
    lastFocusedWindow?: boolean,
    muted?: boolean,
    pinned?: boolean,
    status?: chrome$TabStatus,
    title?: string,
    url?: string | Array<string>,
    windowId?: number,
    windowType?: chrome$WindowType
  }, callback: (result: Array<chrome$Tab>) => void): void,
  reload(
    tabId?: number,
    reloadProperties?: {bypassCache?: boolean},
    callback?: () => void
  ): void,
  remove(tabIds: number | Array<number>, callback?: () => void): void,
  sendMessage(
    tabId: number,
    message: any,
    options?: {frameId?: number},
    responseCallback?: (response: any) => void
  ): void,
  sendRequest(tabId: number, request: any, responseCallback?: (response: any) => void): void,
  setZoom: (
    ((
      tabId: number,
      zoomFactor: number,
      callback?: () => void
    ) => void) &
    ((
      zoomFactor: number,
      callback?: () => void
    ) => void)
  ),
  setZoomSettings: (
    ((
      tabId: number,
      zoomSettings: chrome$ZoomSettings,
      callback?: () => void
    ) => void) &
    ((
      zoomSettings: chrome$ZoomSettings,
      callback?: () => void
    ) => void)
  ),
  update: (
    ((
      tabId: number,
      updateProperties: $tabs$UpdateProperties,
      callback?: (tab?: chrome$Tab) => void
    ) => void) &
    ((
      updateProperties: $tabs$UpdateProperties,
      callback?: (tab?: chrome$Tab) => void
    ) => void)
  ),

  onActivated: chrome$Event & {
    addListener(callback: (activeInfo: {
      tabId: number,
      windowId: number
    }) => void): void
  },
  onActiveChanged: chrome$Event & {
    addListener(callback: (tabId: number, selectInfo: {windowId: number}) => void): void
  },
  onAttached: chrome$Event & {
    addListener(callback: (tabId: number, attachInfo: {
      newPosition: number,
      newWindowId: number
    }) => void): void
  },
  onCreated: chrome$Event & {
    addListener(callback: (tab: chrome$Tab) => void): void
  },
  onDetached: chrome$Event & {
    addListener(callback: (tabId: number, detachInfo: {
      oldPosition: number,
      oldWindowId: number
    }) => void): void
  },
  onHighlightChanged: chrome$Event & {
    addListener(callback: (selectInfo: {
      tabIds: Array<number>,
      windowId: number
    }) => void): void
  },
  onHighlighted: chrome$Event & {
    addListener(callback: (highlightInfo: {
      tabIds: Array<number>,
      windowId: number
    }) => void): void
  },
  onMoved: chrome$Event & {
    addListener(callback: (tabId: number, moveInfo: {
      fromIndex: number,
      toIndex: number,
      windowId: number
    }) => void): void
  },
  onRemoved: chrome$Event & {
    addListener(callback: (tabId: number, removeInfo: {
      isWindowClosing: boolean,
      windowId: number
    }) => void): void
  },
  onReplaced: chrome$Event & {
    addListener(callback: (addedTabIds: number, removedTabId: number) => void): void
  },
  onSelectionChanged: chrome$Event & {
    addListener(callback: (tabId: number, selectInfo: {windowId: number}) => void): void
  },
  onUpdated: chrome$Event & {
    addListener(callback: (
      tabId: number,
      changeInfo: chrome$TabChangeInfo,
      tab: chrome$Tab
    ) => void): void
  },
  onZoomChange: chrome$Event & {
    addListener(callback: (ZoomChangeInfo: {
      newZoomFactor: number,
      oldZoomFactor: number,
      tabId: number,
      zoomSettings: chrome$ZoomSettings
    }) => void): void
  }
};
