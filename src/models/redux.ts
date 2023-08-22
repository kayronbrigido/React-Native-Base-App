export interface ReduxState {
  loading: ILoadingState
}

export interface ILoadingState {
  isLoading: boolean,
  loadingCounter: number,
}