/**
 * An entire base class for measurements might be overkill, but I think it would
 * be nice to be able to write some override or mapping functions later on
 * so we can combine/add them together, write them out nicely, etc.
 */
class Measurement {
  constructor (name) {
    this.name = name
  }

  /**
   * toMetric will return the passed in amount of the measurement in grams or liters
   * (depending on if it's liquid). The purpose of this is to be used in
   * other methods, such as adding and subtracting
   */
  toMetric (amount) {
    throw new Error('toMetric method must be implemented for all child classes of Measurement')
  }

  /**
   * fromMetric will take an amount of metric units (grams or liters) and
   * return the appropriate amount of the measurement class. Will come in handy
   * after adding/subtracting different measurement types.
   */
  fromMetric (amount) {
    throw new Error('fromMetric method must be implemented for all child classes of Measurement')
  }

  /**
   * toString will output the abbreviated version of the measurement
   * which may or may not be the same as the name.
   */
  toString () {
    throw new Error('toString method must be implemented for all child classes of Measurement')
  }
}

class Pound extends Measurement {
  toMetric (amount) {
    return amount * 453.59237
  }
  fromMetric (amount) {
    return 453.59237 / amount
  }
  toString () {
    return 'lb'
  }
}

class Ounce extends Measurement {
  toMetric (amount) {
    return amount * 28.3495
  }
  fromMetric (amount) {
    return 28.3495 / amount
  }
  toString () {
    return 'oz.'
  }
}

class Tablespoon extends Measurement {
  toMetric (amount) {
    return amount * 0.0147868 // liters
  }
  fromMetric (amount) {
    return 0.0147868 / amount
  }
  toString () {
    return 'Tbsp.'
  }
}

class Cup extends Measurement {
  toMetric (amount) {
    return amount * 0.236588 // liters
  }
  fromMetric (amount) {
    return 0.236588 / amount
  }
  toString () {
    return 'Cup'
  }
}

class Teaspoon extends Measurement {
  toMetric (amount) {
    return amount * 0.00492892 // liters
  }
  fromMetric (amount) {
    return 0.00492892 / amount
  }
  toString () {
    return 'tsp.'
  }
}

class Dash extends Measurement {
  toMetric (amount) {
    return amount
  }
  fromMetric (amount) {
    return amount
  }
  toString () {
    return 'dash'
  }
}

// use singleton pattern to create a single instance of each of the measurement classes to export
const poundInstance = new Pound()
Object.freeze(poundInstance)
const ounceInstance = new Ounce()
Object.freeze(ounceInstance)
const tablespoonInstance = new Tablespoon()
Object.freeze(tablespoonInstance)
const cupInstance = new Cup()
Object.freeze(cupInstance)
const teaspoonInstance = new Teaspoon()
Object.freeze(teaspoonInstance)
const dashInstance = new Dash()
Object.freeze(dashInstance)

// export each singleton with a better name
export {
  poundInstance as Pound,
  ounceInstance as Ounce,
  tablespoonInstance as Tablespoon,
  cupInstance as Cup,
  teaspoonInstance as Teaspoon,
  dashInstance as Dash
}
