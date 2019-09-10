import routes from "src/router/routes.js";

function filterRoutes(data) {
    return data.find(item => {
        if (!item.hidden) {
            return item.children.filter(code => {
                if (code.children) {
                    code.children = code.children.filter(foo => !foo.hidden)
                } else {
                    code.children = []
                }
            })
        }
    }).children
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