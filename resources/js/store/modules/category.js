export const namespaced = true;

export const state = {
    categories: []
};

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    }
};

export const actions = {
    async getNavbarCategories({ commit, state }) {
        if (state.categories.length === 0) {
            let { data } = await axios.get('/api/navbar-categories');
            commit('SET_CATEGORIES',data.data);
            return;
        }
    }
};
