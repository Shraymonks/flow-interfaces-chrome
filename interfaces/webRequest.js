type chrome$ResourceType =
  | 'main_frame'
  | 'sub_frame'
  | 'stylesheet'
  | 'script'
  | 'image'
  | 'font'
  | 'object'
  | 'xmlhttprequest'
  | 'ping'
  | 'csp_report'
  | 'media'
  | 'websocket'
  | 'other';

type chrome$OnBeforeRequestOptions = 'blocking' | 'requestBody';
type chrome$OnBeforeSendHeadersOptions = 'requestHeaders' | 'blocking';
type chrome$OnSendHeadersOptions = 'requestHeaders';
type chrome$OnHeadersReceivedOptions = 'blocking' | 'responseHeaders';
type chrome$OnAuthRequiredOptions =
  | 'responseHeaders'
  | 'blocking'
  | 'asyncBlocking';
type chrome$OnResponseStartedOptions = 'responseHeaders';
type chrome$OnBeforeRedirectOptions = 'responseHeaders';
type chrome$OnCompletedOptions = 'responseHeaders';
type chrome$RequestFilter = {
  urls: Array<string>,
  types?: Array<chrome$ResourceType>,
  tabId?: number,
  windowId?: number,
};
type chrome$HttpHeaders = Array<{name: string, value?: any, binaryValue?: any}>;
type chrome$BlockingResponse = {
  cancel?: boolean,
  redirectUrl?: string,
  requestHeaders?: chrome$HttpHeaders,
  responseHeaders?: chrome$HttpHeaders,
  authCredentials?: {username: string, password: string},
};
type chrome$UploadData = {
  bytes?: any,
  file?: string,
};
type chrome$FormDataItem = any;

type chrome$webRequest = {
  MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number,
  handlerBehaviorChanged: (callback: () => void) => void,
  onBeforeRequest: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        requestBody?: {
          error?: string,
          formData?: {[string]: any},
          raw?: Array<chrome$UploadData>,
        },
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnBeforeRequestOptions>,
    ): void,
  },
  onBeforeSendHeaders: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        requestHeaders?: chrome$HttpHeaders,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnBeforeSendHeadersOptions>,
    ): void,
  },
  onSendHeaders: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        requestHeaders?: chrome$HttpHeaders,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnSendHeadersOptions>,
    ): void,
  },
  onHeadersReceived: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        statusLine: string,
        responseHeaders?: chrome$HttpHeaders,
        statusCode: number,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnHeadersReceivedOptions>,
    ): void,
  },
  onAuthRequired: chrome$Event & {
    addListener(
      callback: (
        details: {
          requestId: string,
          url: string,
          method: string,
          frameId: number,
          parentFrameId: number,
          tabId: number,
          type: chrome$ResourceType,
          initiator?: string,
          timeStamp: number,
          scheme: string,
          realm?: string,
          challenger: {host: string, port: string},
          isProxy: boolean,
          responseHeaders?: chrome$HttpHeaders,
          statusLine: string,
          statusCode: number,
        },
        asyncCallback?: chrome$BlockingResponse,
      ) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnAuthRequiredOptions>,
    ): void,
  },
  onResponseStarted: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        ip?: string,
        fromCache: boolean,
        statusCode: number,
        responseHeaders?: chrome$HttpHeaders,
        statusLine: string,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnResponseStartedOptions>,
    ): void,
  },
  onBeforeRedirect: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        ip?: string,
        fromCache: boolean,
        statusCode: number,
        redirectUrl: string,
        responseHeaders?: chrome$HttpHeaders,
        statusLine: string,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnBeforeRedirectOptions>,
    ): void,
  },
  onCompleted: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        ip?: string,
        fromCache: boolean,
        statusCode: number,
        responseHeaders?: chrome$HttpHeaders,
        statusLine: string,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnCompletedOptions>,
    ): void,
  },
  onErrorOccurred: chrome$Event & {
    addListener(
      callback: (details: {
        requestId: string,
        url: string,
        method: string,
        frameId: number,
        parentFrameId: number,
        tabId: number,
        type: chrome$ResourceType,
        initiator?: string,
        timeStamp: number,
        ip?: string,
        fromCache: boolean,
        error: string,
      }) => ?chrome$BlockingResponse,
      filter?: chrome$RequestFilter,
      extraInfoSpec?: Array<chrome$OnErrorOccurredOptions>,
    ): void,
  },
};
