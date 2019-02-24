import * as helpers from '../helpers/sortUnique';

const sortFn = helpers.sortUnique;

describe("function should be defined", () => {

    it("should be defined", () => {
        expect(sortFn).toBeDefined();
    });
});

describe("test the function", () => {
    it("should return unique values alphabetically sorted", () => {
        const testData = require('./testData.json');
        const expected = [
            'abraham',
            'boyle',
            'boyle walsh',
            'connie',
            'david',
            'elizabeth',
            'jack',
            'john',
            'john lenon',
            'kane',
            'mary',
            'mary elizabeth',
            'susan',
            'veronica',
            'zane',
            'zuby'
        ];
        const res = sortFn(testData, "data")
        expect(res).toEqual(expected);
    });

    it("should work on a single input", () => {
        const testData = [{
            "id": 1,
            "data": [
                "mary",
                "jane",
                "mary",
                "jane",
                "mary jane"
            ]
        }];

        const expected = [
            "jane",
            "mary",
            "mary jane"
        ];

        const res = sortFn(testData, "data");
        expect(res).toEqual(expected);
    });

    it("should return an empty array for an empty array input", () => {
        const testData = [];
        const expected = [];

        const res = sortFn(testData, "data");
        expect(res).toEqual(expected);
    });

    it("should return an empty array for an empty object input", () => {
        const testData = {};
        const expected = [];

        const res = sortFn(testData, "data");
        expect(res).toEqual(expected);
    });

    it("should work on numeric values", () => {
        const testData = [{
            "id": 1,
            "data": [
                11,
                12,
                1,
                11,
                10,
                2,
                3,
                0,
                5,
                111
            ]
        }];
        // won't be sorted numerically
        const expected = [0, 1, 10, 11, 111, 12, 2, 3, 5];

        const res = sortFn(testData, "data");
        expect(res).toEqual(expected);
    });

    it("should work on alphanumeric values", () => {
        const testData = [
            {
                "id": 1,
                "data": [
                    "abc",
                    "01abc",
                    "1abc",
                    "1abc",
                    "6abc",
                    "abc3",
                    "xyz"
                ]
            }
        ];
        const expected = ['01abc', '1abc', '6abc', 'abc', 'abc3', 'xyz'];

        const res = sortFn(testData, "data");
        expect(res).toEqual(expected);
    });
})
