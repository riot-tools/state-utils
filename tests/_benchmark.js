require('./_setup');

const Benchmark = require('benchmark');
const FastDeepEquals = require('fast-deep-equal');
const StateUtils = require('..');

const equals = [

    [null, null],
    [undefined, undefined],
    ['1', '1'],
    [1, 1],
    [true, true],
    [{}, {}],
    [[], []],
    [new Map, new Map],
    [new Set, new Set],
];

const notEquals = [

    [null, undefined],
    [true, false],
    ['1', '2'],
    [1, 2],
    [{ a: true }, { b: true }],
    [[1], [2]],
    [new Map([[1,1]]), new Map([[1,2]])],
    [new Set([1]), new Set([2])]
];

const nestedA = () => ({
    a: true,
    b: { c: true },
    d: [
        {
            e: [
                new Map([
                    ['abc', true],
                    ['def', true],
                ])
            ],
            f: new Set([1, 2, 3])
        },
        {
            g: null,
            h: new Set([2, 3, 4])
        }
    ],
    i: new Map([
        [1, new Date()],
        [2, new Date()]
    ]),
    j: new Date(),
    k: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]
});

const nestedB = () => ({
    a: true,
    b: { c: true },
    d: [
        {
            e: [
                new Map([
                    ['abc', true],
                    ['bcd', true],
                ])
            ],
            f: new Set([1, 2, 4])
        },
        {
            g: null,
            h: new Set([3, 3, 4])
        }
    ],
    i: new Map([
        [1, new Date()],
        [2, new Date()]
    ]),
    j: new Date(),
    k: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3]
});


const nestedEquals = [
    [nestedA(), nestedA()],
    [nestedB(), nestedB()],
];

const nestedNotEquals = [
    [nestedB(), nestedA()],
];


const runTests = (list, eqFn) => {

    for (const [a, b] of list) {
        eqFn(a, b);
    }
};

let suite = new Benchmark.Suite;

suite = suite
    .add('FastDeepEquals: simple equals', () => {
        runTests(equals, FastDeepEquals);
    })
    .add('FastDeepEquals: simple not equals', () => {
        runTests(notEquals, FastDeepEquals);
    })
    .add('StateUtils: simple equals', () => {
        runTests(equals, StateUtils.deepEqual);
    })
    .add('StateUtils: simple not equals', () => {
        runTests(notEquals, StateUtils.deepEqual);
    });


/** --------------- */


suite = suite
    .add('FastDeepEquals: nested equals', () => {
        runTests(nestedEquals, FastDeepEquals);
    })
    .add('FastDeepEquals: nested not equals', () => {
        runTests(nestedNotEquals, FastDeepEquals);
    })
    .add('StateUtils: nested equals', () => {
        runTests(nestedEquals, StateUtils.deepEqual);
    })
    .add('StateUtils: nested not equals', () => {
        runTests(nestedNotEquals, StateUtils.deepEqual);
    });

/** --------------- */


suite
    .on('cycle', (event) => console.log(String(event.target)))
    .run({ 'async': true });

