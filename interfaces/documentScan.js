type chrome$documentScan = {
  scan(
    options: {
      maxImages?: number,
      mimeTypes?: Array<string>
    },
    callback: (result: {
      dataUrls: Array<string>,
      mimeType: string
    }) => void
  ): void
};
