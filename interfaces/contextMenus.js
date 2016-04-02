type chrome$ContextType = (
  'all' |
  'audio' |
  'browser_action' |
  'editable' |
  'frame' |
  'image' |
  'launcher' |
  'link' |
  'page' |
  'page_action' |
  'selection' |
  'video'
);

type chrome$ItemType = 'checkbox' | 'normal' | 'radio' | 'seperator';

type $contextMenus$OnClick = (
  info: {
    checked?: boolean,
    editable: boolean,
    frameUrl?: string,
    linkUrl?: string,
    mediaType?: 'audio' | 'image' | 'video',
    menuItemId: number | string,
    pageUrl?: string,
    parentMenuItemId?: number | string,
    selectionText?: string,
    srcUrl?: string,
    wasChecked?: boolean
  },
  tab: chrome$Tab
) => void;

type chrome$contextMenus = {
  ACTION_MENU_TOP_LEVEL_LIMIT: 6,

  create(createProperties: {
    checked?: boolean,
    contexts?: Array<chrome$ContextType>,
    documentUrlPatterns?: Array<string>,
    enabled?: boolean,
    id?: string,
    onclick?: $contextMenus$OnClick,
    parentId?: number | string,
    targetUrlPatterns?: Array<string>,
    title?: string,
    type?: chrome$ItemType
  }, callback?: () => void): void,
  remove(menuItemId: number | string, callback?: () => void): void,
  removeAll(callback?: () => void): void,
  update(id: number | string, updateProperties: {
    checked?: boolean,
    contexts?: Array<chrome$ContextType>,
    documentUrlPatterns?: Array<string>,
    enabled?: boolean,
    onclick?: $contextMenus$OnClick,
    parentId?: number | string,
    targetUrlPatterns?: Array<string>,
    title?: string,
    type?: chrome$ItemType,
  }, callback?: () => void): void,

  onClicked: chrome$Event & {
    addListener(callback: $contextMenus$OnClick): void
  }
};
