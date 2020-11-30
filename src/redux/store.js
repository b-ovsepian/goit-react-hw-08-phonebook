import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactsReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import authReducer, { authPersistConfig } from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
  ],
});

export const persistor = persistStore(store);
