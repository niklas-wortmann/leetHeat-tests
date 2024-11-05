/**
 * According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
 * @param arr
 */
export const compact = (arr: Array<any>): Array<any> => {
    return arr.filter(Boolean);
}

if (import.meta.vitest) {
    const {it, expect, describe} = import.meta.vitest

    describe("findHighestPrimeNumber", () => {
        it('handle falsy arrays', () => {
            expect(compact([])).toEqual([])
            expect(compact([""])).toEqual([])
        });

        it("handle actual arrays with falsy values", () => {
            expect(compact([1,0,false,null,undefined,"banana"])).toEqual([1,'banana'])
        })

        it("doesn't remove anything if there are no falsy values", () => {
            expect(compact([1, "banana", true])).toEqual([1,'banana', true])
        })
    });
}
