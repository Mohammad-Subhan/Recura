import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        id: null,
        fullName: "",
        email: "",
        isStaff: false,
    },
    isAuthenticated: false,
    isLoading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = {
                id: action.payload.id,
                fullName: action.payload.fullName,
                email: action.payload.email,
                isStaff: action.payload.isStaff,
            }
            state.isAuthenticated = true
        },
        clearUser: (state) => {
            state.user = {
                id: null,
                fullName: "",
                email: "",
                isStaff: false,
            }
            state.isAuthenticated = false
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setUser, clearUser, setLoading } = userSlice.actions
export default userSlice.reducer