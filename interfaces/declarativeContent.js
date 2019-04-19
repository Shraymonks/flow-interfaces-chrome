type chrome$PageStateMatcherInstanceType = {
  'DECLARATIVE_CONTENT.PAGE_STATE_MATCHER': 'declarativeContent.PageStateMatcher'
};

type chrome$RequestContentScriptInstanceType = {
  'DECLARATIVE_CONTENT.REQUEST_CONTENT_SCRIPT': 'declarativeContent.RequestContentScript'
};

type chrome$SetIconInstanceType = {
  'DECLARATIVE_CONTENT.SET_ICON': 'declarativeContent.SetIcon'
};

type chrome$ShowPageActionInstanceType = {
  'DECLARATIVE_CONTENT.SHOW_PAGE_ACTION': 'declarativeContent.ShowPageAction'
};

/**
 * Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content.
 *
 * Since Chrome 33.
 */
type chrome$declarativeContent = {
  PageStateMatcherInstanceType: chrome$PageStateMatcherInstanceType,
  RequestContentScriptInstanceType: chrome$RequestContentScriptInstanceType,
  SetIconInstanceType: chrome$SetIconInstanceType,
  ShowPageActionInstanceType: chrome$ShowPageActionInstanceType,

  /**
   * Matches the state of a web page by various criteria.
   */
  PageStateMatcher: ({
    pageUrl?: {
      hostContains?: string,
      hostEquals?: string,
      hostPrefix?: string,
      hostSuffix?: string,
      pathContains?: string,
      pathEquals?: string,
      pathPrefix?: string,
      pathSuffix?: string,
      queryContains?: string,
      queryEquals?: string,
      queryPrefix?: string,
      querySuffix?: string,
      urlContains?: string,
      urlEquals?: string,
      urlMatches?: string,
      originAndPathMatches?: string,
      urlPrefix?: string,
      urlSuffix?: string,
      schemes?: Array<string>,
      ports?: Array<number | Array<number>>
    },
    css?: Array<string>,
    isBookmarked?: boolean
  }) => chrome$PageStateMatcherInstanceType,

  /**
   * Declarative event action that injects a content script.
   *
   * Since Chrome 38.
   *
   * WARNING: This action is still experimental and is not supported on stable builds of Chrome.
   */
  RequestContentScript: ({
    css?: Array<string>,
    js?: Array<string>,
    allFrames?: boolean,
    matchAboutBlank?: boolean
  }) => chrome$RequestContentScriptInstanceType,

  /**
   * Declarative event action that sets the n-dip square icon for the extension's page action or browser action while the corresponding conditions are met. This action can be used without host permissions, but the extension must have a page or browser action.
   *
   * Exactly one of imageData or path must be specified. Both are dictionaries mapping a number of pixels to an image representation. The image representation in imageData is an ImageData object; for example, from a canvas element, while the image representation in path is the path to an image file relative to the extension's manifest. If scale screen pixels fit into a device-independent pixel, the scale * n icon is used. If that scale is missing, another image is resized to the required size.
   *
   * Since Chrome 39.
   */
  SetIcon: ({
    imageData?: ImageData | { [size: string]: ImageData }
  }) => chrome$SetIconInstanceType,

  /**
   * Declarative event action that shows the extension's page action while the corresponding conditions are met. This action can be used without host permissions, but the extension must have a page action. If the extension has the activeTab permission, clicking the page action grants access to the active tab.
   */
  ShowPageAction: () => chrome$ShowPageActionInstanceType,

  /**
   * Provides the Declarative Event API consisting of addRules, removeRules, and getRules.
   */
  onPageChanged: {
    addRules: (
      rules: Array<chrome$Rule>,
      callback?: (rules: Array<chrome$Rule>) => void
    ) => void,

    getRules: ((
      ruleIdentifiers?: string[],
      callback: (rules: Array<chrome$Rule>) => void
    ) => void) &
      ((callback: (rules: Array<chrome$Rule>) => void) => void),

    removeRules: (
      ruleIdentifiers?: Array<string>,
      callback?: () => void
    ) => void
  }
};
