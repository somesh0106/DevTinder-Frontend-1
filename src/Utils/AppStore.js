import { configureStore } from '@reduxjs/toolkit'
import userReducer  from "./userSlice";
import FeedReducer  from "./FeedSlice";
import ConnectionsReducer from "./Connections"
import connectionrequestsReducer from "./connectionrequests"

export const AppsStore = configureStore({
  reducer: {
    user : userReducer,
    feed : FeedReducer,
    connections: ConnectionsReducer,
    connectionrequests: connectionrequestsReducer
  },
})
