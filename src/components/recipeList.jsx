import React, { Component } from 'react';
import RecipeItem from './recipeItem';

class RecipeList extends Component {

    state = {
        selected: []
    }

    render() {
        const { recipes, handleCheckboxClick } = this.props;
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
}

export default RecipeList;