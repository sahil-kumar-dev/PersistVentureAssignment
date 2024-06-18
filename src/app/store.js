import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './slice/blogSlice';

const store = configureStore({
    reducer: {
        blog: blogSlice
    }
});

export default store