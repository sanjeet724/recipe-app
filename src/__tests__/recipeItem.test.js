import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import RecipeItem from '../components/recipeItem';

describe("DOM & UI testing for RecipeItem Component", () => {

    afterEach(cleanup);

    it("should render the RecipeItem component", () => {
        const recipe = {
            name: "butter chicken",
            type: "indian",
            cook_time: 45,
            ingredients: ["Chicken", "Tomato", "Salt"]

        };
        const selectedRecipes = [
            {
                name: "kadai chicken",
                type: "indian",
                cook_time: 60,
                ingredients: ["Chicken broth", "Curry powder"]
            }
        ]
        // spy on the event handler
        const handleCheckboxClick = jest.fn();

        const recipeItem = render(
            <RecipeItem
                recipe={recipe}
                selectedRecipes={selectedRecipes}
                handleCheckboxClick={handleCheckboxClick} />
        );

        // verify is dom node was created
        expect(recipeItem).toBeDefined();

        // get the checkbox and simulate a click event
        const checkBox = recipeItem.getByValue(/check-box/i);
        fireEvent.click(checkBox);

        // verify click was fired
        expect(handleCheckboxClick).toHaveBeenCalled();
    });
});

