export const state = () => ({
    list: [],
    pagination: {
        current_page: 0
    }
})

export const mutations = {
    ADD (state, items) {
        state.list.push(...items);
    },
    SET_PAGINATION (state, pagination) {
        state.pagination = pagination;
    },
};

export const actions = {
    getMemes (context) {
        this.$services.memeService.list(context.state.pagination.current_page + 1).then((response)=> {
            context.commit('ADD', response.data);
            delete response.data;
            context.commit('SET_PAGINATION', response);
        });
    }
};

export const getters = {
    memes: state => {
        return state.list
    }
};