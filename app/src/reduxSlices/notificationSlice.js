import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiClient} from '../utils/http';


export const fetchNotifications = createAsyncThunk(
    'notification/fetchNotifications',
    async ({_data}, thunkApi) => {
        try {
            apiClient.setDispatch(thunkApi.dispatch)
            const response = await apiClient.get('/repositories');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch notifications');
        }
    }
);


const initialState = {
    notifications: [],
    loading: false,
    error: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push(action.payload);
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.notifications = [
                    'test notification 1',
                    'test notification 2',
                    'test notification 3',
                    'test notification 4',
                ];
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const {addNotification, removeNotification} = notificationSlice.actions;

export default notificationSlice.reducer;
