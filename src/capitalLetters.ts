/**
 * Create a function that moves all capital letters to the front of a
 * word maintaining the same order within the casing set.
 *
 * ex.
 *  (AaBbCc -> ABCabc)
 *  (cCbBaA -> CBAcba)
 *
 * @param toSort
 */
export function capToFront(toSort: string) {
    const upperCases = [];
    const lowerCases = []
    for(let i = 0; i < toSort.length; i++) {
        if(toSort[i] === toSort[i].toUpperCase()) {
            upperCases.push(toSort[i]);
        } else {
            lowerCases.push(toSort[i]);
        }
    }
    return upperCases.join("")+lowerCases.join("")
}


if (import.meta.vitest) {
    const { it, expect, describe} = import.meta.vitest

    describe("capToFront", () => {
        it('hApPy', () => {
            expect(capToFront("hApPy")).toBe("APhpy")
        });

        it('moveMENT', () => {
            expect(capToFront("moveMENT")).toBe("MENTmove")
        })

        it('shOrtCAKE', () => {
            expect(capToFront("shOrtCAKE")).toBe("OCAKEshrt")
        })
    })
}
