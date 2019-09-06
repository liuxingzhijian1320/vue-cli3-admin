import routes from "src/router/routes.js";

function filterRoutes(data) {
    return data.find(item => !item.hidden).children;
}

const state = {
    isCollapse: false,
    routelist: []
}

const getters = {
    isCollapse: state => state.isCollapse,
    routelist: () => filterRoutes(routes)
}

const mutations = {
    updateCollapse(state, payload) {
        state.isCollapse = payload
    },
}

const actions = {}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true,
}