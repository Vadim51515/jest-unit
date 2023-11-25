const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    test('Только корректные значения', () => {
        expect(mapArrToStrings([50, 25])).toEqual(['50', '25'])
    })

    test('Только некорректные значения', () => {
        expect(mapArrToStrings(['50', undefined, null, ['123', 24],  NaN])).toEqual([])
    })

    test('И корректные и некорректные значения', () => {
        expect(mapArrToStrings([50, undefined, null, ['123', 24],  NaN, 25])).toEqual(['50', '25'])
    })

    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([])
    })

    test('Отрицание', () => {
        expect(mapArrToStrings([50, 25])).not.toEqual(['50', '25', '100'])
    })
})