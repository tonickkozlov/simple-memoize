const test = require('tape')

const memoize = require('./index.js')

test('fibonacci test', t => {
    const acc1 = []
    let fibonacci = n => {
        acc1.push(n)
        if (n <= 2) {
            return 1
        }

        return fibonacci(n-1) + fibonacci(n-2)
    }

    t.equal(fibonacci(6), 8)
    // not memoized, gives        f(6)
    //                  f(5)       +       f(4)
    //              f(4)  +  f(3)      f(3)  +  f(2)
    //          f(3)+f(2) f(2)+f(1) f(2)+f(1)
    //      f(2)+f(1)
    t.equal(acc1.length, 15)

    const acc2 = []
    const memoizedFibonacci = memoize(n => {
        acc2.push(n)
        if (n <= 2) {
            return 1
        }

        return memoizedFibonacci(n-1) + memoizedFibonacci(n-2)
    })
    t.equal(memoizedFibonacci(6), 8)
    // memoized, gives          f(6)
    //                  f(5)    +   f'4
    //          f(4)  +  f'3
    //      f(3) + f'2
    //  f(2) + f(1)
    t.equal(acc2.length, 6)


    t.end()
})
