function duplicate(array) {
    const seen = {};
    for (let i = 0; i < array.length; i++) {
        if (seen[array[i]]) {
            return array[i];
        }
        seen[array[i]] = true;
    }
    return NaN;
}

const a = [4, 1, 3, 7, 11, 6, 7, 13, 10, 9];

console.log(duplicate(a));
