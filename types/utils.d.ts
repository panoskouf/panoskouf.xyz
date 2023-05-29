type LiteralUnionOrString<T extends string> = T | Omit<T, T>;
