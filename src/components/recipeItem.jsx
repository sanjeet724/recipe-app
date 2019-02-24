import React from 'react';

const RecipeItem = ({ recipe, selectedRecipes: selected, handleCheckboxClick }) => {
    const { name, cook_time, type } = recipe;
    const mins = cook_time + " mins";
    const isSelected = selected.includes(recipe);
    const selectedCSS = isSelected ? "list-group-item list-group-item-info" : "list-group-item";
    return (
        <div className={selectedCSS}>
            <li className="recipe-list-item">
                <input
                    type="checkbox"
                    value={name + "-check-box"}
                    onClick={(e) => handleCheckboxClick(recipe, e.target.checked)}
                    className="check-box"></input>
                <h6 className="recipe-name">{name}</h6>
                <h6 className="badges">
                    <span className="badge badge-pill badge-secondary badge-recipe">{type}</span>
                    <span className="badge badge-pill badge-info">{mins}</span>
                </h6>
            </li>
        </div>
    );
}

export default RecipeItem;

