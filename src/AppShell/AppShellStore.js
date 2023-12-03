import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  drawers: [],
  footerType: 'full'
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showDrawer: {
      reducer(state, action) {
        const drawer = action.payload;
        const minusCurrentDrawer = state.drawers.filter(
          ({ component }) => component !== drawer.component
        );
        state.drawers = [...minusCurrentDrawer, drawer];
      },
      prepare(drawer) {
        const drawerDefaults = {
          animationIn: 'slideInUp',
          animationOut: 'slideOutDown',
          animationInDuration: 300,
          animationOutDuration: 300,
          theme: 'light',
          position: 'front',
          show: true
        };
        return {
          payload: {
            ...drawerDefaults,
            ...drawer
          }
        };
      }
    },
    hideDrawer(state, action) {
      const component = action.payload;
      state.drawers = state.drawers.map((drawer) => {
        if (drawer.component === component)
          return {
            ...drawer,
            show: false
          };
        return drawer;
      });
    },
    hideAllDrawers(state) {
      const openDrawers = state.drawers.filter(({ show }) => show);
      const lastDrawerOpen = openDrawers[openDrawers.length - 1].component;
      let drawers;

      // If only 1 drawer is open just close it
      if (openDrawers.length === 1) {
        drawers = state.drawers.map((drawer) => ({
          ...drawer,
          show: false
        }));
      }
      // If more than 1 drawer is open, close them all but show exit animation only on the last opened one
      else {
        drawers = state.drawers.map((drawer) => {
          if (drawer.component === lastDrawerOpen)
            return {
              ...drawer,
              show: false
            };
          return {
            ...drawer,
            show: false,
            animationOutDuration: 0
          };
        });
      }
      state.drawers = drawers;
    },
    setFooterType(state, action) {
      state.footerType = action.payload;
    }
  }
});
export const { showDrawer, hideDrawer, hideAllDrawers, setFooterType } = appSlice.actions;
export default appSlice.reducer;
