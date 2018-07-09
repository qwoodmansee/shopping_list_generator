const state = {
  selectedRecipes: []
}

const mutations = {
  ADD_RECIPE (state, recipe) {
    state.selectedRecipes.push(recipe)
  }
}

const actions = {
  someAsyncTask ({ commit }, recipe) {
    // do something async
    commit('ADD_RECIPE', recipe)
  }
}

export default {
  state,
  mutations,
  actions
}
