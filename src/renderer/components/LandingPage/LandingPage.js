/**
 * This file contains common methods, data, components, and other properties which can be used by both versions of the landing page.
 */
import MasterRecipeList from '../../datasource/masterRecipeList'
console.log(MasterRecipeList)

export default {
  name: 'landing-page',
  components: {},
  methods: {
  },
  data () {
    return {
      recipes: MasterRecipeList
    }
  }
}
