import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '../../app/store';
import { fetchPosts, createPost } from './api';

export interface Post {
  id?: number;
  title: string;
  body: string;
}

export interface PostsState {
  loading: boolean;
  data: Post[];
  error: string | null;
}

const initialState: PostsState = {
  loading: false,
  data: [],
  error: null,
};

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();
    return response.data;
  }
);

export const createPostAsync = createAsyncThunk(
  'posts/createPost',
  async (data: Post) => {
    const response = await createPost(data);
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching posts';
      })
      .addCase(createPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error creating post';
      });
  },
});

// export const selectPostsLoading = (state: RootState) => state.posts.loading;
// export const selectPostsData = (state: RootState) => state.posts.data;
// export const selectPostsError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
