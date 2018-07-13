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
   * Static method which allows for adding two ingredients based on their metric value.
   * The measurement value of the bigger of the two measured ingredients will be maintained
   * (e.g. addiing a tablespoon and a cup will translate to 1.XYZ cups)
   * can not mix ingredients unless special allowMixed parameter is set to true - if it is the ingedients names will be combined
   *  with a slash (/)
   * @static
   * @param {MeasuredIngredient} measuredIngedient the other measured ingredient to be added
   * @param {MeasuredIngredient} otherMeasuredIngredient the other measured ingredient to be added
   * @param {Boolean} allowMixed ignore measurement names and add the ingredients anyway - default false
   * @returns {MeasuredIngredient} a new measured ingredient with the added amount and updated measurement type
   * @throws Error if the ingredients don't have the same name and allow mixed is set to false
   */
  static add (measuredIngedient, otherMeasuredIngredient, allowMixed = false) {
    let newIngredient = measuredIngedient.ingredient
    if (measuredIngedient.ingredient.name !== otherMeasuredIngredient.ingredient.name && !allowMixed) {
      throw new Error('Can not add two measurements of different names unless special bypass parameter is passed in')
    } else if (measuredIngedient.ingredient.name !== otherMeasuredIngredient.ingredient.name && allowMixed) {
      newIngredient.name = `${newIngredient.name}/${otherMeasuredIngredient.ingredient.name}`
      newIngredient.checkRating = measuredIngedient.ingredient.checkRating >= otherMeasuredIngredient.ingredient.checkRating ? measuredIngedient.ingredient.checkRating : otherMeasuredIngredient.ingredient.checkRating
    }
    let newAmount = measuredIngedient.measurement.toMetric(measuredIngedient.amount) + otherMeasuredIngredient.measurement.toMetric(otherMeasuredIngredient.amount)
    let newMeasurementType = measuredIngedient.measurement.toMetric(1) >= otherMeasuredIngredient.measurement.toMetric(1) ? measuredIngedient.measurement : otherMeasuredIngredient.measurement
    return new MeasuredIngredient(newIngredient, newMeasurementType, newMeasurementType.fromMetric(newAmount))
  }

  toString () {
    return `${this.ingredient.name}: ${this.amount} ${this.measurement.toString()}`
  }
}
