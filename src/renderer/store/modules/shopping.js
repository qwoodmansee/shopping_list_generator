import {ShoppingList} from '../../classes/shoppingList'

const state = {
  shoppingList: new ShoppingList()
}

const mutations = {
  ADD_RECIPE (state, recipe) {
    state.shoppingList.addRecipe(recipe)
  },
  CLEAR_LIST (state) {
    state.shoppingList = new ShoppingList()
  }
}

const actions = {
  addRecipe ({ commit }, recipe) {
    // do something async
    commit('ADD_RECIPE', recipe)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
