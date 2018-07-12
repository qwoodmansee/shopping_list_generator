# recipes

> This is a recipe app specifically customized to the recipes which I use on a weekly basis. Eventually, a database and API may get put up so that recipes can be added and removed from the application, but for now they are hardcoded.
> The main feature/use case of this applcation is to easily create grocery lists based on which recipes I will be eating in a week.

### Technologies Used
> This project originated as an experiment with Electron and VueJS, but I quickly realized that I would also like to have the app run on mobile. Instead of creating a plain webapp to be served over the web, i thought it may be more intesting to create an actual native application. Therefore, nativescript was added as an additional dependency so that Windows, MacOS, iOS, and Android versions of the app can all be built from the same source code. Note that this does require 2 vue files (similar to Views in an MVC world,) to be created for each component in the app. Shared 'business' logic for each view will go in a single js file, so that most of the code can be reused.

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080, depending on platform
npm run dev:electron
npm run dev:ios (requires correctly configured tns on MacOS)
npm run dev:android (requires tns configured tns)

# build application for production, depending on platform
npm run build:electron
npm run build:ios
npm run build:android

# Clean the application instance (i.e. rm -rf dist)
npm run clean

# lint all JS/Vue component files in `src/`
npm run lint

```

### General Project Structure
While this tool uses webpack to bundle everything together, it's important to note that there are 2 basic build configurations within this repository (one for Electron and one for Nativescript). 
Electron specific files relating to building and configuration can be found in these folders:
- .electron-vue
- src/electron-main

Nativescript specific files related to building and configuration can be found in
- src/nativescript_main 

All actual application data (e.g. components, business logic, classes, etc.) can be found in the src/renderer folder 
  * note that files with .electron or .nativescript in their name will be specific to that build.

---

This project was made by combining two templates - one for electron vue apps and one for nativescript. For more information regarding these two templates, see the following:

- [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[4c6ee7b](https://github.com/SimulatedGREG/electron-vue/tree/4c6ee7bf4f9b4aa647a22ec1c1ca29c2e59c3645) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
- https://github.com/nativescript-vue/vue-cli-template