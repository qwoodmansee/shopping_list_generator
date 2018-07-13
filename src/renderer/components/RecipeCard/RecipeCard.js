/**
 * This file contains common methods, data, components, and other properties which can be used by both versions of the Recipe Card.
 */
import Recipe from '@/classes/recipe'

export default {
  name: 'recipe-card',
  props: {
    recipe: {
      type: Recipe,
      required: true
    }
  },
  components: {},
  methods: {
    recipeSelected () {
      this.$emit('onCardClick')
    }
  },
  data () {
    return {
    }
  }
}
