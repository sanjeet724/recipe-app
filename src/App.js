import React, { Component } from 'react';
import RecipeList from './components/recipeList';
import IngredientList from './components/ingredientList';
import './App.css';

class App extends Component {
  state = {
    recipes: [],
    selectedRecipes: []
  }

  componentDidMount() {
    // set the initial state
    const initialState = require('../src/state/recipes.json');
    this.setState({ recipes: initialState });
  }

  // event handler for the check-box
  handleRecipeSelection = (recipe, checked) => {
    const { selectedRecipes } = this.state;
    if (checked) {
      selectedRecipes.push(recipe);
    } else {
      const index = selectedRecipes.findIndex(r => r.name === recipe.name);
      selectedRecipes.splice(index, 1);
    }

    this.setState({ selectedRecipes: selectedRecipes });
  }

  render() {
    const { recipes, selectedRecipes } = this.state;
    return (
      <div className="container-fluid bg-light">
        <div className="recipe-app">
          <header className="header">
            <h1>Recipe Builder <i className="fas fa-hamburger"></i></h1>
          </header>
          <div className="main-container">
            <div className="recipe-container">
              <h5>Select some recipes <i className="fas fa-hand-point-down"></i></h5>
              <RecipeList recipes={recipes}
                selectedRecipes={selectedRecipes}
                handleCheckboxClick={this.handleRecipeSelection} />
            </div>
            {
              selectedRecipes.length > 0 &&
              <div className="ingredient-container">
                <h5 className="ingredient-label">Ingredients <i className="fas fa-utensils"></i></h5>
                <IngredientList selectedRecipes={selectedRecipes} />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
