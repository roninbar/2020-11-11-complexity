function partition(a) {
    let p = 0, q = a.length - 1;
    while (p < q) {
        if (a[p] < 0) {
            p++;
        }
        else if (a[q] >= 0) {
            q--;
        }
        else {
            const n = a[p];
            a[p] = a[q];
            a[q] = n;
            p++;
            q--;
        }
    }
    return p;
}

const a = [-4, -2, 3, -11, 7, 5, -4, 1, 2, -3];

const p = partition(a);

console.log(p, a);

