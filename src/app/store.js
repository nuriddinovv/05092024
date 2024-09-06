import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favorite";
export default configureStore({
  reducer: {
    favorited: favoriteReducer,
  },
});
