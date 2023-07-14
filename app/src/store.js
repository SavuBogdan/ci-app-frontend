import { configureStore } from '@reduxjs/toolkit'

import notificationReducer from './reduxSlices/notificationSlice'
import repositoryReducer from './reduxSlices/repositorySlice'


export default configureStore({
    reducer: {
        notification: notificationReducer,
        repositories: repositoryReducer,
    }
})