/**
 * Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
 *
 * Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
 * Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
 */
export function removeLeadingAndTrailingZeroes(num: string): string {
    return Number(num).toString();
}


if (import.meta.vitest) {
    const { it, expect, describe } = import.meta.vitest

    describe("removeLeadingAndTrailingZeroes", () => {
        it('should work', () => {
            expect(removeLeadingAndTrailingZeroes("230.000")).toEqual("230")
            expect(removeLeadingAndTrailingZeroes("00402")).toEqual("402")
            expect(removeLeadingAndTrailingZeroes("03.1400")).toEqual("3.14")
            expect(removeLeadingAndTrailingZeroes("30")).toEqual("30")
            expect(removeLeadingAndTrailingZeroes("00")).toEqual("0")
            expect(removeLeadingAndTrailingZeroes("0.000000")).toEqual("0")
            expect(removeLeadingAndTrailingZeroes("00.0001")).toEqual( "0.0001")
            expect(removeLeadingAndTrailingZeroes("10000")).toEqual("10000")
        });
    })
}
