import React from 'react';
import RecipeItem from './recipeItem';

const RecipeList = ({ recipes, selectedRecipes, handleCheckboxClick }) => {
    return (
        <div className="recipe-list">
            <ul className="list-group">
                {recipes.map((recipe, i) =>
                    <RecipeItem key={i}
                        recipe={recipe}
                        selectedRecipes={selectedRecipes}
                        handleCheckboxClick={handleCheckboxClick} />
                )}
            </ul>
        </div>
    );
}

export default RecipeList;