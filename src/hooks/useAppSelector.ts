import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { ReduxState } from '../models/redux'

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector