export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyExclude =
  | (string extends string | number ? never : string) // never
  | (number extends string | number ? never : number) // never
  | (DebugType extends string | number ? never : DebugType); // DebugType
type MyFunctionType = MyExclude;
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
