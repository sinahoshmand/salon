import { createSlice } from "@reduxjs/toolkit";

type Collapes = {
  collapsed : boolean;
}

const initialState: Collapes = {
  collapsed: false,
};


const sidebarSlice = createSlice({
  name : "sidebar",
  initialState,
  reducers : {
      toggleSidebar : (state) => {
        state.collapsed = !state.collapsed;
      },

      closeSidebar: (state) => {
        state.collapsed = true;
      },
  
      openSidebar: (state) => {
        state.collapsed = false;
      },
  }

})

export const {
    toggleSidebar,
    closeSidebar,
    openSidebar
} = sidebarSlice.actions;

export default sidebarSlice.reducer;