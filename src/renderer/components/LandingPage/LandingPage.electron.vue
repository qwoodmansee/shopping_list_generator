<template>
  <div id="wrapper">
    <section class="app-grid">
      <header>Shopping List Maker</header>
      <main>
        <div v-for="recipe in recipes" :key="recipe.name">
          <recipe-card :recipe="recipe"/>
        </div>
      </main>
      <aside>
        <table>
            <tr>
              <th>Ingredient</th>              
              <th>Amount</th>              
              <th>Measurement</th>              
            </tr>
            <tr v-for="measuredIngredient in recipes[0].measuredIngredients" :key="measuredIngredient.ingredient.name">
              <td class="ingredient-name">{{measuredIngredient.ingredient.name}}</td>
              <td class="ingredient-amount">{{measuredIngredient.amount}}</td>
              <td class="ingredient-measurement">{{measuredIngredient.measurement.toString()}}</td>
            </tr>
          </table>
      </aside>
      <footer>copyright qwoodmansee</footer>
    </section>
  </div>
</template>

<script>
  import SharedLogic from './LandingPage.js'
  import RecipeCard from '../RecipeCard/RecipeCard.electron'
  export default {
    name: SharedLogic.name,
    components: {
      ...SharedLogic.components,
      RecipeCard
    },
    // example of how to combine shared logic methods with platform specific methods
    methods: {
      ...SharedLogic.methods,
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    // example of how data (which is a function) has to work
    data () {
      return {
        ...SharedLogic.data(),
        examplePlatformSpecifcData: 'hello electron world'
      }
    }
  }
</script>

<style scoped>
  .app-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-template-areas:    "header header header"
                            "main main sidebar"
                            "footer footer footer";
  }

  .app-grid aside, main, footer, header {
    color: white;
    font-size: 20px;
    padding: 20px;
  }

  .app-grid > header {
    /* background: #b03532; */
    grid-area: header;
  }

  .app-grid > main {
    /* background: #33a8a5; */
    grid-area: main;
    display: grid;   
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
  }

  .app-grid > aside {
    /* background: #30997a; */
    grid-area: sidebar;
  }
  .app-grid > footer {
    /* background: #6a478f; */
    grid-area: footer;
  }

  .ingredient-amount {
    text-align: right;
  }

</style>
