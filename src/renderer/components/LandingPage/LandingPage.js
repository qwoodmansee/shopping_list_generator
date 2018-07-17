/**
 * This file contains common methods, data, components, and other properties which can be used by both versions of the landing page.
 */
import MasterRecipeList from '../../datasource/masterRecipeList'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'landing-page',
  components: {},
  methods: {
    ...mapMutations('shopping', {addRecipe: 'ADD_RECIPE', clearShoppingList: 'CLEAR_LIST'})
  },
  computed: {
    ...mapState('shopping', ['shoppingList'])
  },
  data () {
    return {
      recipes: MasterRecipeList
    }
  }
}
