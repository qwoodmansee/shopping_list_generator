<template>
  <div class="card" @click="recipeSelected">
    <div class="thumb" v-bind:style="{ backgroundImage: 'url(' + recipe.imageUrl + ')' }"></div>
    <h1 class="card-title">{{recipe.name}}</h1>
  </div>
</template>

<script>
  import SharedLogic from './RecipeCard.js'
  export default {
    name: SharedLogic.name,
    components: SharedLogic.components,
    props: SharedLogic.props,
    // example of how to combine shared logic methods with platform specific methods
    methods: {
      ...SharedLogic.methods
    },
    // example of how data (which is a function) has to work
    data () {
      return {
        ...SharedLogic.data()
      }
    }
  }
</script>

<style scoped>
  .card {
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    min-height: 100%;
    border-radius: 1em;
  }

  /* typography */
  .card h1 {
    font-size: .85em;
    color: #333;
    text-align: center;
  }
  
  .card p { 
    line-height: 1.4;
  }
  
  .card span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
  }

  .card > .thumb {
    padding-bottom: 90%;
    background-size: cover;
    background-position: center center;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
</style>