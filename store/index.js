export const state = () => ({
  isDarkMode: false,
  activePage: 'home',
});

export const getters = {
  isDarkMode: (state) => state.isDarkMode,
  activePage: (state) => state.activePage
};

export const mutations = {
  SET_DARK: (state, bool) => {
    if (process.client) {
      localStorage.setItem('dark-theme', bool);
    }
    state.isDarkMode = bool;
  },
  SET_PAGE: (state, value) => {
    if (!value || value === '') {
      return;
    }
    state.activePage = value;
    if (process.client) {
      window.scrollTo(0, 0);
      window.location.hash = value;
    }
  }
};
