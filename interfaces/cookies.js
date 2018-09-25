type chrome$SameSiteStatus = 'lax' | 'no_restriction' | 'strict';

type chrome$Cookie = {
  domain: string,
  expirationDate?: number,
  hostOnly: boolean,
  httpOnly: boolean,
  name: string,
  path: string,
  secure: boolean,
  session: boolean,
  storeId: string,
  value: string
};

type chrome$CookieStore = {
  id: string,
  tabIds: Array<number>
};

type chrome$OnChangedCause = 'evicted' | 'expired' | 'expired_overwrite' | 'explicit' | 'overwrite';

type chrome$cookies = {
  get(details: {
    name: string,
    storeId?: string,
    url: string
  }, callback: (cookie: ?chrome$Cookie) => void): void,
  getAll(details: {
    domain?: string,
    name?: string,
    path?: string,
    secure?: boolean,
    session?: boolean,
    storeId?: string,
    url?: string
  }, callback: (cookies: Array<chrome$Cookie>) => void): void,
  getAllCookieStores(callback: (cookieStores: Array<chrome$CookieStore>) => void): void,
  remove(details: {
    name: string,
    storeId?: string,
    url: string
  }, callback?: (details: {
    name: string,
    storeId: string,
    url: string
  }) => void): void,
  set(details: {
    domain?: string,
    exprirationDate?: number,
    httpOnly?: boolean,
    name?: string,
    path?: string,
    secure?: boolean,
    storeId?: string,
    url: string,
    value?: string
  }, callback?: (cookie: chrome$Cookie) => void): void,

  onChanged: {
    ...chrome$Event,
    addListener(callback: (changeInfo: {
      cause: chrome$OnChangedCause,
      cookie: chrome$Cookie,
      removed: boolean
    }) => void): void
  }
};
