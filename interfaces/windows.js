type chrome$WindowType = 'app' | 'devtools' | 'normal' | 'panel' | 'popup';

type chrome$WindowState = 'docked' | 'fullscreen' | 'maximized' | 'minimized' | 'normal';

type chrome$Window = {
  alwaysOnTop: boolean,
  focused: boolean,
  height?: number,
  id?: number,
  incognito: boolean,
  left?: number,
  sessionId?: string,
  state?: chrome$WindowState,
  tabs?: Array<chrome$Tab>,
  top?: number,
  type?: chrome$WindowType,
  width?: number,
};

type chrome$CreateType = 'detached_panel' | 'normal' | 'panel' | 'popup';

type chrome$windows = {
  WINDOW_ID_CURRENT: -2,
  WINDOW_ID_NONE: -1,

  create(createData?: {
    focused?: boolean,
    height?: number,
    incognito?: boolean,
    left?: number,
    state?: chrome$WindowState,
    tabId?: number,
    top?: number,
    type?: chrome$CreateType,
    url?: string | Array<string>,
    width?: number
  }, callback?: (window?: chrome$Window) => void): void,
  get: (
    ((
      windowId: number,
      getInfo: {
        populate?: boolean,
        windowTypes?: Array<chrome$WindowType>
      },
      callback: (window: chrome$Window) => void
    ) => void) &
    ((windowId: number, callback: (window: chrome$Window) => void) => void)
  ),
  getAll: (
    ((
      getInfo: {
        populate?: boolean,
        windowTypes?: Array<chrome$WindowType>
      },
      callback: (windows: Array<chrome$Window>) => void
    ) => void) &
    ((callback: (windows: Array<chrome$Window>) => void) => void)
  ),
  getCurrent: (
    ((
      getInfo: {
        populate?: boolean,
        windowTypes?: Array<chrome$WindowType>
      },
      callback: (window: chrome$Window) => void
    ) => void) &
    ((callback: (window: chrome$Window) => void) => void)
  ),
  getLastFocused: (
    ((
      getInfo: {
        populate?: boolean,
        windowTypes?: Array<chrome$WindowType>
      },
      callback: (window: chrome$Window) => void
    ) => void) &
    ((callback: (window: chrome$Window) => void) => void)
  ),
  remove(windowId: number, callback?: () => void): void,
  update(
    windowId: number,
    updateInfo: {
      drawAttention?: boolean,
      focused?: boolean,
      height?: number,
      left?: number,
      state?: chrome$WindowState,
      top?: number,
      width?: number
    },
    callback?: (window: chrome$Window) => void
  ): void,

  onCreated: {
    ...chrome$Event,
    Filters: Array<chrome$WindowType>,
    addListener(callback: (window: chrome$Window) => void): void
  },
  onFocusChanged: {
    ...chrome$Event,
    Filters: Array<chrome$WindowType>,
    addListener(callback: (windowId: number) => void): void
  },
  onRemoved: {
    ...chrome$Event,
    Filters: Array<chrome$WindowType>,
    addListener(callback: (windowId: number) => void): void
  },
};
