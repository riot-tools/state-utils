
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
    (a: any, b: any, memo?: Map<any, boolean>): boolean;
}

export type MapType = Map<AnyConstructor, DeepEqualFunc>;

export type ConstructorCheckOptions = {
    constructor: any,
    treatAs?: AnyConstructor,
    deepEqualFunc?: DeepEqualFunc
};
