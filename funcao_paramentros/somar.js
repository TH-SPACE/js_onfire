function fatorial(n) {
    let fat = 1
    for (c = n; c > 1; c--) {
        fat *= c
        console.log(fat)
    }
    return fat
}

fatorial(5)