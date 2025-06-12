import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit"

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer), // Persisting user state
    // another: anotherReducer, // Non-persisted state 
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);