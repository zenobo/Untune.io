// Actions
export const TOGGLE_SIDEBAR = 'Toggle sidebar';

// Methods
export const ToggleSidebar = () => {
  return (dispatch) => {
    return dispatch({
      type: TOGGLE_SIDEBAR,
      payload: { }
    })
  }
}
