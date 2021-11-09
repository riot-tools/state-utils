import { expect } from 'chai';

import { merge } from '../lib';

const stub = {
    a: {

        obj: {
            a: true,
            b: false
        },
        arr: [1,2,3],
        map: new Map([[1,2], [3,4]]),
        set: new Set([1, 2, 3, 4])
    },
    b: {

        obj: {
            b: true,
            c: false
        },
        arr: [4,5,6],
        map: new Map([[3,7], [4,5]]),
        set: new Set([4, 5, 6, 7])
    }
}


describe('Merges', function () {

    it('should merge arrays', () => {

        const val = merge(stub.a.arr, stub.b.arr);


        expect(val).to.contain.members(stub.a.arr);
        expect(val).to.contain.members(stub.b.arr);
    });

    it('should merge objects', () => {

        const val = merge(stub.a.obj, stub.b.obj);

        expect(val).to.contain({
            a: true,
            b: true,
            c: false
        });
    });

    it('should deep merge objects', () => {

        const objA: any = stub.a.obj;
        const objB: any = stub.b.obj;

        objA.d = { some: 'values' };
        objB.d = { other: 'values' };

        const val = merge(objA, objB);

        expect(val).to.include({
            a: true,
            b: true,
            c: false
        });

        expect(val.d).to.include({
            some: 'values',
            other: 'values'
        })
    });

    it('should merge maps', () => {

        const val = merge(stub.a.map, stub.b.map);

        const keys = [...val.keys()];

        expect(keys).to.contain.members([1, 3, 4])
        expect(val.get(1)).to.equal(2);
        expect(val.get(3)).to.equal(7);
        expect(val.get(4)).to.equal(5);
    });

    it('should deep merge maps', () => {

        const mapA = new Map([
            ['a', { test: true }],
            ['b', { tast: true }],
        ]);

        const mapB = new Map([
            ['a', { tots: true }],
            ['b', { tats: true }],
        ]);

        const val = merge(mapA, mapB);


        expect(val.get('a')).to.include({
            test: true,
            tots: true
        });

        expect(val.get('b')).to.include({
            tast: true,
            tats: true
        });
    });

    it('should merge sets', () => {

        const val = merge(stub.a.set, stub.b.set);

        const values = [...val];

        expect(values).to.contain.members([
            ...stub.a.set,
            ...stub.b.set
        ]);
    });

    it('should override if different types', () => {

        const objA = { test: [] };
        const objB = { test: {} };

        const mapA = new Map([['test', []]]);
        const mapB = new Map([['test', {}]]);

        const obj = merge(objA, objB);
        const map = merge(mapA, mapB);

        expect(obj.test.constructor).to.equal(Object);
        expect(map.get('test').constructor).to.equal(Object);
    });

    it('should override undefined or null', () => {

        const objSample = { test: [] };
        const mapSample = new Map([['test', []]]);

        const objUndefined = merge(objSample, { test: undefined });
        const mapUndefined = merge(mapSample, new Map([['test', undefined]]));

        expect(objUndefined.test).to.equal(undefined);
        expect(mapUndefined.get('test')).to.equal(undefined);

        const objNull = merge(objSample, { test: null });
        const mapNull = merge(mapSample, new Map([['test', null]]));

        expect(objNull.test).to.equal(null);
        expect(mapNull.get('test')).to.equal(null);
    });

    it('should allow overwriting of incoming arrays', () => {

        const arrSample = [1,2,3];
        const objArrSample = { test: [1,2,3] };
        const mapArrSample = new Map([['test', [1,2,3]]]);

        const options = { mergeArrays: false };

        const arrSampleResult = merge(
            arrSample,
            [4,5,6],
            options
        );

        const objArrSampleResult = merge(
            objArrSample,
            { test: [4,5,6] },
            options
        );

        const mapArrSampleResult = merge(
            mapArrSample,
            new Map([['test', [4,5,6]]]),
            options
        );

        expect(arrSampleResult).to.include.members([4,5,6]);
        expect(objArrSampleResult.test).to.include.members([4,5,6]);
        expect(mapArrSampleResult.get('test')).to.include.members([4,5,6]);

    });

    it('should allow overwriting of incoming sets', () => {

        const setSample = new Set([1,2,3]);
        const objSetSample = { test: new Set([1,2,3]) };
        const mapSetSample = new Map([['test', new Set([1,2,3])]]);

        const options = { mergeArrays: false };

        const setSampleResult = merge(
            setSample,
            new Set([4,5,6]),
            options
        );

        const objSetSampleResult = merge(
            objSetSample,
            { test: new Set([4,5,6])},
            options
        );

        const mapSetSampleResult = merge(
            mapSetSample,
            new Map([['test', new Set([4,5,6])]]),
            options
        );

        expect([...setSampleResult]).to.include.members([4,5,6]);
        expect([...objSetSampleResult.test]).to.include.members([4,5,6]);
        expect([...mapSetSampleResult.get('test')]).to.include.members([4,5,6]);

    });
});
