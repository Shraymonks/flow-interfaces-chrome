type chrome$ImageFormat = 'jpeg' | 'png';

type chrome$ImageDetails = {
  format?: chrome$ImageFormat,
  quality?: number
};

type chrome$RunAt = 'document_end' | 'document_idle' | 'document_start';

type chrome$InjectDetails = {
  allFrames?: boolean,
  code?: string,
  file?: string,
  frameId?: number,
  matchAboutBlank?: boolean,
  runAt?: chrome$RunAt
};
