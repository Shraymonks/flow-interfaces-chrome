type chrome$BookmarkTreeNodeUnmodifiable = ?'managed';

type chrome$BookmarkTreeNode = {
  children?: Array<chrome$BookmarkTreeNode>,
  dateAdded?: number,
  dateGroupModified?: number,
  id: string,
  index?: number,
  parentId?: string,
  title: string,
  unModifiable?: chrome$BookmarkTreeNodeUnmodifiable,
  url?: string
};

type $bookmarks$BookmarkTreeNodeCallback = (result: chrome$BookmarkTreeNode) => void;
type $bookmarks$BookmarkTreeNodeArrayCallback = (results: Array<chrome$BookmarkTreeNode>) => void;

type chrome$bookmarks = {
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: 1000000,
  MAX_WRITE_OPERATIONS_PER_HOUR: 1000000,

  create(
    bookmark: {
      index?: number,
      parentId?: string,
      title?: string,
      url?: string
    },
    callback?: $bookmarks$BookmarkTreeNodeCallback
  ): void,
  get(idOrIdList: string | Array<string>, callback: $bookmarks$BookmarkTreeNodeArrayCallback): void,
  getChildren(id: string, callback: $bookmarks$BookmarkTreeNodeArrayCallback): void,
  getRecent(numberOfItems: number, callback: $bookmarks$BookmarkTreeNodeArrayCallback): void,
  getSubTree(id: string, callback: $bookmarks$BookmarkTreeNodeArrayCallback): void,
  getTree(callback: $bookmarks$BookmarkTreeNodeArrayCallback): void,
  move(
    id: string,
    destination: {
      index?: number,
      parentId?: string
    },
    callback?: $bookmarks$BookmarkTreeNodeCallback
  ): void,
  remove(id: string, callback?: () => void): void,
  removeTree(id: string, callback?: () => void): void,
  search(
    query: string | {
      query?: string,
      title?: string,
      url?: string
    },
    callback: $bookmarks$BookmarkTreeNodeArrayCallback
  ): void,
  update(
    id: string,
    changes: {
      title?: string,
      url?: string
    },
    callback?: $bookmarks$BookmarkTreeNodeCallback
  ): void,

  onChanged: chrome$Event & {
    addListener(callback: (id: string, changeInfo: {title: string, url?: string}) => void): void
  },
  onChildrenReordered: chrome$Event & {
    addListener(callback: (id: string, reorderInfo: Array<string>) => void): void
  },
  onCreated: chrome$Event & {
    addListener(callback: (id: string, bookmark: chrome$BookmarkTreeNode) => void): void
  },
  onImportBegan: chrome$Event,
  onImportEnded: chrome$Event,
  onMoved: chrome$Event & {
    addListener(callback: (
      id: string,
      moveInfo: {
        index: number,
        oldIndex: number,
        oldParentId: string,
        parentId: string
      }
    ) => void): void
  },
  onRemoved: chrome$Event & {
    addListener(callback: (
      id: string,
      removeInfo: {
        index: number,
        node: chrome$BookmarkTreeNode,
        parentId: string
      }
    ) => void): void
  }
};
