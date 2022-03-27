 const state = () => ({
    categories:[],
});

 const mutations = {
    SET_CATEGORIES(state,category){
        state.categories= category
    },
};

 const actions = {
    async SET_CATEGORIES({commit}){
        return await this.$axios.get('category/list')
            .then(response => commit('SET_PRODUCTS', response.data.products))
            .catch(error => console.log(error));
    }
};
 //http://newshop.loc/category/list

 const getters = {
    GET_CATEGORIES: (state) => state.categories,
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

