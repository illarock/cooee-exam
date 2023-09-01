import { RootState } from "@/lib/store";
import { IUpload, initialState } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: initialState = {
  vehicles: {},
  uploads: null,
  isLoading: false,
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicles.fulfilled, (state, action: PayloadAction<{}>) => {
        state.vehicles = action.payload;
        state.isLoading = false;
      })
      .addCase(getVehicles.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(sendVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        sendVehicles.fulfilled,
        (state, action: PayloadAction<IUpload>) => {
          state.uploads = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(sendVehicles.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const getVehicles = createAsyncThunk(
  "vehicles/getVehicles",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/api/vehicles");
      const response = await res.json();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendVehicles = createAsyncThunk(
  "vehicles/sendVehicles",
  async (data: any, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/api/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const {} = vehiclesSlice.actions;
export const vehiclesState = (state: RootState) => state.vehicles;
export default vehiclesSlice.reducer;
