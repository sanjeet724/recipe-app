export function sortUnique(items, property) {
    // check if items is array
    if (!Array.isArray(items)) {
        return [];
    }

    const res = [];
    // extract the unique values
    items.forEach(item => {
        let list = item[property];
        list.forEach(i => {
            if (!res.includes(i)) {
                res.push(i);
            }
        });
    });
    // sort in alphabetical order
    res.sort((a, b) => a.toString().localeCompare(b.toString()));

    return res;
}