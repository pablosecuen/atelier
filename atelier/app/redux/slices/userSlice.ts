// userSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { deleteUser,
  listUsers,
  getUserById,
  updateUser,
  softDeleteUser,
  getUserByEmail,
  getUserByPhone,} from '../actions/userActions'; // Importa el archivo de acciones
import User from '@/app/types/User';

// Define un tipo para el estado de usuarios
interface UserState {
  user: User;
  users: User[];
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

// Define el estado inicial
const initialState: UserState = {
user: {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  phone: null,
  isDeleted: false
},
  users: [],
  error: null,
  status: "idle",
};




// Define el slice de usuarios
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(listUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(listUsers.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userIdToDelete = action.meta.arg;
        state.users = state.users.filter((user) => user.id !== userIdToDelete);
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(getUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(softDeleteUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(softDeleteUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(softDeleteUser.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(getUserByEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getUserByEmail.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(getUserByPhone.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserByPhone.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getUserByPhone.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;


