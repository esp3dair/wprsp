const ParkMiller = require('park-miller');
const ID = 0,
    WEIGHT = 1,
    START = 2,
    END = 3;

function* Range(list, seed) {
    const prng = new ParkMiller(seed);
    let range = 0;
    const calcRange = () => {
        range = 0;
        for (let item of list) {
            item[ START ] = range;
            range += item[ WEIGHT ];
            item[ END ] = range;
        }
    }

    while (list.length > 0) {
        calcRange();
        const n = prng.integerInRange(0, range - 1);
        const i = list.findIndex(x => x[ START ] <= n && n < x[ END ]);
        const e = list.splice(i, 1)[ 0 ];
        yield e[ ID ];
    }
}

function picker(amount, map, seed) {
    const ASC = (a, b) => a[ ID ] - b[ ID ];
    const list = Array.from(map).sort(ASC);
    const range = Range(list, seed);
    const result = new Set();

    while (result.size < amount) {
        result.add(range.next().value);
    }

    return result;
}

module.exports = picker;