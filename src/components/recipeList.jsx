import React from 'react';
import RecipeItem from './recipeItem';

const RecipeList = ({ recipes, handleCheckboxClick }) => {
    return (
        <div className="recipe-list">
            <ul className="list-group">
                {recipes.map((recipe, i) =>
                    <RecipeItem key={i}
                        recipe={recipe}
                        handleCheckboxClick={handleCheckboxClick} />
                )}
            </ul>
        </div>
    );
}

export default RecipeList;