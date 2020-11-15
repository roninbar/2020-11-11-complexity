function merge(a, b) {
    const c = [];
    let i = 0, j = 0;
    while (i < a.length || j < b.length) {
        c.push(
            i === a.length
                ? b[j++]
                : j === b.length
                    ? a[i++]
                    : a[i] < b[j]
                        ? a[i++]
                        : b[j++]
        );
    }
    return c;
}

// Test
for (let i = 0; i < 100; i++) {
    // Generate two arrays of 20 random numbers each.
    const a = [], b = [];
    for (let j = 0; j < 20; j++) {
        a.push(Math.random());
        b.push(Math.random());
    }
    const c = merge(a.sort(), b.sort());
    console.log(c);
}

