import { combineReducers, configureStore, DevToolsEnhancerOptions } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { todoApi } from "./todoApi"
import { listenerMiddleware } from "./listenerMiddleware"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import { filterSlice } from "./filterSlice"

const devToolsOptions: DevToolsEnhancerOptions = {
  // add action creators here so they are available in the Redux DevTools
  actionCreators: {},
}

const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
  [filterSlice.reducerPath]: filterSlice.reducer,
})

const persistConfig = {
  key: "todoCn",
  version: 1,
  storage,
  blacklist: [todoApi.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV && devToolsOptions,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(todoApi.middleware, listenerMiddleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
