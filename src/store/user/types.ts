export type ActionType<PayloadType> = {
  type: string,
  payload?: PayloadType
}