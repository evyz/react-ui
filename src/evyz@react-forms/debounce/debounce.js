export function someFunc(func, timeout) {
    let timer
    return (...args) => {
        clearTimeout(timer)
    }
}