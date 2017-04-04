'use strict'

const memoize = (func) => {
    const mem = {}
    return (arg) => {
        if (!mem[arg]) {
            console.log('called for ', arg)
            mem[arg] = func(arg)
        }
        return mem[arg]
    }
}

module.exports = memoize
