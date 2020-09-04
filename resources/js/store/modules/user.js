export const namespaced = true;

export const state = {
    user: window.user,
    isLoggedIn: !!window.user,
};

export const mutations = {
    LOGOUT(state) {
        state.isLoggedIn = false;
        state.user = null;
    },
    LOGIN(state, payload) {
        state.isLoggedIn = true;
        state.user = {
            name: payload.name,
            isVerified: payload.email_verified_at == null ? 1 : 2
        }
    },
    REGISTER(state, payload) {
        state.isLoggedIn = true;
        state.user = {
            name: payload.name,
            isVerified: 1
        }
    },
    RESET_PASSWORD(state, payload) {
        state.isLoggedIn = true;
        state.user = {
            name: payload.name,
        }
    },
    SET_NAME(state, name) {
        state.user.name = name;
    }
};

export const actions = {
    logout({commit}) {
        return axios.post('/logout')
            .then(() => {
                commit('LOGOUT')
            })
    },
    login({commit}, form) {
        return axios.post('/login', form)
            .then(({data}) => {
                commit('LOGIN', data.data)
            })
    },
    register({commit}, form) {
        return axios.post('/register', form)
            .then(({data}) => {
                commit('REGISTER', data.data)
            })
    },
    resetPassword({ commit }, form) {
        return axios.post('/api/password/reset', form)
            .then(async () => {
                let response = await axios.get('/api/me');
                commit('RESET_PASSWORD', response.data)
            })
    },
    sendEmail(context, form) {
        return axios.post('/api/password/email', form)
    },
    changeName({ commit }, name) {
        commit('SET_NAME', name);
    }
};
