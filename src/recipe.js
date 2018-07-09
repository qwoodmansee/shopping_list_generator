/**
 * A recipe is a named list of measured ingredients
 * @property {String} name: the name of the recipe
 * @property {MeasuredIngredient} measuredIngredients: the list of measured ingredients in the recipe
 * @property {String} url: the url to the recipe
 */
export class Recipe {
  /**
   * @param {String} name: the name of the recipe
   * @param {MeasuredIngredient[]}measuredIngredients: the list of measured ingredients in the recipe
   * @param {String} url: the url to the recipe
   */
  constructor (name, measuredIngredients, url) {
    this.name = name
    this.measuredIngredients = measuredIngredients
    this.url = url
  }

  toString () {
    let builder = []
    builder.push(`${this.name}`)
    builder.push(`${this.url}`)
    builder.push('---------------------------------------')
    this.measuredIngredients.map(el => builder.push(el.toString()))
    return builder.join('\n')
  }
}
