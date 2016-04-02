type chrome$MostVisitedURL = {
  title: string,
  url: string
};

type chrome$topSites = {
  get(callback: (data: Array<chrome$MostVisitedURL>) => void): void
};
