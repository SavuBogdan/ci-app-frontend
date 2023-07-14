import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiClient} from '../utils/http';


export const fetchRepositories = createAsyncThunk(
    'repositories/fetchRepositories',
    async ({_data}, thunkApi) => {
        try {
            apiClient.setDispatch(thunkApi.dispatch)
            const response = await apiClient.get('/repos');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch repositories');
        }
    }
);


const initialState = {
    repositories: [],
    loading: false,
    error: null,
};

const repositorySlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepositories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.loading = false;
                state.repositories = action.payload;
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

// export const {} = repositorySlice.actions;

export default repositorySlice.reducer;
