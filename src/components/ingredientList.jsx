import React from 'react';
import * as helpers from '../helpers/sortUnique';

const IngredientList = ({ selectedRecipes: recipes }) => {
    const uniqueIngredients = helpers.sortUnique(recipes, "ingredients");
    return (
        <div className="ingredients-list">
            <ul className="list-group">
                {uniqueIngredients.map((ing, i) =>
                    <li key={i} className="list-group-item list-group-item-secondary">
                        <div className="ingredient-name">{ing}</div></li>
                )}
            </ul>
        </div>
    );
}

export default IngredientList;