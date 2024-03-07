import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Components/LoginPage/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem('isLoggedIn', store.getState().auth.isLoggedIn);
});

export default store;