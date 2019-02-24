import React from 'react';
import { render, cleanup } from 'react-testing-library';
import IngredientList from '../components/ingredientList';

describe("DOM & UI testing for IngredientList Component", () => {

    afterEach(cleanup);

    it("should render the RecipeItem component", () => {
        const selectedRecipes = [
            {
                name: "kadai chicken",
                ingredients: ["Chicken", "Ginger", "Garlic"]
            },
            {
                name: "butter chicken",
                ingredients: ["Chicken", "Butter", "Tomatoes"]
            }
        ]

        const ingredientList = render(
            <IngredientList selectedRecipes={selectedRecipes} />
        );

        // verify is dom node was created
        expect(ingredientList).toBeDefined();

        // should be only 1 item of each
        const chicken_item = ingredientList.getAllByText(/chicken/i);
        expect(chicken_item).toBeDefined();
        expect(chicken_item.length).toEqual(1);

        const butter_item = ingredientList.getAllByText(/butter/i);
        expect(butter_item).toBeDefined();
        expect(butter_item.length).toEqual(1);

        const ginger_item = ingredientList.getAllByText(/ginger/i);
        expect(ginger_item).toBeDefined();
        expect(ginger_item.length).toEqual(1);

        const garlic_item = ingredientList.getAllByText(/garlic/i);
        expect(garlic_item).toBeDefined();
        expect(garlic_item.length).toEqual(1);

        const tomato_item = ingredientList.getAllByText(/tomato/i);
        expect(tomato_item).toBeDefined();
        expect(tomato_item.length).toEqual(1);
    });
});