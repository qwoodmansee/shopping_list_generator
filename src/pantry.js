/**
 * Pantry is simply a list of every possible ingredient exported. Ingredients are classes and therefore
 * we will have a singleton instance of each ingredient. Import from this file to have access to ingredients
 * to build recipes and lists.
 */

import {Ingredient} from './ingredient'

let LargeShellPasta = Object.freeze(new Ingredient('Large Shell Pasta', 3))
let BonelessSkinlessChickenBreast = Object.freeze(new Ingredient('Boneless Skinless Chicken Breasts', 5))
let Broccoli = Object.freeze(new Ingredient('Broccoli Florets', 4))
let Butter = Object.freeze(new Ingredient('Butter', 2))
let Flour = Object.freeze(new Ingredient('Flour', 1))
let OnionPowder = Object.freeze(new Ingredient('Onion Powder', 1))
let GarlicPowder = Object.freeze(new Ingredient('Garlic Powder', 1))
let Salt = Object.freeze(new Ingredient('Salt', 1))
let Pepper = Object.freeze(new Ingredient('Pepper', 1))
let LowFatMilk = Object.freeze(new Ingredient('Low-Fat Milk', 4))
let ReducedFatShreddedCheddarCheese = Object.freeze(new Ingredient('Reduced Fat Sharp Cheddar Cheese, Shredded', 4))
let ParmeseanCheeseShredded = Object.freeze(new Ingredient('Shreed Parmesean Cheese', 4))

export {
  LargeShellPasta,
  BonelessSkinlessChickenBreast,
  Broccoli,
  Butter,
  Flour,
  OnionPowder,
  GarlicPowder,
  Salt,
  Pepper,
  LowFatMilk,
  ReducedFatShreddedCheddarCheese,
  ParmeseanCheeseShredded
}
