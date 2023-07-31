export const state = () => ({
  isDarkMode: false,
  activePage: 'home',
});

export const getters = {
  isDarkMode: (state) => state.isDarkMode,
  activePage: (state) => state.activePage,
  GITHUB_PROFILE_URL: () => 'https://github.com/MacKey-255',
  LINKEDIN_PROFILE_URL: () => 'https://www.linkedin.com/in/mackey255/',
  EMAIL: () => 'mackeyfuturo@gmail.com'
};

export const mutations = {
  SET_DARK: (state, bool) => {
    if (process.client) {
      localStorage.setItem('dark-theme', bool);
    }
    state.isDarkMode = bool;
  },
  SET_PAGE: (state, value) => {
    state.activePage = value;
    if (process.client) {
      window.scrollTo(0, 0);
      window.location.hash = value;
    }
  }
};
