
/**
 * A shopping list is really just a list of measured ingredients; however we make it a class to give
 * it some nice methods, like being able to add entire recipes to it.
 * A shopping list should be self balancing, so if you add measured ingredients or recipes,
 * it should do all the adding and recalculating for you.
 */
export class ShoppingList {
  constructor () {
    this.measuredIngredients = []
  }

  /**
   * Takes an instance of a measuredIngredient and adds it to the shopping list. If the ingredient already exists
   * in the list, they will be combined so it doesn't show up twice in the measuredIngredients list.
   * @param {MeasuredIngredient} measuredIngredient the ingredient (including measurement and amount) to be added.
   */
  addMeasuredIngredient (measuredIngredient) {
    // check if the ingredient is already in the list
    let existingIngredientIndex = this.measuredIngredients.findIndex(x => x.ingredient.name === measuredIngredient.ingredient.name)
    if (existingIngredientIndex === undefined || existingIngredientIndex === -1) {
      this.measuredIngredients.push(measuredIngredient)
    } else {
      this.measuredIngredients[existingIngredientIndex].add(measuredIngredient)
    }
  }

  /**
   * Takes a recipe and adds it's ingredients to the shopping list.
   * Each ingredient in the shopping list will be added in such a way that duplicates will not appear on the list,
   * and will instead be combined and only show up once.
   * @param {Recipe} recipe the object to be added
   */
  addRecipe (recipe) {
    // iterate through each measured ingredient in the recipe and add it to the current shopping list
    recipe.measuredIngredients.map(el => {
      this.addMeasuredIngredient(el)
    })
    console.log(this.measuredIngredients)
  }
}
