type chrome$Resource = {
  url: string,

  getContent(callback: (content: string, encoding: string) => void): void,
  setContent(content: string, commit: boolean, callback?: (error: ?Object) => void): void
};

type $devtools$inspectedWindow = {
  tabId: number,

  eval(
    expression: string,
    options?: {
      contextSecurityOrigin?: string,
      frameURL?: string,
      useContentScriptContext?: boolean
    },
    callback?: (result: Object, exceptionInfo: {
      code: string,
      description: string,
      details: Array<any>,
      isError: boolean,
      isException: boolean,
      value: string
    }) => void
  ): void,
  reload(reloadOptions: {
    ignoreCache?: boolean,
    injectedScript?: string,
    preprocessorScript?: string,
    userAgent?: string
  }): void,
  getResources(callback: (resources: Array<chrome$Resource>) => void): void,

  onResourceAdded: chrome$Event & {
    addListener(callback: (resource: chrome$Resource) => void): void
  },
  onResourceContentCommitted: chrome$Event & {
    addListener(callback: (resource: chrome$Resource, content: string) => void): void
  }
};

type chrome$Request = {
  getContent(callback: (content: string, encoding: string) => void): void
};

type $devtools$network = {
  getHAR(callback: (harLog: Object) => void): void,

  onNavigated: chrome$Event & {
    addListener(callback: (url: string) => void): void
  },
  onRequestFinished: chrome$Event & {
    addListener(callback: (request: chrome$Request) => void): void
  }
};

type chrome$ElementsPanel = {
  createSidebarPane(title: string, callback?: (result: chrome$ExtensionSidebarPane) => void): void,

  onSelectionChanged: chrome$Event
};

type chrome$SourcesPanel = {
  createSidebarPane(title: string, callback?: (result: chrome$ExtensionSidebarPane) => void): void,

  onSelectionChanged: chrome$Event
};

type chrome$ExtensionPanel = {
  createStatusBarButton(iconPath: string, tooltipText: string, disabled: boolean): chrome$Button,

  onHidden: chrome$Event,
  onSearch: chrome$Event & {
    addListener(callback: (action: string, queryString?: string) => void): void
  },
  onShown: chrome$Event & {
    addListener(callback: (window: any) => void): void
  }
};

type chrome$ExtensionSidebarPane = {
  setExpression(expression: string, rootTile?: string, callback?: () => void): void,
  setHeight(height: string): void,
  setObject(jsonObject: string, rootTitle?: string, callback?: () => void): void,
  setPage(path: string): void,

  onHidden: chrome$Event,
  onShown: chrome$Event
};

type chrome$Button = {
  update(iconPath: string, tooltipText: string, disabled: boolean): void,

  onClicked: chrome$Event
};

type $devtools$panels = {
  elements: chrome$ElementsPanel,
  sources: chrome$SourcesPanel,

  create(title: string, iconPath: string, pagePath: string, callback?: (panel: chrome$ExtensionPanel) => void): void,
  setOpenResourceHandler(callback?: (resource: chrome$Resource) => void): void,
  openResource(url: string, lineNumber: number, callback?: () => void): void
};

type chrome$devtools = {
  inspectedWindow: $devtools$inspectedWindow,
  network: $devtools$network,
  panels: $devtools$panels
};
