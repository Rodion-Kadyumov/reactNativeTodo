export type Action<T extends (...args: any) => any> = Omit<ReturnType<T>, 'meta'>

export type ResponseType<D = {}> = {
  // Если не передать D, то будет пустой объект
  resultCode: number
  messages: string[]
  fieldsErrors: FieldErrorType[]
  data: D
}

type FieldErrorType = {
  field: string
  error: string
}