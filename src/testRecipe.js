import {MeasuredIngredient} from './ingredient'
import {Recipe} from './recipe'
import * as Measurements from './measurements'
import * as Pantry from './pantry'

export function BroccoliChickenShellsAndCheese () {
  return new Recipe(
    'Creamy Broccoli Chicken Shells and Cheese',
    [
      new MeasuredIngredient(Pantry.LargeShellPasta, Measurements.Ounce, 9),
      new MeasuredIngredient(Pantry.BonelessSkinlessChickenBreast, Measurements.Pound, 1),
      new MeasuredIngredient(Pantry.Broccoli, Measurements.Cup, 4.5),
      new MeasuredIngredient(Pantry.Butter, Measurements.Tablespoon, 2.5),
      new MeasuredIngredient(Pantry.Flour, Measurements.Cup, 0.25),
      new MeasuredIngredient(Pantry.OnionPowder, Measurements.Teaspoon, 0.5),
      new MeasuredIngredient(Pantry.GarlicPowder, Measurements.Teaspoon, 0.25),
      new MeasuredIngredient(Pantry.Salt, Measurements.Dash, 1),
      new MeasuredIngredient(Pantry.Pepper, Measurements.Dash, 1),
      new MeasuredIngredient(Pantry.LowFatMilk, Measurements.Cup, 3),
      new MeasuredIngredient(Pantry.ReducedFatShreddedCheddarCheese, Measurements.Cup, 1.5),
      new MeasuredIngredient(Pantry.ParmeseanCheeseShredded, Measurements.Cup, 1 / 3)
    ],
    'https://www.cookingclassy.com/creamy-broccoli-chicken-shells-cheese/'
  )
}
