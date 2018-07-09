/**
 * Relatively simple ingredient class which has a name and a check category -
 * the higher the check category, the less likely we are to have it sitting
 * around the house.
 * @property {String} name: the name of the ingredient
 * @property {Number} checkRating: how necessary it is to check if we currently have this
 */
export class Ingredient {
  /**
   * @param {String} name: the name of the ingredient
   * @param {Number} checkRating: how necessary it is to check if we currently have this
   */
  constructor (name, checkRating) {
    this.name = name
    this.checkRating = checkRating
  }
}

/**
 * this is an ingredient which makes up part of a recipe or shopping list.
 * Make sure the measurement is a valid instance of a measurement based class
 *  so it has the nice methods
 * @property {Ingredient} ingredient: the ingredient object associated with this item
 * @property {Measurement} measurement: the measurement object associated with this item
 * @property {Number} amount: the amount of the measurement
 */
export class MeasuredIngredient {
  /**
   * @param {Ingredient} ingredient: the ingredient object associated with this item
   * @param {Measurement} measurement: the measurement object associated with this item
   * @param {Number} amount: the amount of the measurement
   */
  constructor (ingredient, measurement, amount) {
    this.ingredient = ingredient
    this.measurement = measurement
    this.amount = amount
  }

  /**
   * takes another measured ingredient and adds it to this one
   * can not mix ingredients unless special allowMixed parameter is set to true
   * @param {MeasuredIngredient} otherMeasuredIngredient the other measured ingredient to be added
   * @param {Boolean} allowMixed ignore measurement names and add the ingredients anyway - default false
   * @throws Error if the ingredients don't have the same name and allow mixed is set to false
   */
  add (otherMeasuredIngredient, allowMixed = false) {
    if (this.ingredient.name !== otherMeasuredIngredient.ingredient.name && !allowMixed) {
      throw new Error('Can not add two measurements of different names unless special bypass parameter is passed in')
    }
    let newAmount = this.measurement.toMetric(this.amount) + otherMeasuredIngredient.measurement.toMetric(otherMeasuredIngredient.amount)
    this.amount = this.measurement.fromMetric(newAmount)
  }

  toString () {
    return `${this.ingredient.name}: ${this.amount} ${this.measurement.toString()}`
  }
}
