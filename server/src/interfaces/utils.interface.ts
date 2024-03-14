import { PrismaClient } from "@prisma/client"

type FilterNotStartingWith<Set, Neddle extends string> = Set extends
    | `${Neddle}${infer _X}`
    | symbol
    ? never
    : Set

type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
    x: infer I
) => void
    ? I
    : never;


type PrismaClientKeys = FilterNotStartingWith<keyof PrismaClient, "$">;

export type PrismaClientGeneric = UnionToIntersection<PrismaClient[PrismaClientKeys]>

export type DynamicParamsIdFinder = {
    searchKey: string,
    error: string,
    model: PrismaClientKeys
}   