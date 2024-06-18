import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const fetchAllBlogs = createAsyncThunk('blog/fetchAllBlogs', async () => {
    const response = await fetch('https://newsapi.org/v2/everything?q=everything&apiKey=83beebba1bf049c1be5af67e4b448f75');
    return response.json();
});

export const fetchBlogByCategory = createAsyncThunk('blog/fetchbycategory', async (category) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=83beebba1bf049c1be5af67e4b448f75`)
    return response.json()
})



const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        allBlogs: [],
        blogs: [],
        loading: false,
        error: null,
        pagination: {
            currentPage: 0,
            blogsPerPage: 15,
        },
    },
    reducers: {
        updateCurrentPage: (state, action) => {
            console.log(action.payload)
            state.pagination.currentPage = action.payload;
        },
        updateBlogs: (state, action) => {
            state.blogs = action.payload.slice(state.pagination.currentPage * 15, (state.pagination.currentPage * 15) + 15);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.allBlogs = action.payload.articles
                state.blogs = action.payload.articles.slice(0, state.pagination.blogsPerPage);
                state.loading = false;
            })
            .addCase(fetchAllBlogs.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(fetchBlogByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBlogByCategory.fulfilled, (state, action) => {
                state.allBlogs = action.payload.articles
                state.pagination.currentPage = 0
                state.blogs = action.payload.articles.slice(state.pagination.currentPage * state.pagination.blogsPerPage, state.pagination.currentPage + state.pagination.blogsPerPage);
                state.loading = false;
            })
            .addCase(fetchBlogByCategory.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
        // .addCase(updatePagination.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(updatePagination.fulfilled, (state, action) => {
        //     state.blogs = action.payload.articles.slice(0, state.pagination.blogsPerPage);
        //     state.loading = false;
        // })
        // .addCase(updatePagination.rejected, (state, action) => {
        //     state.error = action.error.message;
        //     state.loading = false;
        // })
    },
});

export const { updateCurrentPage, updateBlogs } = blogSlice.actions;


export default blogSlice.reducer;
