export const state = () => ({
    list: [],
    pagination: {
        current_page: 0,
        pages_total: 10
    },
    loading:false,
});

export const mutations = {
    ADD (state, items) {
        state.list.push(...items);
    },
    SET (state, items){
      state.list = items;
    },
    SET_PAGINATION (state, pagination) {
        state.pagination = pagination;
    },
    TOGGLE_LOADING(state){
      state.loading = !state.loading;
    }
};

export const actions = {
    getNextMemes (context) {
        context.commit('TOGGLE_LOADING');
        this.$services.memeService.list(context.state.pagination.current_page + 1).then((response)=> {
            context.commit('ADD', response.data);
            delete response.data;
            context.commit('SET_PAGINATION', response);
            context.commit('TOGGLE_LOADING');
        });
    },
    getMemePage(context, page){
      context.commit('TOGGLE_LOADING');
      this.$services.memeService.list(page).then((response)=> {
        context.commit('SET', response.data);
        delete response.data;
        context.commit('SET_PAGINATION', response);
        context.commit('TOGGLE_LOADING');
      });
    }
};

export const getters = {
    memes: state => {
        return state.list
    }
};
