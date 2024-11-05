/**
 * Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
 * @param num
 */
export function numberOfDigits(num: number):number {
    return (''+Math.abs(num)).length;
}


if (import.meta.vitest) {
    const { it, expect, describe} = import.meta.vitest

    describe("numberOfDigits", () => {
        it('should work', () => {
            expect(numberOfDigits(13124), 5)
            expect(numberOfDigits(0), 1)
            expect(numberOfDigits(-12381428), 8)
            expect(numberOfDigits(12), 2)
            expect(numberOfDigits(42), 2)
            expect(numberOfDigits(1000), 4)
            expect(numberOfDigits(-2147483647), 10)
            expect(numberOfDigits(2147483647), 10)
        });
    })
}
