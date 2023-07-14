import { createSlice } from '@reduxjs/toolkit'

export const EDITOR_ROLE = 'ROLE_EDITOR';
export const ADMIN_ROLE = 'ROLE_ADMIN';

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        username: '',
        email: '',
        roles: [],
    },
    reducers: {
        setUser: (state, action) => {
            window.localStorage.setItem('user', JSON.stringify(action.payload))
            state.username = action.payload?.username
            state.email = action.payload?.email
            state.roles = action.payload?.roles
        },
        clear: (state) => {
            window.localStorage.removeItem('user')
            state.roles = []
            state.email = ""
            state.username = ""
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUser, clear } = userInfoSlice.actions

export default userInfoSlice.reducer