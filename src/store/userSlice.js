import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/users";
const FAVORITES_API = "http://localhost:8000/favorites";

export const getUser = createAsyncThunk("user/getUser", async () => {
    let res = await axios.get(API);
    return res.data;
});
export const addUser = createAsyncThunk(
    "user/createUser",
    async (newUserObj, { dispatch }) => {
        await axios.post(API, newUserObj);
        dispatch(getUser());
    }
);
export const getOneUser = createAsyncThunk("user/getOneUser", async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    console.log(data);
    return data;
});

export const deteleUser = createAsyncThunk(
    "user/deteleUser",
    async (id, { dispatch }) => {
        await axios.delete(`${API}/${id}`);
        dispatch(getUser());
    }
);

export const deleteAfterLiked = createAsyncThunk(
    "user/deleteAfterLiked",
    async (id, { dispatch }) => {
        await axios.delete(`${FAVORITES_API}/favorite-${id}`);
    }
);

export const editUserAfterLiked = createAsyncThunk(
    "user/editUserAfterLiked",
    async (updatedUserObj, { dispatch }) => {
        await axios.put(`${FAVORITES_API}/favorite-${updatedUserObj.id}`, {
            users: updatedUserObj,
        });
        dispatch(getUser());
    }
);

export const editUser = createAsyncThunk(
    "user/editUser",
    async (updatedUserObj, { dispatch }) => {
        await axios.patch(`${API}/${updatedUserObj.id}`, updatedUserObj);
        dispatch(getUser());
    }
);

export const addToFavorites = createAsyncThunk(
    "uesr/addToFavorites",
    async (updatedUserObj, { dispatch }) => {
        if (updatedUserObj.favorites) {
            let favoritesObj = {
                id: `favorite-${updatedUserObj.id}`,
                users: updatedUserObj,
            };
            await axios.post(FAVORITES_API, favoritesObj);
        } else {
            await axios.delete(
                `${FAVORITES_API}/favorite-${updatedUserObj.id}`
            );
        }
        dispatch(editUser(updatedUserObj));
    }
);

export const getToFavorites = createAsyncThunk(
    "uesr/getToFavorites",
    async () => {
        let { data } = await axios.get(FAVORITES_API);
        return data;
    }
);

const usersSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        favorites: [],
        oneUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        cleanOneUser: (state, action) => {
            state.oneUser = null;
        },
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.error.messege;
            state.loading = false;
        },

        [getOneUser.fulfilled]: (state, action) => {
            state.oneUser = action.payload;
        },

        [getToFavorites.fulfilled]: (state, action) => {
            state.favorites = action.payload;
        },
    },
});
export const { cleanOneUser } = usersSlice.actions;

export default usersSlice.reducer;

//рекурсия б ооа б сх
