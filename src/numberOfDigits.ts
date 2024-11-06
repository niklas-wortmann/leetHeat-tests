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
            expect(numberOfDigits(13124)).toEqual(5)
            expect(numberOfDigits(0)).toEqual(1)
            expect(numberOfDigits(-12381428)).toEqual(8)
            expect(numberOfDigits(12)).toEqual(2)
            expect(numberOfDigits(42)).toEqual(2)
            expect(numberOfDigits(1000)).toEqual(4)
            expect(numberOfDigits(-2147483647)).toEqual(10)
            expect(numberOfDigits(2147483647)).toEqual(10)
        });
    })
}
