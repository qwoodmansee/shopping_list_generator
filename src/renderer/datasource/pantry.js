/**
 * Pantry is simply a list of every possible ingredient exported. Ingredients are classes and therefore
 * we will have a singleton instance of each ingredient. Import from this file to have access to ingredients
 * to build recipes and lists.
 */

import { Ingredient } from '../classes/ingredient'

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
let ParmeseanCheeseShredded = Object.freeze(new Ingredient('Shredded Parmesean Cheese', 4))
let SalmonFillet = Object.freeze(new Ingredient('Salmon Fillet', 5))
let Shallots = Object.freeze(new Ingredient('Medium Shallot'), 4)
let DryWhiteWine = Object.freeze(new Ingredient('Dry White Wine', 3))
let Lemon = Object.freeze(new Ingredient('Lemons'), 4)
let HeavyCream = Object.freeze(new Ingredient('Heavy Cream'), 3)
let OliveOil = Object.freeze(new Ingredient('Olive Oil'), 1)
let Parsley = Object.freeze(new Ingredient('Parsley'), 4)
let Garlic = Object.freeze(new Ingredient('Garlic'), 2)
let Rosemary = Object.freeze(new Ingredient('Rosemary'), 1)
let Oregano = Object.freeze(new Ingredient('Oregano'), 1)
let Basil = Object.freeze(new Ingredient('Basil'), 1)
let Zucchini = Object.freeze(new Ingredient('Zucchini'), 4)
let Mushrooms = Object.freeze(new Ingredient('Mushrooms'), 4)
let YellowBellPepper = Object.freeze(new Ingredient('Yellow Bell Pepper'), 5)
let CherryTomatoes = Object.freeze(new Ingredient('Cherry Tomatoes'), 3)
let ChickenThighs = Object.freeze(new Ingredient('Chicken Thighs'), 5)
let ChickenStock = Object.freeze(new Ingredient('Chicken Stock'), 3)
let Thyme = Object.freeze(new Ingredient('Thyme'), 1)
let BellPeppers = Object.freeze(new Ingredient('Bell Peppers (any color)'), 4)
let Onion = Object.freeze(new Ingredient('Onion'), 3)
let ItalianSeasoning = Object.freeze(new Ingredient('Italian Seasoning'), 1)
let Paprika = Object.freeze(new Ingredient('Paprika'), 3)

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
  ParmeseanCheeseShredded,
  SalmonFillet,
  Shallots,
  DryWhiteWine,
  Lemon,
  HeavyCream,
  OliveOil,
  Parsley,
  Garlic,
  Rosemary,
  Oregano,
  Basil,
  Zucchini,
  Mushrooms,
  YellowBellPepper,
  CherryTomatoes,
  ChickenThighs,
  ChickenStock,
  Thyme,
  BellPeppers,
  Onion,
  ItalianSeasoning,
  Paprika
}
