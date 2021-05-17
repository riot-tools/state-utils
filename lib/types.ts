
export type AnyConstructor = (
    ArrayConstructor |
    ObjectConstructor |
    MapConstructor |
    SetConstructor |
    DateConstructor |
    RegExpConstructor |
    FunctionConstructor
);

export interface DeepEqualFunc {
    (a: any, b: any): boolean;
}

export interface TypeCloneFunc {
    (a: any): any;
}

export type MapType = Map<
    AnyConstructor,
    DeepEqualFunc|TypeCloneFunc
>;

export type ConstructorCheckOptions = {
    constructor: any,
    treatAs?: AnyConstructor,
    deepEqualFunc?: DeepEqualFunc
};
