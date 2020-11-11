function shuffle(a) {
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        const j = i + Math.floor((n - i) * Math.random());
        const k = a[i];
        a[i] = a[j];
        a[j] = k;
    }
    return a;
}

for (let i = 0; i < 10; i++) {
    console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}
