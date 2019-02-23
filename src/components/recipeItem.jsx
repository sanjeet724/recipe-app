import React, { Component } from 'react';

class RecipeItem extends Component {
    state = {
        checked: false
    }

    render() {
        const { recipe, handleCheckboxClick } = this.props;
        const { name, cook_time, type } = recipe;
        const mins = cook_time + " mins";
        return (
            <div className="list-group-item">
                <div className="recipe-list-item">
                    <input
                        type="checkbox"
                        onClick={(e) => handleCheckboxClick(recipe, e.target.checked)}
                        className="check-box"></input>
                    <h6 className="recipe-name">{name}</h6>
                    <h6 className="badges">
                        <span className="badge badge-pill badge-secondary badge-recipe">{type}</span>
                        <span className="badge badge-pill badge-info">{mins}</span>
                    </h6>
                </div>
            </div>

        )
    }
}

export default RecipeItem
