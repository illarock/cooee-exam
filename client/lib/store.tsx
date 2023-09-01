import { configureStore } from "@reduxjs/toolkit";
import vehiclesSlice from "@/app/features/vehicles/vehiclesSlice";

export const store = configureStore({
  reducer: {
    vehicles: vehiclesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
