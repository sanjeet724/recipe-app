## About the app
A react app which displays recipes and their ingredients. Currently there are no network calls and the data is read from a given json file. App is responsive i.e works on desktop browsers and mobile devices.

## Features & Functionality
* The recipes are shown in a list
* User can select one or more recipe from the list using a checkbox
* Seleting a recipe, highlights the cell indicating a selection
* Selecting a recipe(s), shows all the ingredients (unique) in an alphabetical order
* De-selecting a recipe(s) hides the corresponding ingredients
* The ingredient list is updated based on the user selection
* If nothing is selected, we only see the recipe list

## Libraries used
* React for building the UI and managing state
* Bootstrap for CSS, styling and layouts
* Font awesome for fonts

## Tests
* Used JEST to add unit tests

## Installation and running instructions
* *npm install* to setup the app
* *npm start* to run the app at http://localhost:3000
* *npm test -- --coverage* to run tests with coverage
