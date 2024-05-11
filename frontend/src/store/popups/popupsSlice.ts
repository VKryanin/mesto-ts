import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


type addImage = boolean
type editProfile = boolean
type editAvatar = boolean


const popupSlice = createSlice({
  name: 'popup/togglePopup',
  initialState: {
    addImage: false as addImage,
    editProfile: false as editProfile,
    editAvatar: false as editAvatar,
  },
  reducers: {
    toggleImagePopup: (state, { payload }) => {
      state.addImage = payload
      console.log('state.addImage', state.addImage);
    },
    toggleProfilePopup: (state, { payload }) => {
      state.editProfile = payload
    },
    toggleAvatarPopup: (state, { payload }) => {
      state.editAvatar = payload
    }
  }
})

export const {
  toggleImagePopup,
  toggleProfilePopup,
  toggleAvatarPopup
} = popupSlice.actions;
export default popupSlice.reducer;
