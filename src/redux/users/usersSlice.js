import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../api/user-api';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await userAPI.fetchAll();
      return resp.results;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
)

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
