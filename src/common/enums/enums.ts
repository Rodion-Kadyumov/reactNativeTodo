export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export enum TaskPriority {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export enum ResultCode {
  SUCCESS = 0,
  ERROR = 1,
  RECAPTCHA_ERROR = 10,
}