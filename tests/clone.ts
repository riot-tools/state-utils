import { expect } from 'chai';
import * as fc from 'fast-check';

import { clone } from '../lib';

const stub = {
    obj: {
        a: true,
        b: false
    },
    arr: [1,2,3],
    map: new Map([[1,2], [3,4]]),
    set: new Set([1, 2, 3, 4])
}


describe('Clones', function () {


    it('should clone any kind of value', function () {

        const predicate = (a) => {
            clone(a);
        };

        fc.assert(
            fc.property(
                fc.anything(),
                predicate
            ),
            { numRuns: 10000,verbose: true }
        );

        fc.assert(
            fc.property(
                fc.date(),
                predicate
            )
        );
    });

    it('clones different data types', () => {

        const obj = clone(stub.obj);
        expect(obj).not.to.equal(stub.obj);

        const arr = clone(stub.arr);
        expect(arr).not.to.equal(stub.arr);

        const map = clone(stub.map);
        expect(map).not.to.equal(stub.map);

        const set = clone(stub.set);
        expect(set).not.to.equal(stub.set);
    });

    it('clones nested objects', () => {

        const clonedStub = clone(stub);
        expect(clonedStub).not.to.equal(stub);
        expect(clonedStub.obj).not.to.equal(stub.obj);
        expect(clonedStub.arr).not.to.equal(stub.arr);
        expect(clonedStub.map).not.to.equal(stub.map);
        expect(clonedStub.set).not.to.equal(stub.set);
    });
});
