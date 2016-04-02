type chrome$Rule = {
  actions: Array<any>,
  conditions: Array<any>,
  id?: string,
  priority?: number,
  tags?: Array<string>
};

type chrome$Event = {
  addListener(callback: () => void): void,
  removeListener(callback: () => void): void,
  hasListener(callback: () => void): boolean,
  hasListeners(): boolean,

  addRules(rules: Array<chrome$Rule>, callback?: (rules: Array<chrome$Rule>) => void): void,
  getRules: (
    ((ruleIdentifiers: Array<string>, callback: (rules: Array<chrome$Rule>) => void) => void) &
    ((callback: (rules: Array<chrome$Rule>) => void) => void)
  ),
  removeRules(ruleIdentifiers?: Array<string>, callback?: () => void): void
};

type chrome$UrlFilter = {
  hostContains?: string,
  hostEquals?: string,
  hostPrefix?: string,
  hostSuffix?: string,
  originAndPathMatches?: string,
  pathContains?: string,
  pathEquals?: string,
  pathPrefix?: string,
  pathSuffix?: string,
  ports?: Array<number | Array<number>>,
  queryContains?: string,
  queryEquals?: string,
  queryPrefix?: string,
  querySuffix?: string,
  schemes?: Array<string>,
  urlContains?: string,
  urlEquals?: string,
  urlMatches?: string,
  urlPrefix?: string,
  urlSuffix?: string
};
