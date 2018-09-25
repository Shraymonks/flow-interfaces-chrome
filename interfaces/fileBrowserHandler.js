type chrome$FileHanlderExecuteEventDetails = {
  entries: Array<any>,
  tab_id?: number
};

type chrome$fileBrowserHandler = {
  selectFile(
    selectionParams: {
      allowedFileExtensions?: Array<string>,
      suggestedName: string
    },
    callback: (result: {
      entry?: Object,
      success: boolean
    }) => void
  ): void,

  onExecute: {
    ...chrome$Event,
    addListener(callback: (id: string, details: chrome$FileHanlderExecuteEventDetails) => void): void
  }
}
