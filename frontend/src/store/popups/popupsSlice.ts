import { createSlice } from "@reduxjs/toolkit";


type addImage = boolean
type editProfile = boolean
type editAvatar = boolean
type InfoTooltip = boolean
type message = string


const popupSlice = createSlice({
  name: 'popup/togglePopup',
  initialState: {
    addImage: false as addImage,
    editProfile: false as editProfile,
    editAvatar: false as editAvatar,
    Info: false as InfoTooltip,
    message: '' as message,
  },
  reducers: {
    toggleImagePopup: (state, { payload }) => {
      state.addImage = payload
    },
    toggleProfilePopup: (state, { payload }) => {
      state.editProfile = payload
    },
    toggleAvatarPopup: (state, { payload }) => {
      state.editAvatar = payload
    },
    toggleInfoTooltipPopup: (state, { payload }) => {
      state.Info = payload.isShow
      state.message = payload.message
    }
  }
})

export const {
  toggleImagePopup,
  toggleProfilePopup,
  toggleAvatarPopup,
  toggleInfoTooltipPopup
} = popupSlice.actions;
export default popupSlice.reducer;
