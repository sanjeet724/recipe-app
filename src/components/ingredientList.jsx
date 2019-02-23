import React from 'react';

const IngredientList = ({ selectedRecipes: recipes }) => {
    const allIngredients = [];
    // extract all the unique ingredients of all selected recipes
    recipes.forEach(recipe => {
        let ingredients = recipe.ingredients;
        ingredients.forEach(ing => {
            if (!allIngredients.includes(ing)) {
                allIngredients.push(ing);
            }
        });
    });
    // sort in alphabetical order
    allIngredients.sort((a, b) => a.localeCompare(b));
    return (
        <div className="ingredients-list">
            <ul className="list-group">
                {allIngredients.map((ing, i) =>
                    <li key={i} className="list-group-item"><h6>{ing}</h6></li>
                )}
            </ul>
        </div>
    );
}

export default IngredientList;