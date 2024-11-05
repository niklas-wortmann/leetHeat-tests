/**
 * This function takes a number n and shall return the highest prime number that is equal to or small than n
 * @param n
 */
export function findHighestPrimeNumber(n: number) {
    let highestPrimeNumber = -1;
    for(let i = n; i >= 0; i--){
        if(isPrime(n)){
            highestPrimeNumber = i;
            break;
        }
    }
    return highestPrimeNumber;
}

const isPrime = (n: number) => {
    for (let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

if (import.meta.vitest) {
    const { it, expect, describe} = import.meta.vitest

    describe("findHighestPrimeNumber", () => {
        it('find highest prime number that is smaller than 10', () => {
            expect(findHighestPrimeNumber(10)).toBe(7)
        });

        it('find highest prime number that is smaller than 1000', () => {
            expect(findHighestPrimeNumber(1000)).toBe(997)
        })

        it('handle 0 as it is not a prime number', () => {
            expect(findHighestPrimeNumber(0)).toBe(-1)
        })

        it('handle 1 as it is not a prime number', () => {
            expect(findHighestPrimeNumber(1)).toBe(-1)
        })

        it('2 as it is the smallest prime number', () => {
            expect(findHighestPrimeNumber(2)).toBe(2)
        })
    })
}
