export const state = () => ({
  isDarkMode: false
});

export const getters = {
  isDarkMode: (state) => state.isDarkMode
};

export const mutations = {
  SET_DARK: (state, bool) => {
    if(process.client) {
      localStorage.setItem('dark-theme', bool);
      state.isDarkMode = bool;
    }
  }
};
