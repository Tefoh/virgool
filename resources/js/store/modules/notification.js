export const namespaced = true;

export const state = {
    notifications: []
};

export const mutations = {
    SET_NOTIFICATIONS(state, notifications) {
        state.notifications = notifications;
    }
};

export const actions = {
    async getNotifications({ commit, state }) {
        if (state.notifications.length === 0) {
            let { data } = await axios.get('/api/notifications');
            commit('SET_NOTIFICATIONS', data.data);
            return;
        }
    }
};
