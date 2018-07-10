import {MeasuredIngredient} from './ingredient'
import {Recipe} from './recipe'
import * as Measurements from './measurements'
import * as Pantry from './pantry'

export default [
  new Recipe(
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
    'https://www.cookingclassy.com/creamy-broccoli-chicken-shells-cheese/',
    'https://www.cookingclassy.com/wp-content/uploads/2014/09/creamy-broccoli-chicken-shells-and-cheese2+srgb..jpg'
  ),
  new Recipe(
    'Oven Baked Salmon with Lemon Cream Sauce',
    [
      new MeasuredIngredient(Pantry.Salmon, Measurements.Piece, 2),
      new MeasuredIngredient(Pantry.Salt, Measurements.Dash, 1),
      new MeasuredIngredient(Pantry.Pepper, Measurements.Dash, 1),
      new MeasuredIngredient(Pantry.OliveOil, Measurements.Tablespoon, 1),
      new MeasuredIngredient(Pantry.Parsley, Measurements.Tablespoon, 1),
      new MeasuredIngredient(Pantry.Shallots, Measurements.Piece, 2),
      new MeasuredIngredient(Pantry.Lemon, Measurements.Piece, 2),
      new MeasuredIngredient(Pantry.DryWhiteWine, Measurements.Cup, 0.25),
      new MeasuredIngredient(Pantry.HeavyCream, Measurements.Cup, 0.5),
      new MeasuredIngredient(Pantry.Butter, Measurements.Tablespoon, 8)
    ],
    'https://natashaskitchen.com/oven-baked-salmon-lemon-cream-sauce/',
    'https://natashaskitchen.com/wp-content/uploads/2016/05/Baked-Salmon-with-Lemon-Cream-Sauce-10.jpg'
  ),
  new Recipe(
    'Lemon Herb Salmon',
    [
      new MeasuredIngredient(Pantry.Garlic, Measurements.Tablespoon, 1),
      new MeasuredIngredient(Pantry.Rosemary, Measurements.Tablespoon, 1),
      new MeasuredIngredient(Pantry.Oregano, Measurements.Tablespoon, 1),
      new MeasuredIngredient(Pantry.Basil, Measurements.Tablespoon, 1),
      new MeasuredIngredient(Pantry.OliveOil, Measurements.Tablespoon, 2),
      new MeasuredIngredient(Pantry.Lemon, Measurements.Piece, 0.5),
      new MeasuredIngredient(Pantry.Salmon, Measurements.Piece, 2),
      new MeasuredIngredient(Pantry.Zucchini, Measurements.Piece, 1),
      new MeasuredIngredient(Pantry.Mushrooms, Measurements.Cup, 1),
      new MeasuredIngredient(Pantry.YellowBellPepper, Measurements.Piece, 1),
      new MeasuredIngredient(Pantry.CherryTomatoes, Measurements.Pint, 1),
      new MeasuredIngredient(Pantry.Salt, Measurements.Dash, 1),
      new MeasuredIngredient(Pantry.Pepper, Measurements.Dash, 1)
    ],
    'https://www.buzzfeed.com/crystalhatch/lemon-herb-salmon-for-4/',
    'https://img.buzzfeed.com/buzzfeed-static/static/2017-02/9/15/asset/buzzfeed-prod-fastlane-03/sub-buzz-20567-1486671435-13.jpg?downsize=715:*&output-format=auto&output-quality=auto'
  ),
  new Recipe(
    'Lemon Chicken',
    [
      new MeasuredIngredient(Pantry.ChickenThighs, Measurements.Piece, 6),
      new MeasuredIngredient(Pantry.Salt, Measurements.Dash, 1),
      new MeasuredIngredient(Pantry.Pepper, Measurements.Teaspoon, 0.5),
      new MeasuredIngredient(Pantry.OliveOil, Measurements.Teaspoon, 2),
      new MeasuredIngredient(Pantry.Garlic, Measurements.Tablespoon, 1.5),
      new MeasuredIngredient(Pantry.Lemon, Measurements.Piece, 2),
      new MeasuredIngredient(Pantry.DryWhiteWine, Measurements.Cup, 0.25),
      new MeasuredIngredient(Pantry.Oregano, Measurements.Teaspoon, 2),
      new MeasuredIngredient(Pantry.Thyme, Measurements.Teaspoon, 1),
      new MeasuredIngredient(Pantry.Parsley, Measurements.Tablespoon, 1.25)
    ],
    'https://cafedelites.com/lemon-chicken/',
    'https://i1.wp.com/cafedelites.com/wp-content/uploads/2018/06/Lemon-Chicken-With-Crispy-Skin-IMAGE-12.jpg?w=1600&ssl=1'
  ),
  new Recipe(
    'Roasted Chicken and Veggies',
    [
      new MeasuredIngredient(Pantry.BonelessSkinlessChickenBreast, Measurements.Piece, 2),
      new MeasuredIngredient(Pantry.BellPeppers, Measurements.Piece, 1),
      new MeasuredIngredient(Pantry.Onion, Measurements.Piece, 0.5),
      new MeasuredIngredient(Pantry.Zucchini, Measurements.Piece, 1),
      new MeasuredIngredient(Pantry.Broccoli, Measurements.Cup, 1),
      new MeasuredIngredient(Pantry.CherryTomatoes, Measurements.Cup, 0.5),
      new MeasuredIngredient(Pantry.OliveOil, Measurements.Tablespoon, 2),
      new MeasuredIngredient(Pantry.Salt, Measurements.Teaspoon, 0.5),
      new MeasuredIngredient(Pantry.Pepper, Measurements.Teaspoon, 0.5),
      new MeasuredIngredient(Pantry.ItalianSeasoning, Measurements.Teaspoon, 1),
      new MeasuredIngredient(Pantry.Paprika, Measurements.Teaspoon, 0.25)
    ],
    'https://gimmedelicious.com/2016/03/22/15-minute-healthy-roasted-chicken-and-veggies/',
    'https://gimmedelicious.com/wp-content/uploads/2016/03/roasted-veggies-20-of-45.jpg'
  )
]
