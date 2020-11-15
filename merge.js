function merge(a, b) {
    const c = [];
    let i = 0, j = 0;
    while (i < a.length || j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i++]);
        }
        else {
            c.push(b[j++]);
        }
    }
    return c;
}

// Test
for (let i = 0; i < 100; i++) {
    const a = [], b = [];
    for (let j = 0; j < 20; j++) {
        a.push(Math.random());
        b.push(Math.random());
    }
    const c = merge(a.sort(), b.sort());
    console.log(c);
}

