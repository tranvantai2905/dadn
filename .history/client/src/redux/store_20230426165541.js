import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../pages/Main/mainSlice";
import dmanageSlice from "../pages/Manage/dmanage";
import dashBoardSlice from "../pages/DashBroad/dashBroadSlice";
import exhibitSlice  from "../pages/ExhibitManage/exhibitManageSlice";

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    dmanage: dmanageSlice.reducer,
    dashboard: dashBoardSlice.reducer,
    exhibit: exhibitSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
