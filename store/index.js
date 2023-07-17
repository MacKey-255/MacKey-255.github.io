export const state = () => ({
  isDarkMode: false
});

export const getters = {
  isDarkMode: (state) => state.isDarkMode
};

export const mutations = {
  SET_DARK: (state, bool) => {
    state.isDarkMode = bool;
  }
};
