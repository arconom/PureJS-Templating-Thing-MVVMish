function *fibbonacci(n) {
    let current = 1, previous = 0, temp, i = 0;

    yield 1;

    for (i = 0; i < n; i++) {
        temp = current;
        current += previous;
        previous = temp;
        yield current;
    }
}

function getFibbonacciTerms(n) {

    var i = 0;
    var gen = fibbonacci(n);

    for (i = 0; i < n; i++) {
        console.log(gen.next().value);
    }
}

getFibbonacciTerms(300);
