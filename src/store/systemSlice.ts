import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultTheme } from '../themes';
import { defaultLang } from '../vocabularies';

type TSystemState = {
  isLoggedIn: boolean;
  appName: string;
  currentTheme: string,
  currentLang: string,
  isMenuOpen: boolean,
  isDeleteConfirmOpen: boolean,
  isErrorMessageOpen: boolean,
};

const initialState: TSystemState = {
  isLoggedIn: false,
  appName: 'Real World',
  currentTheme: defaultTheme,
  currentLang: defaultLang,
  isMenuOpen: false,
  isDeleteConfirmOpen: false,
  isErrorMessageOpen: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state) => ({ ...state, isLoggedIn: true }),
    onLogout: (state) => ({ ...state, isLoggedIn: false }),
    setTheme: (state, action: PayloadAction<string>) => ({
      ...state, currentTheme: action.payload,
    }),
    setLanguage: (state, action: PayloadAction<string>) => ({
      ...state, currentLang: action.payload,
    }),
    openMenu: (state) => ({
      ...state, isMenuOpen: true,
    }),
    closeMenu: (state) => ({
      ...state, isMenuOpen: false,
    }),
    openConfirm: (state) => ({
      ...state, isDeleteConfirmOpen: true,
    }),
    closeConfirm: (state) => ({
      ...state, isDeleteConfirmOpen: false,
    }),
    openErrorMessage: (state) => ({
      ...state, isErrorMessageOpen: true,
    }),
    closeErrorMessage: (state) => ({
      ...state, isErrorMessageOpen: false,
    }),
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  onLogout,
  setTheme,
  setLanguage,
  openMenu,
  closeMenu,
  openConfirm,
  closeConfirm,
  openErrorMessage,
  closeErrorMessage,
} = systemSlice.actions;
export default systemReducer;
