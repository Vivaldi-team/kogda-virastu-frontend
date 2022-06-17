import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../types/types';

type TUserState = {
  username: string | null,
  roles: string[] | null,
  email: string | null,
  bio?: string | null,
  image?: string | null,
  nickname?: string | null,
};

const initialState: TUserState = {
  username: null,
  roles: null,
  email: null,
  bio: null,
  image: null,
  nickname: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => ({ ...state, ...action.payload }),
    clearUser: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const userReducer = userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
export default userReducer;
