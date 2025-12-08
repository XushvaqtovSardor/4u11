
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model TeacherGroup
 * 
 */
export type TeacherGroup = $Result.DefaultSelection<Prisma.$TeacherGroupPayload>
/**
 * Model TeacherGroupHistory
 * 
 */
export type TeacherGroupHistory = $Result.DefaultSelection<Prisma.$TeacherGroupHistoryPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentGroup
 * 
 */
export type StudentGroup = $Result.DefaultSelection<Prisma.$StudentGroupPayload>
/**
 * Model StudentGroupHistory
 * 
 */
export type StudentGroupHistory = $Result.DefaultSelection<Prisma.$StudentGroupHistoryPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const EventType: {
  ASSIGNED: 'ASSIGNED',
  REMOVED: 'REMOVED',
  LEFT: 'LEFT',
  TEMPORARY_ASSIGNMENT: 'TEMPORARY_ASSIGNMENT',
  VACATION: 'VACATION',
  ONLINE_ASSIGNMENT: 'ONLINE_ASSIGNMENT'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const CourseLevel: {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced'
};

export type CourseLevel = (typeof CourseLevel)[keyof typeof CourseLevel]


export const StaffRole: {
  Teacher: 'Teacher',
  SuperAdmin: 'SuperAdmin',
  Admin: 'Admin',
  Student: 'Student'
};

export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type CourseLevel = $Enums.CourseLevel

export const CourseLevel: typeof $Enums.CourseLevel

export type StaffRole = $Enums.StaffRole

export const StaffRole: typeof $Enums.StaffRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Branches
 * const branches = await prisma.branch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Branches
   * const branches = await prisma.branch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherGroup`: Exposes CRUD operations for the **TeacherGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherGroups
    * const teacherGroups = await prisma.teacherGroup.findMany()
    * ```
    */
  get teacherGroup(): Prisma.TeacherGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherGroupHistory`: Exposes CRUD operations for the **TeacherGroupHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherGroupHistories
    * const teacherGroupHistories = await prisma.teacherGroupHistory.findMany()
    * ```
    */
  get teacherGroupHistory(): Prisma.TeacherGroupHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentGroup`: Exposes CRUD operations for the **StudentGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentGroups
    * const studentGroups = await prisma.studentGroup.findMany()
    * ```
    */
  get studentGroup(): Prisma.StudentGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentGroupHistory`: Exposes CRUD operations for the **StudentGroupHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentGroupHistories
    * const studentGroupHistories = await prisma.studentGroupHistory.findMany()
    * ```
    */
  get studentGroupHistory(): Prisma.StudentGroupHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Branch: 'Branch',
    Room: 'Room',
    Course: 'Course',
    Group: 'Group',
    Teacher: 'Teacher',
    TeacherGroup: 'TeacherGroup',
    TeacherGroupHistory: 'TeacherGroupHistory',
    Student: 'Student',
    StudentGroup: 'StudentGroup',
    StudentGroupHistory: 'StudentGroupHistory',
    Staff: 'Staff',
    Permission: 'Permission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "branch" | "room" | "course" | "group" | "teacher" | "teacherGroup" | "teacherGroupHistory" | "student" | "studentGroup" | "studentGroupHistory" | "staff" | "permission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      TeacherGroup: {
        payload: Prisma.$TeacherGroupPayload<ExtArgs>
        fields: Prisma.TeacherGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>
          }
          findFirst: {
            args: Prisma.TeacherGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>
          }
          findMany: {
            args: Prisma.TeacherGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>[]
          }
          create: {
            args: Prisma.TeacherGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>
          }
          createMany: {
            args: Prisma.TeacherGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>[]
          }
          delete: {
            args: Prisma.TeacherGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>
          }
          update: {
            args: Prisma.TeacherGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>
          }
          deleteMany: {
            args: Prisma.TeacherGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>[]
          }
          upsert: {
            args: Prisma.TeacherGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupPayload>
          }
          aggregate: {
            args: Prisma.TeacherGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherGroup>
          }
          groupBy: {
            args: Prisma.TeacherGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherGroupCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupCountAggregateOutputType> | number
          }
        }
      }
      TeacherGroupHistory: {
        payload: Prisma.$TeacherGroupHistoryPayload<ExtArgs>
        fields: Prisma.TeacherGroupHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherGroupHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherGroupHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>
          }
          findFirst: {
            args: Prisma.TeacherGroupHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherGroupHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>
          }
          findMany: {
            args: Prisma.TeacherGroupHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>[]
          }
          create: {
            args: Prisma.TeacherGroupHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>
          }
          createMany: {
            args: Prisma.TeacherGroupHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherGroupHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>[]
          }
          delete: {
            args: Prisma.TeacherGroupHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>
          }
          update: {
            args: Prisma.TeacherGroupHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TeacherGroupHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherGroupHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherGroupHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TeacherGroupHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherGroupHistoryPayload>
          }
          aggregate: {
            args: Prisma.TeacherGroupHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherGroupHistory>
          }
          groupBy: {
            args: Prisma.TeacherGroupHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherGroupHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupHistoryCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentGroup: {
        payload: Prisma.$StudentGroupPayload<ExtArgs>
        fields: Prisma.StudentGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>
          }
          findFirst: {
            args: Prisma.StudentGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>
          }
          findMany: {
            args: Prisma.StudentGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>[]
          }
          create: {
            args: Prisma.StudentGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>
          }
          createMany: {
            args: Prisma.StudentGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>[]
          }
          delete: {
            args: Prisma.StudentGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>
          }
          update: {
            args: Prisma.StudentGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>
          }
          deleteMany: {
            args: Prisma.StudentGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>[]
          }
          upsert: {
            args: Prisma.StudentGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupPayload>
          }
          aggregate: {
            args: Prisma.StudentGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentGroup>
          }
          groupBy: {
            args: Prisma.StudentGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentGroupCountArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupCountAggregateOutputType> | number
          }
        }
      }
      StudentGroupHistory: {
        payload: Prisma.$StudentGroupHistoryPayload<ExtArgs>
        fields: Prisma.StudentGroupHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentGroupHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentGroupHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>
          }
          findFirst: {
            args: Prisma.StudentGroupHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentGroupHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>
          }
          findMany: {
            args: Prisma.StudentGroupHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>[]
          }
          create: {
            args: Prisma.StudentGroupHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>
          }
          createMany: {
            args: Prisma.StudentGroupHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentGroupHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>[]
          }
          delete: {
            args: Prisma.StudentGroupHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>
          }
          update: {
            args: Prisma.StudentGroupHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StudentGroupHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentGroupHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentGroupHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>[]
          }
          upsert: {
            args: Prisma.StudentGroupHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGroupHistoryPayload>
          }
          aggregate: {
            args: Prisma.StudentGroupHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentGroupHistory>
          }
          groupBy: {
            args: Prisma.StudentGroupHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentGroupHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupHistoryCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    branch?: BranchOmit
    room?: RoomOmit
    course?: CourseOmit
    group?: GroupOmit
    teacher?: TeacherOmit
    teacherGroup?: TeacherGroupOmit
    teacherGroupHistory?: TeacherGroupHistoryOmit
    student?: StudentOmit
    studentGroup?: StudentGroupOmit
    studentGroupHistory?: StudentGroupHistoryOmit
    staff?: StaffOmit
    permission?: PermissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    rooms: number
    teachers: number
    courses: number
    groups: number
    students: number
    staff: number
    teacherGroups: number
    studentGroups: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | BranchCountOutputTypeCountRoomsArgs
    teachers?: boolean | BranchCountOutputTypeCountTeachersArgs
    courses?: boolean | BranchCountOutputTypeCountCoursesArgs
    groups?: boolean | BranchCountOutputTypeCountGroupsArgs
    students?: boolean | BranchCountOutputTypeCountStudentsArgs
    staff?: boolean | BranchCountOutputTypeCountStaffArgs
    teacherGroups?: boolean | BranchCountOutputTypeCountTeacherGroupsArgs
    studentGroups?: boolean | BranchCountOutputTypeCountStudentGroupsArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountTeacherGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStudentGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    groups: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | RoomCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    groups: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | CourseCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    teachers: number
    students: number
    teacherGroupHistory: number
    studentGroupHistory: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | GroupCountOutputTypeCountTeachersArgs
    students?: boolean | GroupCountOutputTypeCountStudentsArgs
    teacherGroupHistory?: boolean | GroupCountOutputTypeCountTeacherGroupHistoryArgs
    studentGroupHistory?: boolean | GroupCountOutputTypeCountStudentGroupHistoryArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTeacherGroupHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupHistoryWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentGroupHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupHistoryWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    teacherGroups: number
    teacherGroupHistory: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherGroups?: boolean | TeacherCountOutputTypeCountTeacherGroupsArgs
    teacherGroupHistory?: boolean | TeacherCountOutputTypeCountTeacherGroupHistoryArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountTeacherGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountTeacherGroupHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupHistoryWhereInput
  }


  /**
   * Count Type TeacherGroupCountOutputType
   */

  export type TeacherGroupCountOutputType = {
    history: number
  }

  export type TeacherGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | TeacherGroupCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * TeacherGroupCountOutputType without action
   */
  export type TeacherGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupCountOutputType
     */
    select?: TeacherGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherGroupCountOutputType without action
   */
  export type TeacherGroupCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupHistoryWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    groups: number
    history: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | StudentCountOutputTypeCountGroupsArgs
    history?: boolean | StudentCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupHistoryWhereInput
  }


  /**
   * Count Type StudentGroupCountOutputType
   */

  export type StudentGroupCountOutputType = {
    history: number
  }

  export type StudentGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | StudentGroupCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * StudentGroupCountOutputType without action
   */
  export type StudentGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupCountOutputType
     */
    select?: StudentGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentGroupCountOutputType without action
   */
  export type StudentGroupCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupHistoryWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    permissions: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | StaffCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    id: number | null
  }

  export type BranchSumAggregateOutputType = {
    id: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    address: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    address: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    address: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    id?: true
  }

  export type BranchSumAggregateInputType = {
    id?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: number
    name: string
    logo: string | null
    address: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | Branch$roomsArgs<ExtArgs>
    teachers?: boolean | Branch$teachersArgs<ExtArgs>
    courses?: boolean | Branch$coursesArgs<ExtArgs>
    groups?: boolean | Branch$groupsArgs<ExtArgs>
    students?: boolean | Branch$studentsArgs<ExtArgs>
    staff?: boolean | Branch$staffArgs<ExtArgs>
    teacherGroups?: boolean | Branch$teacherGroupsArgs<ExtArgs>
    studentGroups?: boolean | Branch$studentGroupsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "address" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Branch$roomsArgs<ExtArgs>
    teachers?: boolean | Branch$teachersArgs<ExtArgs>
    courses?: boolean | Branch$coursesArgs<ExtArgs>
    groups?: boolean | Branch$groupsArgs<ExtArgs>
    students?: boolean | Branch$studentsArgs<ExtArgs>
    staff?: boolean | Branch$staffArgs<ExtArgs>
    teacherGroups?: boolean | Branch$teacherGroupsArgs<ExtArgs>
    studentGroups?: boolean | Branch$studentGroupsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      teachers: Prisma.$TeacherPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
      teacherGroups: Prisma.$TeacherGroupPayload<ExtArgs>[]
      studentGroups: Prisma.$StudentGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logo: string | null
      address: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Branch$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Branch$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Branch$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Branch$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Branch$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends Branch$staffArgs<ExtArgs> = {}>(args?: Subset<T, Branch$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherGroups<T extends Branch$teacherGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$teacherGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentGroups<T extends Branch$studentGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$studentGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'Int'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly logo: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly status: FieldRef<"Branch", 'Status'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.rooms
   */
  export type Branch$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Branch.teachers
   */
  export type Branch$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Branch.courses
   */
  export type Branch$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Branch.groups
   */
  export type Branch$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Branch.students
   */
  export type Branch$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Branch.staff
   */
  export type Branch$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Branch.teacherGroups
   */
  export type Branch$teacherGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    where?: TeacherGroupWhereInput
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    cursor?: TeacherGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherGroupScalarFieldEnum | TeacherGroupScalarFieldEnum[]
  }

  /**
   * Branch.studentGroups
   */
  export type Branch$studentGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    where?: StudentGroupWhereInput
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    cursor?: StudentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGroupScalarFieldEnum | StudentGroupScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    branchId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    branchId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    branchId: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    capacity?: true
    branchId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    capacity?: true
    branchId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    name: string
    capacity: number
    branchId: number
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    groups?: boolean | Room$groupsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "branchId" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    groups?: boolean | Room$groupsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      capacity: number
      branchId: number
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups<T extends Room$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Room$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly branchId: FieldRef<"Room", 'Int'>
    readonly status: FieldRef<"Room", 'Status'>
    readonly deletedAt: FieldRef<"Room", 'DateTime'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.groups
   */
  export type Room$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    durationMonth: number | null
    durationHours: number | null
    branchId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    durationMonth: number | null
    durationHours: number | null
    branchId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    durationMonth: number | null
    durationHours: number | null
    level: $Enums.CourseLevel | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    durationMonth: number | null
    durationHours: number | null
    level: $Enums.CourseLevel | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    price: number
    durationMonth: number
    durationHours: number
    level: number
    branchId: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    price?: true
    durationMonth?: true
    durationHours?: true
    branchId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    price?: true
    durationMonth?: true
    durationHours?: true
    branchId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationMonth?: true
    durationHours?: true
    level?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationMonth?: true
    durationHours?: true
    level?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    durationMonth?: true
    durationHours?: true
    level?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    branchId: number
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationMonth?: boolean
    durationHours?: boolean
    level?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    groups?: boolean | Course$groupsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationMonth?: boolean
    durationHours?: boolean
    level?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    durationMonth?: boolean
    durationHours?: boolean
    level?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    durationMonth?: boolean
    durationHours?: boolean
    level?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "durationMonth" | "durationHours" | "level" | "branchId" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    groups?: boolean | Course$groupsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      durationMonth: number
      durationHours: number
      level: $Enums.CourseLevel
      branchId: number
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups<T extends Course$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Course$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Decimal'>
    readonly durationMonth: FieldRef<"Course", 'Int'>
    readonly durationHours: FieldRef<"Course", 'Float'>
    readonly level: FieldRef<"Course", 'CourseLevel'>
    readonly branchId: FieldRef<"Course", 'Int'>
    readonly status: FieldRef<"Course", 'Status'>
    readonly deletedAt: FieldRef<"Course", 'DateTime'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.groups
   */
  export type Course$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
    roomId: number | null
    courseId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    branchId: number | null
    roomId: number | null
    courseId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    branchId: number | null
    roomId: number | null
    courseId: number | null
    startDate: Date | null
    startLesson: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    branchId: number | null
    roomId: number | null
    courseId: number | null
    startDate: Date | null
    startLesson: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    branchId: number
    roomId: number
    courseId: number
    startDate: number
    startLesson: number
    endDate: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    branchId?: true
    roomId?: true
    courseId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    branchId?: true
    roomId?: true
    courseId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    roomId?: true
    courseId?: true
    startDate?: true
    startLesson?: true
    endDate?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    roomId?: true
    courseId?: true
    startDate?: true
    startLesson?: true
    endDate?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    roomId?: true
    courseId?: true
    startDate?: true
    startLesson?: true
    endDate?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date
    startLesson: Date
    endDate: Date
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    roomId?: boolean
    courseId?: boolean
    startDate?: boolean
    startLesson?: boolean
    endDate?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    teachers?: boolean | Group$teachersArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    teacherGroupHistory?: boolean | Group$teacherGroupHistoryArgs<ExtArgs>
    studentGroupHistory?: boolean | Group$studentGroupHistoryArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    roomId?: boolean
    courseId?: boolean
    startDate?: boolean
    startLesson?: boolean
    endDate?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    roomId?: boolean
    courseId?: boolean
    startDate?: boolean
    startLesson?: boolean
    endDate?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    branchId?: boolean
    roomId?: boolean
    courseId?: boolean
    startDate?: boolean
    startLesson?: boolean
    endDate?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "branchId" | "roomId" | "courseId" | "startDate" | "startLesson" | "endDate" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    teachers?: boolean | Group$teachersArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    teacherGroupHistory?: boolean | Group$teacherGroupHistoryArgs<ExtArgs>
    studentGroupHistory?: boolean | Group$studentGroupHistoryArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      teachers: Prisma.$TeacherGroupPayload<ExtArgs>[]
      students: Prisma.$StudentGroupPayload<ExtArgs>[]
      teacherGroupHistory: Prisma.$TeacherGroupHistoryPayload<ExtArgs>[]
      studentGroupHistory: Prisma.$StudentGroupHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      branchId: number
      roomId: number
      courseId: number
      startDate: Date
      startLesson: Date
      endDate: Date
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teachers<T extends Group$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Group$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Group$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherGroupHistory<T extends Group$teacherGroupHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Group$teacherGroupHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentGroupHistory<T extends Group$studentGroupHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentGroupHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly branchId: FieldRef<"Group", 'Int'>
    readonly roomId: FieldRef<"Group", 'Int'>
    readonly courseId: FieldRef<"Group", 'Int'>
    readonly startDate: FieldRef<"Group", 'DateTime'>
    readonly startLesson: FieldRef<"Group", 'DateTime'>
    readonly endDate: FieldRef<"Group", 'DateTime'>
    readonly status: FieldRef<"Group", 'Status'>
    readonly deletedAt: FieldRef<"Group", 'DateTime'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.teachers
   */
  export type Group$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    where?: TeacherGroupWhereInput
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    cursor?: TeacherGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherGroupScalarFieldEnum | TeacherGroupScalarFieldEnum[]
  }

  /**
   * Group.students
   */
  export type Group$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    where?: StudentGroupWhereInput
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    cursor?: StudentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGroupScalarFieldEnum | StudentGroupScalarFieldEnum[]
  }

  /**
   * Group.teacherGroupHistory
   */
  export type Group$teacherGroupHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    where?: TeacherGroupHistoryWhereInput
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    cursor?: TeacherGroupHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherGroupHistoryScalarFieldEnum | TeacherGroupHistoryScalarFieldEnum[]
  }

  /**
   * Group.studentGroupHistory
   */
  export type Group$studentGroupHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    where?: StudentGroupHistoryWhereInput
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    cursor?: StudentGroupHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGroupHistoryScalarFieldEnum | StudentGroupHistoryScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    photo: string | null
    email: string | null
    password: string | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    photo: string | null
    email: string | null
    password: string | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    fullName: number
    photo: number
    email: number
    password: number
    branchId: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    fullName?: true
    photo?: true
    email?: true
    password?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    fullName?: true
    photo?: true
    email?: true
    password?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    fullName?: true
    photo?: true
    email?: true
    password?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    fullName: string
    photo: string | null
    email: string
    password: string
    branchId: number
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    password?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    teacherGroups?: boolean | Teacher$teacherGroupsArgs<ExtArgs>
    teacherGroupHistory?: boolean | Teacher$teacherGroupHistoryArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    password?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    password?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    password?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "photo" | "email" | "password" | "branchId" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    teacherGroups?: boolean | Teacher$teacherGroupsArgs<ExtArgs>
    teacherGroupHistory?: boolean | Teacher$teacherGroupHistoryArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      teacherGroups: Prisma.$TeacherGroupPayload<ExtArgs>[]
      teacherGroupHistory: Prisma.$TeacherGroupHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      photo: string | null
      email: string
      password: string
      branchId: number
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacherGroups<T extends Teacher$teacherGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$teacherGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherGroupHistory<T extends Teacher$teacherGroupHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$teacherGroupHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly fullName: FieldRef<"Teacher", 'String'>
    readonly photo: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
    readonly branchId: FieldRef<"Teacher", 'Int'>
    readonly status: FieldRef<"Teacher", 'Status'>
    readonly deletedAt: FieldRef<"Teacher", 'DateTime'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.teacherGroups
   */
  export type Teacher$teacherGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    where?: TeacherGroupWhereInput
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    cursor?: TeacherGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherGroupScalarFieldEnum | TeacherGroupScalarFieldEnum[]
  }

  /**
   * Teacher.teacherGroupHistory
   */
  export type Teacher$teacherGroupHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    where?: TeacherGroupHistoryWhereInput
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    cursor?: TeacherGroupHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherGroupHistoryScalarFieldEnum | TeacherGroupHistoryScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model TeacherGroup
   */

  export type AggregateTeacherGroup = {
    _count: TeacherGroupCountAggregateOutputType | null
    _avg: TeacherGroupAvgAggregateOutputType | null
    _sum: TeacherGroupSumAggregateOutputType | null
    _min: TeacherGroupMinAggregateOutputType | null
    _max: TeacherGroupMaxAggregateOutputType | null
  }

  export type TeacherGroupAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    branchId: number | null
    groupId: number | null
  }

  export type TeacherGroupSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    branchId: number | null
    groupId: number | null
  }

  export type TeacherGroupMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    branchId: number | null
    groupId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherGroupMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    branchId: number | null
    groupId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherGroupCountAggregateOutputType = {
    id: number
    teacherId: number
    branchId: number
    groupId: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherGroupAvgAggregateInputType = {
    id?: true
    teacherId?: true
    branchId?: true
    groupId?: true
  }

  export type TeacherGroupSumAggregateInputType = {
    id?: true
    teacherId?: true
    branchId?: true
    groupId?: true
  }

  export type TeacherGroupMinAggregateInputType = {
    id?: true
    teacherId?: true
    branchId?: true
    groupId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherGroupMaxAggregateInputType = {
    id?: true
    teacherId?: true
    branchId?: true
    groupId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherGroupCountAggregateInputType = {
    id?: true
    teacherId?: true
    branchId?: true
    groupId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherGroup to aggregate.
     */
    where?: TeacherGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroups to fetch.
     */
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherGroups
    **/
    _count?: true | TeacherGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherGroupMaxAggregateInputType
  }

  export type GetTeacherGroupAggregateType<T extends TeacherGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherGroup[P]>
      : GetScalarType<T[P], AggregateTeacherGroup[P]>
  }




  export type TeacherGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupWhereInput
    orderBy?: TeacherGroupOrderByWithAggregationInput | TeacherGroupOrderByWithAggregationInput[]
    by: TeacherGroupScalarFieldEnum[] | TeacherGroupScalarFieldEnum
    having?: TeacherGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherGroupCountAggregateInputType | true
    _avg?: TeacherGroupAvgAggregateInputType
    _sum?: TeacherGroupSumAggregateInputType
    _min?: TeacherGroupMinAggregateInputType
    _max?: TeacherGroupMaxAggregateInputType
  }

  export type TeacherGroupGroupByOutputType = {
    id: number
    teacherId: number
    branchId: number
    groupId: number
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TeacherGroupCountAggregateOutputType | null
    _avg: TeacherGroupAvgAggregateOutputType | null
    _sum: TeacherGroupSumAggregateOutputType | null
    _min: TeacherGroupMinAggregateOutputType | null
    _max: TeacherGroupMaxAggregateOutputType | null
  }

  type GetTeacherGroupGroupByPayload<T extends TeacherGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupGroupByOutputType[P]>
        }
      >
    >


  export type TeacherGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    branchId?: boolean
    groupId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    history?: boolean | TeacherGroup$historyArgs<ExtArgs>
    _count?: boolean | TeacherGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherGroup"]>

  export type TeacherGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    branchId?: boolean
    groupId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherGroup"]>

  export type TeacherGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    branchId?: boolean
    groupId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherGroup"]>

  export type TeacherGroupSelectScalar = {
    id?: boolean
    teacherId?: boolean
    branchId?: boolean
    groupId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "branchId" | "groupId" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherGroup"]>
  export type TeacherGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    history?: boolean | TeacherGroup$historyArgs<ExtArgs>
    _count?: boolean | TeacherGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type TeacherGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $TeacherGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherGroup"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      history: Prisma.$TeacherGroupHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      branchId: number
      groupId: number
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacherGroup"]>
    composites: {}
  }

  type TeacherGroupGetPayload<S extends boolean | null | undefined | TeacherGroupDefaultArgs> = $Result.GetResult<Prisma.$TeacherGroupPayload, S>

  type TeacherGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherGroupCountAggregateInputType | true
    }

  export interface TeacherGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherGroup'], meta: { name: 'TeacherGroup' } }
    /**
     * Find zero or one TeacherGroup that matches the filter.
     * @param {TeacherGroupFindUniqueArgs} args - Arguments to find a TeacherGroup
     * @example
     * // Get one TeacherGroup
     * const teacherGroup = await prisma.teacherGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherGroupFindUniqueArgs>(args: SelectSubset<T, TeacherGroupFindUniqueArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherGroupFindUniqueOrThrowArgs} args - Arguments to find a TeacherGroup
     * @example
     * // Get one TeacherGroup
     * const teacherGroup = await prisma.teacherGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupFindFirstArgs} args - Arguments to find a TeacherGroup
     * @example
     * // Get one TeacherGroup
     * const teacherGroup = await prisma.teacherGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherGroupFindFirstArgs>(args?: SelectSubset<T, TeacherGroupFindFirstArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupFindFirstOrThrowArgs} args - Arguments to find a TeacherGroup
     * @example
     * // Get one TeacherGroup
     * const teacherGroup = await prisma.teacherGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherGroups
     * const teacherGroups = await prisma.teacherGroup.findMany()
     * 
     * // Get first 10 TeacherGroups
     * const teacherGroups = await prisma.teacherGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherGroupWithIdOnly = await prisma.teacherGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherGroupFindManyArgs>(args?: SelectSubset<T, TeacherGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherGroup.
     * @param {TeacherGroupCreateArgs} args - Arguments to create a TeacherGroup.
     * @example
     * // Create one TeacherGroup
     * const TeacherGroup = await prisma.teacherGroup.create({
     *   data: {
     *     // ... data to create a TeacherGroup
     *   }
     * })
     * 
     */
    create<T extends TeacherGroupCreateArgs>(args: SelectSubset<T, TeacherGroupCreateArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherGroups.
     * @param {TeacherGroupCreateManyArgs} args - Arguments to create many TeacherGroups.
     * @example
     * // Create many TeacherGroups
     * const teacherGroup = await prisma.teacherGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherGroupCreateManyArgs>(args?: SelectSubset<T, TeacherGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherGroups and returns the data saved in the database.
     * @param {TeacherGroupCreateManyAndReturnArgs} args - Arguments to create many TeacherGroups.
     * @example
     * // Create many TeacherGroups
     * const teacherGroup = await prisma.teacherGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherGroups and only return the `id`
     * const teacherGroupWithIdOnly = await prisma.teacherGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherGroup.
     * @param {TeacherGroupDeleteArgs} args - Arguments to delete one TeacherGroup.
     * @example
     * // Delete one TeacherGroup
     * const TeacherGroup = await prisma.teacherGroup.delete({
     *   where: {
     *     // ... filter to delete one TeacherGroup
     *   }
     * })
     * 
     */
    delete<T extends TeacherGroupDeleteArgs>(args: SelectSubset<T, TeacherGroupDeleteArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherGroup.
     * @param {TeacherGroupUpdateArgs} args - Arguments to update one TeacherGroup.
     * @example
     * // Update one TeacherGroup
     * const teacherGroup = await prisma.teacherGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherGroupUpdateArgs>(args: SelectSubset<T, TeacherGroupUpdateArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherGroups.
     * @param {TeacherGroupDeleteManyArgs} args - Arguments to filter TeacherGroups to delete.
     * @example
     * // Delete a few TeacherGroups
     * const { count } = await prisma.teacherGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherGroupDeleteManyArgs>(args?: SelectSubset<T, TeacherGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherGroups
     * const teacherGroup = await prisma.teacherGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherGroupUpdateManyArgs>(args: SelectSubset<T, TeacherGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherGroups and returns the data updated in the database.
     * @param {TeacherGroupUpdateManyAndReturnArgs} args - Arguments to update many TeacherGroups.
     * @example
     * // Update many TeacherGroups
     * const teacherGroup = await prisma.teacherGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherGroups and only return the `id`
     * const teacherGroupWithIdOnly = await prisma.teacherGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherGroup.
     * @param {TeacherGroupUpsertArgs} args - Arguments to update or create a TeacherGroup.
     * @example
     * // Update or create a TeacherGroup
     * const teacherGroup = await prisma.teacherGroup.upsert({
     *   create: {
     *     // ... data to create a TeacherGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherGroup we want to update
     *   }
     * })
     */
    upsert<T extends TeacherGroupUpsertArgs>(args: SelectSubset<T, TeacherGroupUpsertArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupCountArgs} args - Arguments to filter TeacherGroups to count.
     * @example
     * // Count the number of TeacherGroups
     * const count = await prisma.teacherGroup.count({
     *   where: {
     *     // ... the filter for the TeacherGroups we want to count
     *   }
     * })
    **/
    count<T extends TeacherGroupCountArgs>(
      args?: Subset<T, TeacherGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherGroupAggregateArgs>(args: Subset<T, TeacherGroupAggregateArgs>): Prisma.PrismaPromise<GetTeacherGroupAggregateType<T>>

    /**
     * Group by TeacherGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherGroup model
   */
  readonly fields: TeacherGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends TeacherGroup$historyArgs<ExtArgs> = {}>(args?: Subset<T, TeacherGroup$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherGroup model
   */
  interface TeacherGroupFieldRefs {
    readonly id: FieldRef<"TeacherGroup", 'Int'>
    readonly teacherId: FieldRef<"TeacherGroup", 'Int'>
    readonly branchId: FieldRef<"TeacherGroup", 'Int'>
    readonly groupId: FieldRef<"TeacherGroup", 'Int'>
    readonly status: FieldRef<"TeacherGroup", 'Status'>
    readonly deletedAt: FieldRef<"TeacherGroup", 'DateTime'>
    readonly createdAt: FieldRef<"TeacherGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"TeacherGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherGroup findUnique
   */
  export type TeacherGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroup to fetch.
     */
    where: TeacherGroupWhereUniqueInput
  }

  /**
   * TeacherGroup findUniqueOrThrow
   */
  export type TeacherGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroup to fetch.
     */
    where: TeacherGroupWhereUniqueInput
  }

  /**
   * TeacherGroup findFirst
   */
  export type TeacherGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroup to fetch.
     */
    where?: TeacherGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroups to fetch.
     */
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherGroups.
     */
    cursor?: TeacherGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherGroups.
     */
    distinct?: TeacherGroupScalarFieldEnum | TeacherGroupScalarFieldEnum[]
  }

  /**
   * TeacherGroup findFirstOrThrow
   */
  export type TeacherGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroup to fetch.
     */
    where?: TeacherGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroups to fetch.
     */
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherGroups.
     */
    cursor?: TeacherGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherGroups.
     */
    distinct?: TeacherGroupScalarFieldEnum | TeacherGroupScalarFieldEnum[]
  }

  /**
   * TeacherGroup findMany
   */
  export type TeacherGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroups to fetch.
     */
    where?: TeacherGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroups to fetch.
     */
    orderBy?: TeacherGroupOrderByWithRelationInput | TeacherGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherGroups.
     */
    cursor?: TeacherGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroups.
     */
    skip?: number
    distinct?: TeacherGroupScalarFieldEnum | TeacherGroupScalarFieldEnum[]
  }

  /**
   * TeacherGroup create
   */
  export type TeacherGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherGroup.
     */
    data: XOR<TeacherGroupCreateInput, TeacherGroupUncheckedCreateInput>
  }

  /**
   * TeacherGroup createMany
   */
  export type TeacherGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherGroups.
     */
    data: TeacherGroupCreateManyInput | TeacherGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherGroup createManyAndReturn
   */
  export type TeacherGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherGroups.
     */
    data: TeacherGroupCreateManyInput | TeacherGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherGroup update
   */
  export type TeacherGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherGroup.
     */
    data: XOR<TeacherGroupUpdateInput, TeacherGroupUncheckedUpdateInput>
    /**
     * Choose, which TeacherGroup to update.
     */
    where: TeacherGroupWhereUniqueInput
  }

  /**
   * TeacherGroup updateMany
   */
  export type TeacherGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherGroups.
     */
    data: XOR<TeacherGroupUpdateManyMutationInput, TeacherGroupUncheckedUpdateManyInput>
    /**
     * Filter which TeacherGroups to update
     */
    where?: TeacherGroupWhereInput
    /**
     * Limit how many TeacherGroups to update.
     */
    limit?: number
  }

  /**
   * TeacherGroup updateManyAndReturn
   */
  export type TeacherGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * The data used to update TeacherGroups.
     */
    data: XOR<TeacherGroupUpdateManyMutationInput, TeacherGroupUncheckedUpdateManyInput>
    /**
     * Filter which TeacherGroups to update
     */
    where?: TeacherGroupWhereInput
    /**
     * Limit how many TeacherGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherGroup upsert
   */
  export type TeacherGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherGroup to update in case it exists.
     */
    where: TeacherGroupWhereUniqueInput
    /**
     * In case the TeacherGroup found by the `where` argument doesn't exist, create a new TeacherGroup with this data.
     */
    create: XOR<TeacherGroupCreateInput, TeacherGroupUncheckedCreateInput>
    /**
     * In case the TeacherGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherGroupUpdateInput, TeacherGroupUncheckedUpdateInput>
  }

  /**
   * TeacherGroup delete
   */
  export type TeacherGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
    /**
     * Filter which TeacherGroup to delete.
     */
    where: TeacherGroupWhereUniqueInput
  }

  /**
   * TeacherGroup deleteMany
   */
  export type TeacherGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherGroups to delete
     */
    where?: TeacherGroupWhereInput
    /**
     * Limit how many TeacherGroups to delete.
     */
    limit?: number
  }

  /**
   * TeacherGroup.history
   */
  export type TeacherGroup$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    where?: TeacherGroupHistoryWhereInput
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    cursor?: TeacherGroupHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherGroupHistoryScalarFieldEnum | TeacherGroupHistoryScalarFieldEnum[]
  }

  /**
   * TeacherGroup without action
   */
  export type TeacherGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroup
     */
    select?: TeacherGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroup
     */
    omit?: TeacherGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupInclude<ExtArgs> | null
  }


  /**
   * Model TeacherGroupHistory
   */

  export type AggregateTeacherGroupHistory = {
    _count: TeacherGroupHistoryCountAggregateOutputType | null
    _avg: TeacherGroupHistoryAvgAggregateOutputType | null
    _sum: TeacherGroupHistorySumAggregateOutputType | null
    _min: TeacherGroupHistoryMinAggregateOutputType | null
    _max: TeacherGroupHistoryMaxAggregateOutputType | null
  }

  export type TeacherGroupHistoryAvgAggregateOutputType = {
    id: number | null
    teacherGroupId: number | null
    teacherId: number | null
    groupId: number | null
  }

  export type TeacherGroupHistorySumAggregateOutputType = {
    id: number | null
    teacherGroupId: number | null
    teacherId: number | null
    groupId: number | null
  }

  export type TeacherGroupHistoryMinAggregateOutputType = {
    id: number | null
    teacherGroupId: number | null
    teacherId: number | null
    groupId: number | null
    event: $Enums.EventType | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type TeacherGroupHistoryMaxAggregateOutputType = {
    id: number | null
    teacherGroupId: number | null
    teacherId: number | null
    groupId: number | null
    event: $Enums.EventType | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type TeacherGroupHistoryCountAggregateOutputType = {
    id: number
    teacherGroupId: number
    teacherId: number
    groupId: number
    event: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type TeacherGroupHistoryAvgAggregateInputType = {
    id?: true
    teacherGroupId?: true
    teacherId?: true
    groupId?: true
  }

  export type TeacherGroupHistorySumAggregateInputType = {
    id?: true
    teacherGroupId?: true
    teacherId?: true
    groupId?: true
  }

  export type TeacherGroupHistoryMinAggregateInputType = {
    id?: true
    teacherGroupId?: true
    teacherId?: true
    groupId?: true
    event?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type TeacherGroupHistoryMaxAggregateInputType = {
    id?: true
    teacherGroupId?: true
    teacherId?: true
    groupId?: true
    event?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type TeacherGroupHistoryCountAggregateInputType = {
    id?: true
    teacherGroupId?: true
    teacherId?: true
    groupId?: true
    event?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherGroupHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherGroupHistory to aggregate.
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroupHistories to fetch.
     */
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroupHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherGroupHistories
    **/
    _count?: true | TeacherGroupHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherGroupHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherGroupHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherGroupHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherGroupHistoryMaxAggregateInputType
  }

  export type GetTeacherGroupHistoryAggregateType<T extends TeacherGroupHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherGroupHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherGroupHistory[P]>
      : GetScalarType<T[P], AggregateTeacherGroupHistory[P]>
  }




  export type TeacherGroupHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherGroupHistoryWhereInput
    orderBy?: TeacherGroupHistoryOrderByWithAggregationInput | TeacherGroupHistoryOrderByWithAggregationInput[]
    by: TeacherGroupHistoryScalarFieldEnum[] | TeacherGroupHistoryScalarFieldEnum
    having?: TeacherGroupHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherGroupHistoryCountAggregateInputType | true
    _avg?: TeacherGroupHistoryAvgAggregateInputType
    _sum?: TeacherGroupHistorySumAggregateInputType
    _min?: TeacherGroupHistoryMinAggregateInputType
    _max?: TeacherGroupHistoryMaxAggregateInputType
  }

  export type TeacherGroupHistoryGroupByOutputType = {
    id: number
    teacherGroupId: number
    teacherId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date
    endDate: Date | null
    createdAt: Date
    _count: TeacherGroupHistoryCountAggregateOutputType | null
    _avg: TeacherGroupHistoryAvgAggregateOutputType | null
    _sum: TeacherGroupHistorySumAggregateOutputType | null
    _min: TeacherGroupHistoryMinAggregateOutputType | null
    _max: TeacherGroupHistoryMaxAggregateOutputType | null
  }

  type GetTeacherGroupHistoryGroupByPayload<T extends TeacherGroupHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TeacherGroupHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherGroupId?: boolean
    teacherId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    teacherGroup?: boolean | TeacherGroupDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherGroupHistory"]>

  export type TeacherGroupHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherGroupId?: boolean
    teacherId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    teacherGroup?: boolean | TeacherGroupDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherGroupHistory"]>

  export type TeacherGroupHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherGroupId?: boolean
    teacherId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    teacherGroup?: boolean | TeacherGroupDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherGroupHistory"]>

  export type TeacherGroupHistorySelectScalar = {
    id?: boolean
    teacherGroupId?: boolean
    teacherId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type TeacherGroupHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherGroupId" | "teacherId" | "groupId" | "event" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["teacherGroupHistory"]>
  export type TeacherGroupHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherGroup?: boolean | TeacherGroupDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type TeacherGroupHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherGroup?: boolean | TeacherGroupDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type TeacherGroupHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherGroup?: boolean | TeacherGroupDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $TeacherGroupHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherGroupHistory"
    objects: {
      teacherGroup: Prisma.$TeacherGroupPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherGroupId: number
      teacherId: number
      groupId: number
      event: $Enums.EventType
      startDate: Date
      endDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["teacherGroupHistory"]>
    composites: {}
  }

  type TeacherGroupHistoryGetPayload<S extends boolean | null | undefined | TeacherGroupHistoryDefaultArgs> = $Result.GetResult<Prisma.$TeacherGroupHistoryPayload, S>

  type TeacherGroupHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherGroupHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherGroupHistoryCountAggregateInputType | true
    }

  export interface TeacherGroupHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherGroupHistory'], meta: { name: 'TeacherGroupHistory' } }
    /**
     * Find zero or one TeacherGroupHistory that matches the filter.
     * @param {TeacherGroupHistoryFindUniqueArgs} args - Arguments to find a TeacherGroupHistory
     * @example
     * // Get one TeacherGroupHistory
     * const teacherGroupHistory = await prisma.teacherGroupHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherGroupHistoryFindUniqueArgs>(args: SelectSubset<T, TeacherGroupHistoryFindUniqueArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherGroupHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherGroupHistoryFindUniqueOrThrowArgs} args - Arguments to find a TeacherGroupHistory
     * @example
     * // Get one TeacherGroupHistory
     * const teacherGroupHistory = await prisma.teacherGroupHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherGroupHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherGroupHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherGroupHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryFindFirstArgs} args - Arguments to find a TeacherGroupHistory
     * @example
     * // Get one TeacherGroupHistory
     * const teacherGroupHistory = await prisma.teacherGroupHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherGroupHistoryFindFirstArgs>(args?: SelectSubset<T, TeacherGroupHistoryFindFirstArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherGroupHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryFindFirstOrThrowArgs} args - Arguments to find a TeacherGroupHistory
     * @example
     * // Get one TeacherGroupHistory
     * const teacherGroupHistory = await prisma.teacherGroupHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherGroupHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherGroupHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherGroupHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherGroupHistories
     * const teacherGroupHistories = await prisma.teacherGroupHistory.findMany()
     * 
     * // Get first 10 TeacherGroupHistories
     * const teacherGroupHistories = await prisma.teacherGroupHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherGroupHistoryWithIdOnly = await prisma.teacherGroupHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherGroupHistoryFindManyArgs>(args?: SelectSubset<T, TeacherGroupHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherGroupHistory.
     * @param {TeacherGroupHistoryCreateArgs} args - Arguments to create a TeacherGroupHistory.
     * @example
     * // Create one TeacherGroupHistory
     * const TeacherGroupHistory = await prisma.teacherGroupHistory.create({
     *   data: {
     *     // ... data to create a TeacherGroupHistory
     *   }
     * })
     * 
     */
    create<T extends TeacherGroupHistoryCreateArgs>(args: SelectSubset<T, TeacherGroupHistoryCreateArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherGroupHistories.
     * @param {TeacherGroupHistoryCreateManyArgs} args - Arguments to create many TeacherGroupHistories.
     * @example
     * // Create many TeacherGroupHistories
     * const teacherGroupHistory = await prisma.teacherGroupHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherGroupHistoryCreateManyArgs>(args?: SelectSubset<T, TeacherGroupHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherGroupHistories and returns the data saved in the database.
     * @param {TeacherGroupHistoryCreateManyAndReturnArgs} args - Arguments to create many TeacherGroupHistories.
     * @example
     * // Create many TeacherGroupHistories
     * const teacherGroupHistory = await prisma.teacherGroupHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherGroupHistories and only return the `id`
     * const teacherGroupHistoryWithIdOnly = await prisma.teacherGroupHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherGroupHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherGroupHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherGroupHistory.
     * @param {TeacherGroupHistoryDeleteArgs} args - Arguments to delete one TeacherGroupHistory.
     * @example
     * // Delete one TeacherGroupHistory
     * const TeacherGroupHistory = await prisma.teacherGroupHistory.delete({
     *   where: {
     *     // ... filter to delete one TeacherGroupHistory
     *   }
     * })
     * 
     */
    delete<T extends TeacherGroupHistoryDeleteArgs>(args: SelectSubset<T, TeacherGroupHistoryDeleteArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherGroupHistory.
     * @param {TeacherGroupHistoryUpdateArgs} args - Arguments to update one TeacherGroupHistory.
     * @example
     * // Update one TeacherGroupHistory
     * const teacherGroupHistory = await prisma.teacherGroupHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherGroupHistoryUpdateArgs>(args: SelectSubset<T, TeacherGroupHistoryUpdateArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherGroupHistories.
     * @param {TeacherGroupHistoryDeleteManyArgs} args - Arguments to filter TeacherGroupHistories to delete.
     * @example
     * // Delete a few TeacherGroupHistories
     * const { count } = await prisma.teacherGroupHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherGroupHistoryDeleteManyArgs>(args?: SelectSubset<T, TeacherGroupHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherGroupHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherGroupHistories
     * const teacherGroupHistory = await prisma.teacherGroupHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherGroupHistoryUpdateManyArgs>(args: SelectSubset<T, TeacherGroupHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherGroupHistories and returns the data updated in the database.
     * @param {TeacherGroupHistoryUpdateManyAndReturnArgs} args - Arguments to update many TeacherGroupHistories.
     * @example
     * // Update many TeacherGroupHistories
     * const teacherGroupHistory = await prisma.teacherGroupHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherGroupHistories and only return the `id`
     * const teacherGroupHistoryWithIdOnly = await prisma.teacherGroupHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherGroupHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherGroupHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherGroupHistory.
     * @param {TeacherGroupHistoryUpsertArgs} args - Arguments to update or create a TeacherGroupHistory.
     * @example
     * // Update or create a TeacherGroupHistory
     * const teacherGroupHistory = await prisma.teacherGroupHistory.upsert({
     *   create: {
     *     // ... data to create a TeacherGroupHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherGroupHistory we want to update
     *   }
     * })
     */
    upsert<T extends TeacherGroupHistoryUpsertArgs>(args: SelectSubset<T, TeacherGroupHistoryUpsertArgs<ExtArgs>>): Prisma__TeacherGroupHistoryClient<$Result.GetResult<Prisma.$TeacherGroupHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherGroupHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryCountArgs} args - Arguments to filter TeacherGroupHistories to count.
     * @example
     * // Count the number of TeacherGroupHistories
     * const count = await prisma.teacherGroupHistory.count({
     *   where: {
     *     // ... the filter for the TeacherGroupHistories we want to count
     *   }
     * })
    **/
    count<T extends TeacherGroupHistoryCountArgs>(
      args?: Subset<T, TeacherGroupHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherGroupHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherGroupHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherGroupHistoryAggregateArgs>(args: Subset<T, TeacherGroupHistoryAggregateArgs>): Prisma.PrismaPromise<GetTeacherGroupHistoryAggregateType<T>>

    /**
     * Group by TeacherGroupHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherGroupHistory model
   */
  readonly fields: TeacherGroupHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherGroupHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherGroupHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherGroup<T extends TeacherGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherGroupDefaultArgs<ExtArgs>>): Prisma__TeacherGroupClient<$Result.GetResult<Prisma.$TeacherGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherGroupHistory model
   */
  interface TeacherGroupHistoryFieldRefs {
    readonly id: FieldRef<"TeacherGroupHistory", 'Int'>
    readonly teacherGroupId: FieldRef<"TeacherGroupHistory", 'Int'>
    readonly teacherId: FieldRef<"TeacherGroupHistory", 'Int'>
    readonly groupId: FieldRef<"TeacherGroupHistory", 'Int'>
    readonly event: FieldRef<"TeacherGroupHistory", 'EventType'>
    readonly startDate: FieldRef<"TeacherGroupHistory", 'DateTime'>
    readonly endDate: FieldRef<"TeacherGroupHistory", 'DateTime'>
    readonly createdAt: FieldRef<"TeacherGroupHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherGroupHistory findUnique
   */
  export type TeacherGroupHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroupHistory to fetch.
     */
    where: TeacherGroupHistoryWhereUniqueInput
  }

  /**
   * TeacherGroupHistory findUniqueOrThrow
   */
  export type TeacherGroupHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroupHistory to fetch.
     */
    where: TeacherGroupHistoryWhereUniqueInput
  }

  /**
   * TeacherGroupHistory findFirst
   */
  export type TeacherGroupHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroupHistory to fetch.
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroupHistories to fetch.
     */
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherGroupHistories.
     */
    cursor?: TeacherGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroupHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherGroupHistories.
     */
    distinct?: TeacherGroupHistoryScalarFieldEnum | TeacherGroupHistoryScalarFieldEnum[]
  }

  /**
   * TeacherGroupHistory findFirstOrThrow
   */
  export type TeacherGroupHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroupHistory to fetch.
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroupHistories to fetch.
     */
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherGroupHistories.
     */
    cursor?: TeacherGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroupHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherGroupHistories.
     */
    distinct?: TeacherGroupHistoryScalarFieldEnum | TeacherGroupHistoryScalarFieldEnum[]
  }

  /**
   * TeacherGroupHistory findMany
   */
  export type TeacherGroupHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeacherGroupHistories to fetch.
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherGroupHistories to fetch.
     */
    orderBy?: TeacherGroupHistoryOrderByWithRelationInput | TeacherGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherGroupHistories.
     */
    cursor?: TeacherGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherGroupHistories.
     */
    skip?: number
    distinct?: TeacherGroupHistoryScalarFieldEnum | TeacherGroupHistoryScalarFieldEnum[]
  }

  /**
   * TeacherGroupHistory create
   */
  export type TeacherGroupHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherGroupHistory.
     */
    data: XOR<TeacherGroupHistoryCreateInput, TeacherGroupHistoryUncheckedCreateInput>
  }

  /**
   * TeacherGroupHistory createMany
   */
  export type TeacherGroupHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherGroupHistories.
     */
    data: TeacherGroupHistoryCreateManyInput | TeacherGroupHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherGroupHistory createManyAndReturn
   */
  export type TeacherGroupHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherGroupHistories.
     */
    data: TeacherGroupHistoryCreateManyInput | TeacherGroupHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherGroupHistory update
   */
  export type TeacherGroupHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherGroupHistory.
     */
    data: XOR<TeacherGroupHistoryUpdateInput, TeacherGroupHistoryUncheckedUpdateInput>
    /**
     * Choose, which TeacherGroupHistory to update.
     */
    where: TeacherGroupHistoryWhereUniqueInput
  }

  /**
   * TeacherGroupHistory updateMany
   */
  export type TeacherGroupHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherGroupHistories.
     */
    data: XOR<TeacherGroupHistoryUpdateManyMutationInput, TeacherGroupHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TeacherGroupHistories to update
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * Limit how many TeacherGroupHistories to update.
     */
    limit?: number
  }

  /**
   * TeacherGroupHistory updateManyAndReturn
   */
  export type TeacherGroupHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TeacherGroupHistories.
     */
    data: XOR<TeacherGroupHistoryUpdateManyMutationInput, TeacherGroupHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TeacherGroupHistories to update
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * Limit how many TeacherGroupHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherGroupHistory upsert
   */
  export type TeacherGroupHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherGroupHistory to update in case it exists.
     */
    where: TeacherGroupHistoryWhereUniqueInput
    /**
     * In case the TeacherGroupHistory found by the `where` argument doesn't exist, create a new TeacherGroupHistory with this data.
     */
    create: XOR<TeacherGroupHistoryCreateInput, TeacherGroupHistoryUncheckedCreateInput>
    /**
     * In case the TeacherGroupHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherGroupHistoryUpdateInput, TeacherGroupHistoryUncheckedUpdateInput>
  }

  /**
   * TeacherGroupHistory delete
   */
  export type TeacherGroupHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter which TeacherGroupHistory to delete.
     */
    where: TeacherGroupHistoryWhereUniqueInput
  }

  /**
   * TeacherGroupHistory deleteMany
   */
  export type TeacherGroupHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherGroupHistories to delete
     */
    where?: TeacherGroupHistoryWhereInput
    /**
     * Limit how many TeacherGroupHistories to delete.
     */
    limit?: number
  }

  /**
   * TeacherGroupHistory without action
   */
  export type TeacherGroupHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherGroupHistory
     */
    select?: TeacherGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherGroupHistory
     */
    omit?: TeacherGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherGroupHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    photo: string | null
    email: string | null
    phone: string | null
    status: $Enums.Status | null
    branchId: number | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    photo: string | null
    email: string | null
    phone: string | null
    status: $Enums.Status | null
    branchId: number | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    fullName: number
    photo: number
    email: number
    phone: number
    status: number
    branchId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    fullName?: true
    photo?: true
    email?: true
    phone?: true
    status?: true
    branchId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    fullName?: true
    photo?: true
    email?: true
    phone?: true
    status?: true
    branchId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    fullName?: true
    photo?: true
    email?: true
    phone?: true
    status?: true
    branchId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    fullName: string
    photo: string | null
    email: string
    phone: string
    status: $Enums.Status
    branchId: number
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    branchId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    groups?: boolean | Student$groupsArgs<ExtArgs>
    history?: boolean | Student$historyArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    branchId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    branchId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    fullName?: boolean
    photo?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    branchId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "photo" | "email" | "phone" | "status" | "branchId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    groups?: boolean | Student$groupsArgs<ExtArgs>
    history?: boolean | Student$historyArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      groups: Prisma.$StudentGroupPayload<ExtArgs>[]
      history: Prisma.$StudentGroupHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      photo: string | null
      email: string
      phone: string
      status: $Enums.Status
      branchId: number
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups<T extends Student$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Student$historyArgs<ExtArgs> = {}>(args?: Subset<T, Student$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly fullName: FieldRef<"Student", 'String'>
    readonly photo: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'Status'>
    readonly branchId: FieldRef<"Student", 'Int'>
    readonly deletedAt: FieldRef<"Student", 'DateTime'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.groups
   */
  export type Student$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    where?: StudentGroupWhereInput
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    cursor?: StudentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGroupScalarFieldEnum | StudentGroupScalarFieldEnum[]
  }

  /**
   * Student.history
   */
  export type Student$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    where?: StudentGroupHistoryWhereInput
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    cursor?: StudentGroupHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGroupHistoryScalarFieldEnum | StudentGroupHistoryScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model StudentGroup
   */

  export type AggregateStudentGroup = {
    _count: StudentGroupCountAggregateOutputType | null
    _avg: StudentGroupAvgAggregateOutputType | null
    _sum: StudentGroupSumAggregateOutputType | null
    _min: StudentGroupMinAggregateOutputType | null
    _max: StudentGroupMaxAggregateOutputType | null
  }

  export type StudentGroupAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    branchId: number | null
  }

  export type StudentGroupSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    branchId: number | null
  }

  export type StudentGroupMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentGroupMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentGroupCountAggregateOutputType = {
    id: number
    studentId: number
    groupId: number
    branchId: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentGroupAvgAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    branchId?: true
  }

  export type StudentGroupSumAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    branchId?: true
  }

  export type StudentGroupMinAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentGroupMaxAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentGroupCountAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentGroup to aggregate.
     */
    where?: StudentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroups to fetch.
     */
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentGroups
    **/
    _count?: true | StudentGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentGroupMaxAggregateInputType
  }

  export type GetStudentGroupAggregateType<T extends StudentGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentGroup[P]>
      : GetScalarType<T[P], AggregateStudentGroup[P]>
  }




  export type StudentGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupWhereInput
    orderBy?: StudentGroupOrderByWithAggregationInput | StudentGroupOrderByWithAggregationInput[]
    by: StudentGroupScalarFieldEnum[] | StudentGroupScalarFieldEnum
    having?: StudentGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentGroupCountAggregateInputType | true
    _avg?: StudentGroupAvgAggregateInputType
    _sum?: StudentGroupSumAggregateInputType
    _min?: StudentGroupMinAggregateInputType
    _max?: StudentGroupMaxAggregateInputType
  }

  export type StudentGroupGroupByOutputType = {
    id: number
    studentId: number
    groupId: number
    branchId: number
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    _count: StudentGroupCountAggregateOutputType | null
    _avg: StudentGroupAvgAggregateOutputType | null
    _sum: StudentGroupSumAggregateOutputType | null
    _min: StudentGroupMinAggregateOutputType | null
    _max: StudentGroupMaxAggregateOutputType | null
  }

  type GetStudentGroupGroupByPayload<T extends StudentGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupGroupByOutputType[P]>
        }
      >
    >


  export type StudentGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    history?: boolean | StudentGroup$historyArgs<ExtArgs>
    _count?: boolean | StudentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGroup"]>

  export type StudentGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGroup"]>

  export type StudentGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGroup"]>

  export type StudentGroupSelectScalar = {
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "groupId" | "branchId" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["studentGroup"]>
  export type StudentGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    history?: boolean | StudentGroup$historyArgs<ExtArgs>
    _count?: boolean | StudentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentGroup"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
      history: Prisma.$StudentGroupHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      groupId: number
      branchId: number
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["studentGroup"]>
    composites: {}
  }

  type StudentGroupGetPayload<S extends boolean | null | undefined | StudentGroupDefaultArgs> = $Result.GetResult<Prisma.$StudentGroupPayload, S>

  type StudentGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentGroupCountAggregateInputType | true
    }

  export interface StudentGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentGroup'], meta: { name: 'StudentGroup' } }
    /**
     * Find zero or one StudentGroup that matches the filter.
     * @param {StudentGroupFindUniqueArgs} args - Arguments to find a StudentGroup
     * @example
     * // Get one StudentGroup
     * const studentGroup = await prisma.studentGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentGroupFindUniqueArgs>(args: SelectSubset<T, StudentGroupFindUniqueArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentGroupFindUniqueOrThrowArgs} args - Arguments to find a StudentGroup
     * @example
     * // Get one StudentGroup
     * const studentGroup = await prisma.studentGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupFindFirstArgs} args - Arguments to find a StudentGroup
     * @example
     * // Get one StudentGroup
     * const studentGroup = await prisma.studentGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentGroupFindFirstArgs>(args?: SelectSubset<T, StudentGroupFindFirstArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupFindFirstOrThrowArgs} args - Arguments to find a StudentGroup
     * @example
     * // Get one StudentGroup
     * const studentGroup = await prisma.studentGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentGroups
     * const studentGroups = await prisma.studentGroup.findMany()
     * 
     * // Get first 10 StudentGroups
     * const studentGroups = await prisma.studentGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentGroupWithIdOnly = await prisma.studentGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentGroupFindManyArgs>(args?: SelectSubset<T, StudentGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentGroup.
     * @param {StudentGroupCreateArgs} args - Arguments to create a StudentGroup.
     * @example
     * // Create one StudentGroup
     * const StudentGroup = await prisma.studentGroup.create({
     *   data: {
     *     // ... data to create a StudentGroup
     *   }
     * })
     * 
     */
    create<T extends StudentGroupCreateArgs>(args: SelectSubset<T, StudentGroupCreateArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentGroups.
     * @param {StudentGroupCreateManyArgs} args - Arguments to create many StudentGroups.
     * @example
     * // Create many StudentGroups
     * const studentGroup = await prisma.studentGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentGroupCreateManyArgs>(args?: SelectSubset<T, StudentGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentGroups and returns the data saved in the database.
     * @param {StudentGroupCreateManyAndReturnArgs} args - Arguments to create many StudentGroups.
     * @example
     * // Create many StudentGroups
     * const studentGroup = await prisma.studentGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentGroups and only return the `id`
     * const studentGroupWithIdOnly = await prisma.studentGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentGroup.
     * @param {StudentGroupDeleteArgs} args - Arguments to delete one StudentGroup.
     * @example
     * // Delete one StudentGroup
     * const StudentGroup = await prisma.studentGroup.delete({
     *   where: {
     *     // ... filter to delete one StudentGroup
     *   }
     * })
     * 
     */
    delete<T extends StudentGroupDeleteArgs>(args: SelectSubset<T, StudentGroupDeleteArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentGroup.
     * @param {StudentGroupUpdateArgs} args - Arguments to update one StudentGroup.
     * @example
     * // Update one StudentGroup
     * const studentGroup = await prisma.studentGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentGroupUpdateArgs>(args: SelectSubset<T, StudentGroupUpdateArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentGroups.
     * @param {StudentGroupDeleteManyArgs} args - Arguments to filter StudentGroups to delete.
     * @example
     * // Delete a few StudentGroups
     * const { count } = await prisma.studentGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentGroupDeleteManyArgs>(args?: SelectSubset<T, StudentGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentGroups
     * const studentGroup = await prisma.studentGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentGroupUpdateManyArgs>(args: SelectSubset<T, StudentGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentGroups and returns the data updated in the database.
     * @param {StudentGroupUpdateManyAndReturnArgs} args - Arguments to update many StudentGroups.
     * @example
     * // Update many StudentGroups
     * const studentGroup = await prisma.studentGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentGroups and only return the `id`
     * const studentGroupWithIdOnly = await prisma.studentGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentGroup.
     * @param {StudentGroupUpsertArgs} args - Arguments to update or create a StudentGroup.
     * @example
     * // Update or create a StudentGroup
     * const studentGroup = await prisma.studentGroup.upsert({
     *   create: {
     *     // ... data to create a StudentGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentGroup we want to update
     *   }
     * })
     */
    upsert<T extends StudentGroupUpsertArgs>(args: SelectSubset<T, StudentGroupUpsertArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupCountArgs} args - Arguments to filter StudentGroups to count.
     * @example
     * // Count the number of StudentGroups
     * const count = await prisma.studentGroup.count({
     *   where: {
     *     // ... the filter for the StudentGroups we want to count
     *   }
     * })
    **/
    count<T extends StudentGroupCountArgs>(
      args?: Subset<T, StudentGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentGroupAggregateArgs>(args: Subset<T, StudentGroupAggregateArgs>): Prisma.PrismaPromise<GetStudentGroupAggregateType<T>>

    /**
     * Group by StudentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentGroup model
   */
  readonly fields: StudentGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends StudentGroup$historyArgs<ExtArgs> = {}>(args?: Subset<T, StudentGroup$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentGroup model
   */
  interface StudentGroupFieldRefs {
    readonly id: FieldRef<"StudentGroup", 'Int'>
    readonly studentId: FieldRef<"StudentGroup", 'Int'>
    readonly groupId: FieldRef<"StudentGroup", 'Int'>
    readonly branchId: FieldRef<"StudentGroup", 'Int'>
    readonly status: FieldRef<"StudentGroup", 'Status'>
    readonly deletedAt: FieldRef<"StudentGroup", 'DateTime'>
    readonly createdAt: FieldRef<"StudentGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentGroup findUnique
   */
  export type StudentGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroup to fetch.
     */
    where: StudentGroupWhereUniqueInput
  }

  /**
   * StudentGroup findUniqueOrThrow
   */
  export type StudentGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroup to fetch.
     */
    where: StudentGroupWhereUniqueInput
  }

  /**
   * StudentGroup findFirst
   */
  export type StudentGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroup to fetch.
     */
    where?: StudentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroups to fetch.
     */
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentGroups.
     */
    cursor?: StudentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGroups.
     */
    distinct?: StudentGroupScalarFieldEnum | StudentGroupScalarFieldEnum[]
  }

  /**
   * StudentGroup findFirstOrThrow
   */
  export type StudentGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroup to fetch.
     */
    where?: StudentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroups to fetch.
     */
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentGroups.
     */
    cursor?: StudentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGroups.
     */
    distinct?: StudentGroupScalarFieldEnum | StudentGroupScalarFieldEnum[]
  }

  /**
   * StudentGroup findMany
   */
  export type StudentGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroups to fetch.
     */
    where?: StudentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroups to fetch.
     */
    orderBy?: StudentGroupOrderByWithRelationInput | StudentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentGroups.
     */
    cursor?: StudentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroups.
     */
    skip?: number
    distinct?: StudentGroupScalarFieldEnum | StudentGroupScalarFieldEnum[]
  }

  /**
   * StudentGroup create
   */
  export type StudentGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentGroup.
     */
    data: XOR<StudentGroupCreateInput, StudentGroupUncheckedCreateInput>
  }

  /**
   * StudentGroup createMany
   */
  export type StudentGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentGroups.
     */
    data: StudentGroupCreateManyInput | StudentGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentGroup createManyAndReturn
   */
  export type StudentGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * The data used to create many StudentGroups.
     */
    data: StudentGroupCreateManyInput | StudentGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentGroup update
   */
  export type StudentGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentGroup.
     */
    data: XOR<StudentGroupUpdateInput, StudentGroupUncheckedUpdateInput>
    /**
     * Choose, which StudentGroup to update.
     */
    where: StudentGroupWhereUniqueInput
  }

  /**
   * StudentGroup updateMany
   */
  export type StudentGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentGroups.
     */
    data: XOR<StudentGroupUpdateManyMutationInput, StudentGroupUncheckedUpdateManyInput>
    /**
     * Filter which StudentGroups to update
     */
    where?: StudentGroupWhereInput
    /**
     * Limit how many StudentGroups to update.
     */
    limit?: number
  }

  /**
   * StudentGroup updateManyAndReturn
   */
  export type StudentGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * The data used to update StudentGroups.
     */
    data: XOR<StudentGroupUpdateManyMutationInput, StudentGroupUncheckedUpdateManyInput>
    /**
     * Filter which StudentGroups to update
     */
    where?: StudentGroupWhereInput
    /**
     * Limit how many StudentGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentGroup upsert
   */
  export type StudentGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentGroup to update in case it exists.
     */
    where: StudentGroupWhereUniqueInput
    /**
     * In case the StudentGroup found by the `where` argument doesn't exist, create a new StudentGroup with this data.
     */
    create: XOR<StudentGroupCreateInput, StudentGroupUncheckedCreateInput>
    /**
     * In case the StudentGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentGroupUpdateInput, StudentGroupUncheckedUpdateInput>
  }

  /**
   * StudentGroup delete
   */
  export type StudentGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
    /**
     * Filter which StudentGroup to delete.
     */
    where: StudentGroupWhereUniqueInput
  }

  /**
   * StudentGroup deleteMany
   */
  export type StudentGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentGroups to delete
     */
    where?: StudentGroupWhereInput
    /**
     * Limit how many StudentGroups to delete.
     */
    limit?: number
  }

  /**
   * StudentGroup.history
   */
  export type StudentGroup$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    where?: StudentGroupHistoryWhereInput
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    cursor?: StudentGroupHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGroupHistoryScalarFieldEnum | StudentGroupHistoryScalarFieldEnum[]
  }

  /**
   * StudentGroup without action
   */
  export type StudentGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroup
     */
    select?: StudentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroup
     */
    omit?: StudentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupInclude<ExtArgs> | null
  }


  /**
   * Model StudentGroupHistory
   */

  export type AggregateStudentGroupHistory = {
    _count: StudentGroupHistoryCountAggregateOutputType | null
    _avg: StudentGroupHistoryAvgAggregateOutputType | null
    _sum: StudentGroupHistorySumAggregateOutputType | null
    _min: StudentGroupHistoryMinAggregateOutputType | null
    _max: StudentGroupHistoryMaxAggregateOutputType | null
  }

  export type StudentGroupHistoryAvgAggregateOutputType = {
    id: number | null
    studentGroupId: number | null
    studentId: number | null
    groupId: number | null
  }

  export type StudentGroupHistorySumAggregateOutputType = {
    id: number | null
    studentGroupId: number | null
    studentId: number | null
    groupId: number | null
  }

  export type StudentGroupHistoryMinAggregateOutputType = {
    id: number | null
    studentGroupId: number | null
    studentId: number | null
    groupId: number | null
    event: $Enums.EventType | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type StudentGroupHistoryMaxAggregateOutputType = {
    id: number | null
    studentGroupId: number | null
    studentId: number | null
    groupId: number | null
    event: $Enums.EventType | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type StudentGroupHistoryCountAggregateOutputType = {
    id: number
    studentGroupId: number
    studentId: number
    groupId: number
    event: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type StudentGroupHistoryAvgAggregateInputType = {
    id?: true
    studentGroupId?: true
    studentId?: true
    groupId?: true
  }

  export type StudentGroupHistorySumAggregateInputType = {
    id?: true
    studentGroupId?: true
    studentId?: true
    groupId?: true
  }

  export type StudentGroupHistoryMinAggregateInputType = {
    id?: true
    studentGroupId?: true
    studentId?: true
    groupId?: true
    event?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type StudentGroupHistoryMaxAggregateInputType = {
    id?: true
    studentGroupId?: true
    studentId?: true
    groupId?: true
    event?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type StudentGroupHistoryCountAggregateInputType = {
    id?: true
    studentGroupId?: true
    studentId?: true
    groupId?: true
    event?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type StudentGroupHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentGroupHistory to aggregate.
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroupHistories to fetch.
     */
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroupHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentGroupHistories
    **/
    _count?: true | StudentGroupHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentGroupHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentGroupHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentGroupHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentGroupHistoryMaxAggregateInputType
  }

  export type GetStudentGroupHistoryAggregateType<T extends StudentGroupHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentGroupHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentGroupHistory[P]>
      : GetScalarType<T[P], AggregateStudentGroupHistory[P]>
  }




  export type StudentGroupHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGroupHistoryWhereInput
    orderBy?: StudentGroupHistoryOrderByWithAggregationInput | StudentGroupHistoryOrderByWithAggregationInput[]
    by: StudentGroupHistoryScalarFieldEnum[] | StudentGroupHistoryScalarFieldEnum
    having?: StudentGroupHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentGroupHistoryCountAggregateInputType | true
    _avg?: StudentGroupHistoryAvgAggregateInputType
    _sum?: StudentGroupHistorySumAggregateInputType
    _min?: StudentGroupHistoryMinAggregateInputType
    _max?: StudentGroupHistoryMaxAggregateInputType
  }

  export type StudentGroupHistoryGroupByOutputType = {
    id: number
    studentGroupId: number
    studentId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date
    endDate: Date | null
    createdAt: Date
    _count: StudentGroupHistoryCountAggregateOutputType | null
    _avg: StudentGroupHistoryAvgAggregateOutputType | null
    _sum: StudentGroupHistorySumAggregateOutputType | null
    _min: StudentGroupHistoryMinAggregateOutputType | null
    _max: StudentGroupHistoryMaxAggregateOutputType | null
  }

  type GetStudentGroupHistoryGroupByPayload<T extends StudentGroupHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StudentGroupHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentGroupId?: boolean
    studentId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    studentGroup?: boolean | StudentGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGroupHistory"]>

  export type StudentGroupHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentGroupId?: boolean
    studentId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    studentGroup?: boolean | StudentGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGroupHistory"]>

  export type StudentGroupHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentGroupId?: boolean
    studentId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    studentGroup?: boolean | StudentGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGroupHistory"]>

  export type StudentGroupHistorySelectScalar = {
    id?: boolean
    studentGroupId?: boolean
    studentId?: boolean
    groupId?: boolean
    event?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type StudentGroupHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentGroupId" | "studentId" | "groupId" | "event" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["studentGroupHistory"]>
  export type StudentGroupHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentGroup?: boolean | StudentGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type StudentGroupHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentGroup?: boolean | StudentGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type StudentGroupHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentGroup?: boolean | StudentGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $StudentGroupHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentGroupHistory"
    objects: {
      studentGroup: Prisma.$StudentGroupPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentGroupId: number
      studentId: number
      groupId: number
      event: $Enums.EventType
      startDate: Date
      endDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["studentGroupHistory"]>
    composites: {}
  }

  type StudentGroupHistoryGetPayload<S extends boolean | null | undefined | StudentGroupHistoryDefaultArgs> = $Result.GetResult<Prisma.$StudentGroupHistoryPayload, S>

  type StudentGroupHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentGroupHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentGroupHistoryCountAggregateInputType | true
    }

  export interface StudentGroupHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentGroupHistory'], meta: { name: 'StudentGroupHistory' } }
    /**
     * Find zero or one StudentGroupHistory that matches the filter.
     * @param {StudentGroupHistoryFindUniqueArgs} args - Arguments to find a StudentGroupHistory
     * @example
     * // Get one StudentGroupHistory
     * const studentGroupHistory = await prisma.studentGroupHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentGroupHistoryFindUniqueArgs>(args: SelectSubset<T, StudentGroupHistoryFindUniqueArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentGroupHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentGroupHistoryFindUniqueOrThrowArgs} args - Arguments to find a StudentGroupHistory
     * @example
     * // Get one StudentGroupHistory
     * const studentGroupHistory = await prisma.studentGroupHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentGroupHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentGroupHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentGroupHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryFindFirstArgs} args - Arguments to find a StudentGroupHistory
     * @example
     * // Get one StudentGroupHistory
     * const studentGroupHistory = await prisma.studentGroupHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentGroupHistoryFindFirstArgs>(args?: SelectSubset<T, StudentGroupHistoryFindFirstArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentGroupHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryFindFirstOrThrowArgs} args - Arguments to find a StudentGroupHistory
     * @example
     * // Get one StudentGroupHistory
     * const studentGroupHistory = await prisma.studentGroupHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentGroupHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentGroupHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentGroupHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentGroupHistories
     * const studentGroupHistories = await prisma.studentGroupHistory.findMany()
     * 
     * // Get first 10 StudentGroupHistories
     * const studentGroupHistories = await prisma.studentGroupHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentGroupHistoryWithIdOnly = await prisma.studentGroupHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentGroupHistoryFindManyArgs>(args?: SelectSubset<T, StudentGroupHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentGroupHistory.
     * @param {StudentGroupHistoryCreateArgs} args - Arguments to create a StudentGroupHistory.
     * @example
     * // Create one StudentGroupHistory
     * const StudentGroupHistory = await prisma.studentGroupHistory.create({
     *   data: {
     *     // ... data to create a StudentGroupHistory
     *   }
     * })
     * 
     */
    create<T extends StudentGroupHistoryCreateArgs>(args: SelectSubset<T, StudentGroupHistoryCreateArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentGroupHistories.
     * @param {StudentGroupHistoryCreateManyArgs} args - Arguments to create many StudentGroupHistories.
     * @example
     * // Create many StudentGroupHistories
     * const studentGroupHistory = await prisma.studentGroupHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentGroupHistoryCreateManyArgs>(args?: SelectSubset<T, StudentGroupHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentGroupHistories and returns the data saved in the database.
     * @param {StudentGroupHistoryCreateManyAndReturnArgs} args - Arguments to create many StudentGroupHistories.
     * @example
     * // Create many StudentGroupHistories
     * const studentGroupHistory = await prisma.studentGroupHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentGroupHistories and only return the `id`
     * const studentGroupHistoryWithIdOnly = await prisma.studentGroupHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentGroupHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentGroupHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentGroupHistory.
     * @param {StudentGroupHistoryDeleteArgs} args - Arguments to delete one StudentGroupHistory.
     * @example
     * // Delete one StudentGroupHistory
     * const StudentGroupHistory = await prisma.studentGroupHistory.delete({
     *   where: {
     *     // ... filter to delete one StudentGroupHistory
     *   }
     * })
     * 
     */
    delete<T extends StudentGroupHistoryDeleteArgs>(args: SelectSubset<T, StudentGroupHistoryDeleteArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentGroupHistory.
     * @param {StudentGroupHistoryUpdateArgs} args - Arguments to update one StudentGroupHistory.
     * @example
     * // Update one StudentGroupHistory
     * const studentGroupHistory = await prisma.studentGroupHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentGroupHistoryUpdateArgs>(args: SelectSubset<T, StudentGroupHistoryUpdateArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentGroupHistories.
     * @param {StudentGroupHistoryDeleteManyArgs} args - Arguments to filter StudentGroupHistories to delete.
     * @example
     * // Delete a few StudentGroupHistories
     * const { count } = await prisma.studentGroupHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentGroupHistoryDeleteManyArgs>(args?: SelectSubset<T, StudentGroupHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentGroupHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentGroupHistories
     * const studentGroupHistory = await prisma.studentGroupHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentGroupHistoryUpdateManyArgs>(args: SelectSubset<T, StudentGroupHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentGroupHistories and returns the data updated in the database.
     * @param {StudentGroupHistoryUpdateManyAndReturnArgs} args - Arguments to update many StudentGroupHistories.
     * @example
     * // Update many StudentGroupHistories
     * const studentGroupHistory = await prisma.studentGroupHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentGroupHistories and only return the `id`
     * const studentGroupHistoryWithIdOnly = await prisma.studentGroupHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentGroupHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentGroupHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentGroupHistory.
     * @param {StudentGroupHistoryUpsertArgs} args - Arguments to update or create a StudentGroupHistory.
     * @example
     * // Update or create a StudentGroupHistory
     * const studentGroupHistory = await prisma.studentGroupHistory.upsert({
     *   create: {
     *     // ... data to create a StudentGroupHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentGroupHistory we want to update
     *   }
     * })
     */
    upsert<T extends StudentGroupHistoryUpsertArgs>(args: SelectSubset<T, StudentGroupHistoryUpsertArgs<ExtArgs>>): Prisma__StudentGroupHistoryClient<$Result.GetResult<Prisma.$StudentGroupHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentGroupHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryCountArgs} args - Arguments to filter StudentGroupHistories to count.
     * @example
     * // Count the number of StudentGroupHistories
     * const count = await prisma.studentGroupHistory.count({
     *   where: {
     *     // ... the filter for the StudentGroupHistories we want to count
     *   }
     * })
    **/
    count<T extends StudentGroupHistoryCountArgs>(
      args?: Subset<T, StudentGroupHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentGroupHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentGroupHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentGroupHistoryAggregateArgs>(args: Subset<T, StudentGroupHistoryAggregateArgs>): Prisma.PrismaPromise<GetStudentGroupHistoryAggregateType<T>>

    /**
     * Group by StudentGroupHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentGroupHistory model
   */
  readonly fields: StudentGroupHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentGroupHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentGroupHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentGroup<T extends StudentGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentGroupDefaultArgs<ExtArgs>>): Prisma__StudentGroupClient<$Result.GetResult<Prisma.$StudentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentGroupHistory model
   */
  interface StudentGroupHistoryFieldRefs {
    readonly id: FieldRef<"StudentGroupHistory", 'Int'>
    readonly studentGroupId: FieldRef<"StudentGroupHistory", 'Int'>
    readonly studentId: FieldRef<"StudentGroupHistory", 'Int'>
    readonly groupId: FieldRef<"StudentGroupHistory", 'Int'>
    readonly event: FieldRef<"StudentGroupHistory", 'EventType'>
    readonly startDate: FieldRef<"StudentGroupHistory", 'DateTime'>
    readonly endDate: FieldRef<"StudentGroupHistory", 'DateTime'>
    readonly createdAt: FieldRef<"StudentGroupHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentGroupHistory findUnique
   */
  export type StudentGroupHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroupHistory to fetch.
     */
    where: StudentGroupHistoryWhereUniqueInput
  }

  /**
   * StudentGroupHistory findUniqueOrThrow
   */
  export type StudentGroupHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroupHistory to fetch.
     */
    where: StudentGroupHistoryWhereUniqueInput
  }

  /**
   * StudentGroupHistory findFirst
   */
  export type StudentGroupHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroupHistory to fetch.
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroupHistories to fetch.
     */
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentGroupHistories.
     */
    cursor?: StudentGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroupHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGroupHistories.
     */
    distinct?: StudentGroupHistoryScalarFieldEnum | StudentGroupHistoryScalarFieldEnum[]
  }

  /**
   * StudentGroupHistory findFirstOrThrow
   */
  export type StudentGroupHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroupHistory to fetch.
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroupHistories to fetch.
     */
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentGroupHistories.
     */
    cursor?: StudentGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroupHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGroupHistories.
     */
    distinct?: StudentGroupHistoryScalarFieldEnum | StudentGroupHistoryScalarFieldEnum[]
  }

  /**
   * StudentGroupHistory findMany
   */
  export type StudentGroupHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentGroupHistories to fetch.
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGroupHistories to fetch.
     */
    orderBy?: StudentGroupHistoryOrderByWithRelationInput | StudentGroupHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentGroupHistories.
     */
    cursor?: StudentGroupHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGroupHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGroupHistories.
     */
    skip?: number
    distinct?: StudentGroupHistoryScalarFieldEnum | StudentGroupHistoryScalarFieldEnum[]
  }

  /**
   * StudentGroupHistory create
   */
  export type StudentGroupHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentGroupHistory.
     */
    data: XOR<StudentGroupHistoryCreateInput, StudentGroupHistoryUncheckedCreateInput>
  }

  /**
   * StudentGroupHistory createMany
   */
  export type StudentGroupHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentGroupHistories.
     */
    data: StudentGroupHistoryCreateManyInput | StudentGroupHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentGroupHistory createManyAndReturn
   */
  export type StudentGroupHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many StudentGroupHistories.
     */
    data: StudentGroupHistoryCreateManyInput | StudentGroupHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentGroupHistory update
   */
  export type StudentGroupHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentGroupHistory.
     */
    data: XOR<StudentGroupHistoryUpdateInput, StudentGroupHistoryUncheckedUpdateInput>
    /**
     * Choose, which StudentGroupHistory to update.
     */
    where: StudentGroupHistoryWhereUniqueInput
  }

  /**
   * StudentGroupHistory updateMany
   */
  export type StudentGroupHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentGroupHistories.
     */
    data: XOR<StudentGroupHistoryUpdateManyMutationInput, StudentGroupHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StudentGroupHistories to update
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * Limit how many StudentGroupHistories to update.
     */
    limit?: number
  }

  /**
   * StudentGroupHistory updateManyAndReturn
   */
  export type StudentGroupHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * The data used to update StudentGroupHistories.
     */
    data: XOR<StudentGroupHistoryUpdateManyMutationInput, StudentGroupHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StudentGroupHistories to update
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * Limit how many StudentGroupHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentGroupHistory upsert
   */
  export type StudentGroupHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentGroupHistory to update in case it exists.
     */
    where: StudentGroupHistoryWhereUniqueInput
    /**
     * In case the StudentGroupHistory found by the `where` argument doesn't exist, create a new StudentGroupHistory with this data.
     */
    create: XOR<StudentGroupHistoryCreateInput, StudentGroupHistoryUncheckedCreateInput>
    /**
     * In case the StudentGroupHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentGroupHistoryUpdateInput, StudentGroupHistoryUncheckedUpdateInput>
  }

  /**
   * StudentGroupHistory delete
   */
  export type StudentGroupHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
    /**
     * Filter which StudentGroupHistory to delete.
     */
    where: StudentGroupHistoryWhereUniqueInput
  }

  /**
   * StudentGroupHistory deleteMany
   */
  export type StudentGroupHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentGroupHistories to delete
     */
    where?: StudentGroupHistoryWhereInput
    /**
     * Limit how many StudentGroupHistories to delete.
     */
    limit?: number
  }

  /**
   * StudentGroupHistory without action
   */
  export type StudentGroupHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGroupHistory
     */
    select?: StudentGroupHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGroupHistory
     */
    omit?: StudentGroupHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGroupHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    phone: string | null
    photo: string | null
    role: $Enums.StaffRole | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    phone: string | null
    photo: string | null
    role: $Enums.StaffRole | null
    branchId: number | null
    status: $Enums.Status | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    photo: number
    role: number
    branchId: number
    status: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    photo?: true
    role?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    photo?: true
    role?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    photo?: true
    role?: true
    branchId?: true
    status?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    fullName: string
    phone: string
    photo: string | null
    role: $Enums.StaffRole
    branchId: number | null
    status: $Enums.Status
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    photo?: boolean
    role?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | Staff$branchArgs<ExtArgs>
    permissions?: boolean | Staff$permissionsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    photo?: boolean
    role?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | Staff$branchArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    photo?: boolean
    role?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | Staff$branchArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    photo?: boolean
    role?: boolean
    branchId?: boolean
    status?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "photo" | "role" | "branchId" | "status" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Staff$branchArgs<ExtArgs>
    permissions?: boolean | Staff$permissionsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Staff$branchArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Staff$branchArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      phone: string
      photo: string | null
      role: $Enums.StaffRole
      branchId: number | null
      status: $Enums.Status
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Staff$branchArgs<ExtArgs> = {}>(args?: Subset<T, Staff$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    permissions<T extends Staff$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly fullName: FieldRef<"Staff", 'String'>
    readonly phone: FieldRef<"Staff", 'String'>
    readonly photo: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'StaffRole'>
    readonly branchId: FieldRef<"Staff", 'Int'>
    readonly status: FieldRef<"Staff", 'Status'>
    readonly deletedAt: FieldRef<"Staff", 'DateTime'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.branch
   */
  export type Staff$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Staff.permissions
   */
  export type Staff$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    staffId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    staffId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    staffId: number | null
    tableName: string | null
    canRead: boolean | null
    canWrite: boolean | null
    canUpdate: boolean | null
    canDelete: boolean | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    staffId: number | null
    tableName: string | null
    canRead: boolean | null
    canWrite: boolean | null
    canUpdate: boolean | null
    canDelete: boolean | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    staffId: number
    tableName: number
    canRead: number
    canWrite: number
    canUpdate: number
    canDelete: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    staffId?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    staffId?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    staffId?: true
    tableName?: true
    canRead?: true
    canWrite?: true
    canUpdate?: true
    canDelete?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    staffId?: true
    tableName?: true
    canRead?: true
    canWrite?: true
    canUpdate?: true
    canDelete?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    staffId?: true
    tableName?: true
    canRead?: true
    canWrite?: true
    canUpdate?: true
    canDelete?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    staffId: number
    tableName: string
    canRead: boolean
    canWrite: boolean
    canUpdate: boolean
    canDelete: boolean
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tableName?: boolean
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tableName?: boolean
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tableName?: boolean
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    staffId?: boolean
    tableName?: boolean
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "tableName" | "canRead" | "canWrite" | "canUpdate" | "canDelete", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      staffId: number
      tableName: string
      canRead: boolean
      canWrite: boolean
      canUpdate: boolean
      canDelete: boolean
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly staffId: FieldRef<"Permission", 'Int'>
    readonly tableName: FieldRef<"Permission", 'String'>
    readonly canRead: FieldRef<"Permission", 'Boolean'>
    readonly canWrite: FieldRef<"Permission", 'Boolean'>
    readonly canUpdate: FieldRef<"Permission", 'Boolean'>
    readonly canDelete: FieldRef<"Permission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    address: 'address',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    branchId: 'branchId',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    durationMonth: 'durationMonth',
    durationHours: 'durationHours',
    level: 'level',
    branchId: 'branchId',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branchId: 'branchId',
    roomId: 'roomId',
    courseId: 'courseId',
    startDate: 'startDate',
    startLesson: 'startLesson',
    endDate: 'endDate',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    photo: 'photo',
    email: 'email',
    password: 'password',
    branchId: 'branchId',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TeacherGroupScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    branchId: 'branchId',
    groupId: 'groupId',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherGroupScalarFieldEnum = (typeof TeacherGroupScalarFieldEnum)[keyof typeof TeacherGroupScalarFieldEnum]


  export const TeacherGroupHistoryScalarFieldEnum: {
    id: 'id',
    teacherGroupId: 'teacherGroupId',
    teacherId: 'teacherId',
    groupId: 'groupId',
    event: 'event',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type TeacherGroupHistoryScalarFieldEnum = (typeof TeacherGroupHistoryScalarFieldEnum)[keyof typeof TeacherGroupHistoryScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    photo: 'photo',
    email: 'email',
    phone: 'phone',
    status: 'status',
    branchId: 'branchId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentGroupScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    groupId: 'groupId',
    branchId: 'branchId',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentGroupScalarFieldEnum = (typeof StudentGroupScalarFieldEnum)[keyof typeof StudentGroupScalarFieldEnum]


  export const StudentGroupHistoryScalarFieldEnum: {
    id: 'id',
    studentGroupId: 'studentGroupId',
    studentId: 'studentId',
    groupId: 'groupId',
    event: 'event',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type StudentGroupHistoryScalarFieldEnum = (typeof StudentGroupHistoryScalarFieldEnum)[keyof typeof StudentGroupHistoryScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    photo: 'photo',
    role: 'role',
    branchId: 'branchId',
    status: 'status',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    tableName: 'tableName',
    canRead: 'canRead',
    canWrite: 'canWrite',
    canUpdate: 'canUpdate',
    canDelete: 'canDelete'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CourseLevel'
   */
  export type EnumCourseLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseLevel'>
    


  /**
   * Reference to a field of type 'CourseLevel[]'
   */
  export type ListEnumCourseLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseLevel[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'StaffRole'
   */
  export type EnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole'>
    


  /**
   * Reference to a field of type 'StaffRole[]'
   */
  export type ListEnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: IntFilter<"Branch"> | number
    name?: StringFilter<"Branch"> | string
    logo?: StringNullableFilter<"Branch"> | string | null
    address?: StringFilter<"Branch"> | string
    status?: EnumStatusFilter<"Branch"> | $Enums.Status
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    rooms?: RoomListRelationFilter
    teachers?: TeacherListRelationFilter
    courses?: CourseListRelationFilter
    groups?: GroupListRelationFilter
    students?: StudentListRelationFilter
    staff?: StaffListRelationFilter
    teacherGroups?: TeacherGroupListRelationFilter
    studentGroups?: StudentGroupListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    teachers?: TeacherOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
    teacherGroups?: TeacherGroupOrderByRelationAggregateInput
    studentGroups?: StudentGroupOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    logo?: StringNullableFilter<"Branch"> | string | null
    address?: StringFilter<"Branch"> | string
    status?: EnumStatusFilter<"Branch"> | $Enums.Status
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    rooms?: RoomListRelationFilter
    teachers?: TeacherListRelationFilter
    courses?: CourseListRelationFilter
    groups?: GroupListRelationFilter
    students?: StudentListRelationFilter
    staff?: StaffListRelationFilter
    teacherGroups?: TeacherGroupListRelationFilter
    studentGroups?: StudentGroupListRelationFilter
  }, "id" | "name">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Branch"> | number
    name?: StringWithAggregatesFilter<"Branch"> | string
    logo?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    address?: StringWithAggregatesFilter<"Branch"> | string
    status?: EnumStatusWithAggregatesFilter<"Branch"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    branchId?: IntFilter<"Room"> | number
    status?: EnumStatusFilter<"Room"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    groups?: GroupListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    branchId_name?: RoomBranchIdNameCompoundUniqueInput
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    capacity?: IntFilter<"Room"> | number
    branchId?: IntFilter<"Room"> | number
    status?: EnumStatusFilter<"Room"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    groups?: GroupListRelationFilter
  }, "id" | "name" | "branchId_name">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    branchId?: IntWithAggregatesFilter<"Room"> | number
    status?: EnumStatusWithAggregatesFilter<"Room"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFilter<"Course"> | number
    durationHours?: FloatFilter<"Course"> | number
    level?: EnumCourseLevelFilter<"Course"> | $Enums.CourseLevel
    branchId?: IntFilter<"Course"> | number
    status?: EnumStatusFilter<"Course"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    groups?: GroupListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    level?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    branchId_name?: CourseBranchIdNameCompoundUniqueInput
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFilter<"Course"> | number
    durationHours?: FloatFilter<"Course"> | number
    level?: EnumCourseLevelFilter<"Course"> | $Enums.CourseLevel
    branchId?: IntFilter<"Course"> | number
    status?: EnumStatusFilter<"Course"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    groups?: GroupListRelationFilter
  }, "id" | "name" | "branchId_name">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    level?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
    price?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    durationMonth?: IntWithAggregatesFilter<"Course"> | number
    durationHours?: FloatWithAggregatesFilter<"Course"> | number
    level?: EnumCourseLevelWithAggregatesFilter<"Course"> | $Enums.CourseLevel
    branchId?: IntWithAggregatesFilter<"Course"> | number
    status?: EnumStatusWithAggregatesFilter<"Course"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Course"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    branchId?: IntFilter<"Group"> | number
    roomId?: IntFilter<"Group"> | number
    courseId?: IntFilter<"Group"> | number
    startDate?: DateTimeFilter<"Group"> | Date | string
    startLesson?: DateTimeFilter<"Group"> | Date | string
    endDate?: DateTimeFilter<"Group"> | Date | string
    status?: EnumStatusFilter<"Group"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    teachers?: TeacherGroupListRelationFilter
    students?: StudentGroupListRelationFilter
    teacherGroupHistory?: TeacherGroupHistoryListRelationFilter
    studentGroupHistory?: StudentGroupHistoryListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
    startDate?: SortOrder
    startLesson?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    teachers?: TeacherGroupOrderByRelationAggregateInput
    students?: StudentGroupOrderByRelationAggregateInput
    teacherGroupHistory?: TeacherGroupHistoryOrderByRelationAggregateInput
    studentGroupHistory?: StudentGroupHistoryOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    branchId_name?: GroupBranchIdNameCompoundUniqueInput
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    branchId?: IntFilter<"Group"> | number
    roomId?: IntFilter<"Group"> | number
    courseId?: IntFilter<"Group"> | number
    startDate?: DateTimeFilter<"Group"> | Date | string
    startLesson?: DateTimeFilter<"Group"> | Date | string
    endDate?: DateTimeFilter<"Group"> | Date | string
    status?: EnumStatusFilter<"Group"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    teachers?: TeacherGroupListRelationFilter
    students?: StudentGroupListRelationFilter
    teacherGroupHistory?: TeacherGroupHistoryListRelationFilter
    studentGroupHistory?: StudentGroupHistoryListRelationFilter
  }, "id" | "name" | "branchId_name">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
    startDate?: SortOrder
    startLesson?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    branchId?: IntWithAggregatesFilter<"Group"> | number
    roomId?: IntWithAggregatesFilter<"Group"> | number
    courseId?: IntWithAggregatesFilter<"Group"> | number
    startDate?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    startLesson?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Group"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    fullName?: StringFilter<"Teacher"> | string
    photo?: StringNullableFilter<"Teacher"> | string | null
    email?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    branchId?: IntFilter<"Teacher"> | number
    status?: EnumStatusFilter<"Teacher"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    teacherGroups?: TeacherGroupListRelationFilter
    teacherGroupHistory?: TeacherGroupHistoryListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    teacherGroups?: TeacherGroupOrderByRelationAggregateInput
    teacherGroupHistory?: TeacherGroupHistoryOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    fullName?: StringFilter<"Teacher"> | string
    photo?: StringNullableFilter<"Teacher"> | string | null
    password?: StringFilter<"Teacher"> | string
    branchId?: IntFilter<"Teacher"> | number
    status?: EnumStatusFilter<"Teacher"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    teacherGroups?: TeacherGroupListRelationFilter
    teacherGroupHistory?: TeacherGroupHistoryListRelationFilter
  }, "id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    fullName?: StringWithAggregatesFilter<"Teacher"> | string
    photo?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    email?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
    branchId?: IntWithAggregatesFilter<"Teacher"> | number
    status?: EnumStatusWithAggregatesFilter<"Teacher"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Teacher"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type TeacherGroupWhereInput = {
    AND?: TeacherGroupWhereInput | TeacherGroupWhereInput[]
    OR?: TeacherGroupWhereInput[]
    NOT?: TeacherGroupWhereInput | TeacherGroupWhereInput[]
    id?: IntFilter<"TeacherGroup"> | number
    teacherId?: IntFilter<"TeacherGroup"> | number
    branchId?: IntFilter<"TeacherGroup"> | number
    groupId?: IntFilter<"TeacherGroup"> | number
    status?: EnumStatusFilter<"TeacherGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"TeacherGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"TeacherGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherGroup"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    history?: TeacherGroupHistoryListRelationFilter
  }

  export type TeacherGroupOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    history?: TeacherGroupHistoryOrderByRelationAggregateInput
  }

  export type TeacherGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherId_groupId_branchId?: TeacherGroupTeacherIdGroupIdBranchIdCompoundUniqueInput
    AND?: TeacherGroupWhereInput | TeacherGroupWhereInput[]
    OR?: TeacherGroupWhereInput[]
    NOT?: TeacherGroupWhereInput | TeacherGroupWhereInput[]
    teacherId?: IntFilter<"TeacherGroup"> | number
    branchId?: IntFilter<"TeacherGroup"> | number
    groupId?: IntFilter<"TeacherGroup"> | number
    status?: EnumStatusFilter<"TeacherGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"TeacherGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"TeacherGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherGroup"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    history?: TeacherGroupHistoryListRelationFilter
  }, "id" | "teacherId_groupId_branchId">

  export type TeacherGroupOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherGroupCountOrderByAggregateInput
    _avg?: TeacherGroupAvgOrderByAggregateInput
    _max?: TeacherGroupMaxOrderByAggregateInput
    _min?: TeacherGroupMinOrderByAggregateInput
    _sum?: TeacherGroupSumOrderByAggregateInput
  }

  export type TeacherGroupScalarWhereWithAggregatesInput = {
    AND?: TeacherGroupScalarWhereWithAggregatesInput | TeacherGroupScalarWhereWithAggregatesInput[]
    OR?: TeacherGroupScalarWhereWithAggregatesInput[]
    NOT?: TeacherGroupScalarWhereWithAggregatesInput | TeacherGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherGroup"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherGroup"> | number
    branchId?: IntWithAggregatesFilter<"TeacherGroup"> | number
    groupId?: IntWithAggregatesFilter<"TeacherGroup"> | number
    status?: EnumStatusWithAggregatesFilter<"TeacherGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TeacherGroup"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeacherGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeacherGroup"> | Date | string
  }

  export type TeacherGroupHistoryWhereInput = {
    AND?: TeacherGroupHistoryWhereInput | TeacherGroupHistoryWhereInput[]
    OR?: TeacherGroupHistoryWhereInput[]
    NOT?: TeacherGroupHistoryWhereInput | TeacherGroupHistoryWhereInput[]
    id?: IntFilter<"TeacherGroupHistory"> | number
    teacherGroupId?: IntFilter<"TeacherGroupHistory"> | number
    teacherId?: IntFilter<"TeacherGroupHistory"> | number
    groupId?: IntFilter<"TeacherGroupHistory"> | number
    event?: EnumEventTypeFilter<"TeacherGroupHistory"> | $Enums.EventType
    startDate?: DateTimeFilter<"TeacherGroupHistory"> | Date | string
    endDate?: DateTimeNullableFilter<"TeacherGroupHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"TeacherGroupHistory"> | Date | string
    teacherGroup?: XOR<TeacherGroupScalarRelationFilter, TeacherGroupWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type TeacherGroupHistoryOrderByWithRelationInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    teacherGroup?: TeacherGroupOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type TeacherGroupHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherGroupHistoryWhereInput | TeacherGroupHistoryWhereInput[]
    OR?: TeacherGroupHistoryWhereInput[]
    NOT?: TeacherGroupHistoryWhereInput | TeacherGroupHistoryWhereInput[]
    teacherGroupId?: IntFilter<"TeacherGroupHistory"> | number
    teacherId?: IntFilter<"TeacherGroupHistory"> | number
    groupId?: IntFilter<"TeacherGroupHistory"> | number
    event?: EnumEventTypeFilter<"TeacherGroupHistory"> | $Enums.EventType
    startDate?: DateTimeFilter<"TeacherGroupHistory"> | Date | string
    endDate?: DateTimeNullableFilter<"TeacherGroupHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"TeacherGroupHistory"> | Date | string
    teacherGroup?: XOR<TeacherGroupScalarRelationFilter, TeacherGroupWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type TeacherGroupHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TeacherGroupHistoryCountOrderByAggregateInput
    _avg?: TeacherGroupHistoryAvgOrderByAggregateInput
    _max?: TeacherGroupHistoryMaxOrderByAggregateInput
    _min?: TeacherGroupHistoryMinOrderByAggregateInput
    _sum?: TeacherGroupHistorySumOrderByAggregateInput
  }

  export type TeacherGroupHistoryScalarWhereWithAggregatesInput = {
    AND?: TeacherGroupHistoryScalarWhereWithAggregatesInput | TeacherGroupHistoryScalarWhereWithAggregatesInput[]
    OR?: TeacherGroupHistoryScalarWhereWithAggregatesInput[]
    NOT?: TeacherGroupHistoryScalarWhereWithAggregatesInput | TeacherGroupHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherGroupHistory"> | number
    teacherGroupId?: IntWithAggregatesFilter<"TeacherGroupHistory"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherGroupHistory"> | number
    groupId?: IntWithAggregatesFilter<"TeacherGroupHistory"> | number
    event?: EnumEventTypeWithAggregatesFilter<"TeacherGroupHistory"> | $Enums.EventType
    startDate?: DateTimeWithAggregatesFilter<"TeacherGroupHistory"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"TeacherGroupHistory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeacherGroupHistory"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    fullName?: StringFilter<"Student"> | string
    photo?: StringNullableFilter<"Student"> | string | null
    email?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    branchId?: IntFilter<"Student"> | number
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    groups?: StudentGroupListRelationFilter
    history?: StudentGroupHistoryListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    groups?: StudentGroupOrderByRelationAggregateInput
    history?: StudentGroupHistoryOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    fullName?: StringFilter<"Student"> | string
    photo?: StringNullableFilter<"Student"> | string | null
    phone?: StringFilter<"Student"> | string
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    branchId?: IntFilter<"Student"> | number
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    groups?: StudentGroupListRelationFilter
    history?: StudentGroupHistoryListRelationFilter
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    fullName?: StringWithAggregatesFilter<"Student"> | string
    photo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringWithAggregatesFilter<"Student"> | string
    status?: EnumStatusWithAggregatesFilter<"Student"> | $Enums.Status
    branchId?: IntWithAggregatesFilter<"Student"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StudentGroupWhereInput = {
    AND?: StudentGroupWhereInput | StudentGroupWhereInput[]
    OR?: StudentGroupWhereInput[]
    NOT?: StudentGroupWhereInput | StudentGroupWhereInput[]
    id?: IntFilter<"StudentGroup"> | number
    studentId?: IntFilter<"StudentGroup"> | number
    groupId?: IntFilter<"StudentGroup"> | number
    branchId?: IntFilter<"StudentGroup"> | number
    status?: EnumStatusFilter<"StudentGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"StudentGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentGroup"> | Date | string
    updatedAt?: DateTimeNullableFilter<"StudentGroup"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    history?: StudentGroupHistoryListRelationFilter
  }

  export type StudentGroupOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    history?: StudentGroupHistoryOrderByRelationAggregateInput
  }

  export type StudentGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_groupId_branchId?: StudentGroupStudentIdGroupIdBranchIdCompoundUniqueInput
    AND?: StudentGroupWhereInput | StudentGroupWhereInput[]
    OR?: StudentGroupWhereInput[]
    NOT?: StudentGroupWhereInput | StudentGroupWhereInput[]
    studentId?: IntFilter<"StudentGroup"> | number
    groupId?: IntFilter<"StudentGroup"> | number
    branchId?: IntFilter<"StudentGroup"> | number
    status?: EnumStatusFilter<"StudentGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"StudentGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentGroup"> | Date | string
    updatedAt?: DateTimeNullableFilter<"StudentGroup"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    history?: StudentGroupHistoryListRelationFilter
  }, "id" | "studentId_groupId_branchId">

  export type StudentGroupOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StudentGroupCountOrderByAggregateInput
    _avg?: StudentGroupAvgOrderByAggregateInput
    _max?: StudentGroupMaxOrderByAggregateInput
    _min?: StudentGroupMinOrderByAggregateInput
    _sum?: StudentGroupSumOrderByAggregateInput
  }

  export type StudentGroupScalarWhereWithAggregatesInput = {
    AND?: StudentGroupScalarWhereWithAggregatesInput | StudentGroupScalarWhereWithAggregatesInput[]
    OR?: StudentGroupScalarWhereWithAggregatesInput[]
    NOT?: StudentGroupScalarWhereWithAggregatesInput | StudentGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentGroup"> | number
    studentId?: IntWithAggregatesFilter<"StudentGroup"> | number
    groupId?: IntWithAggregatesFilter<"StudentGroup"> | number
    branchId?: IntWithAggregatesFilter<"StudentGroup"> | number
    status?: EnumStatusWithAggregatesFilter<"StudentGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"StudentGroup"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentGroup"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"StudentGroup"> | Date | string | null
  }

  export type StudentGroupHistoryWhereInput = {
    AND?: StudentGroupHistoryWhereInput | StudentGroupHistoryWhereInput[]
    OR?: StudentGroupHistoryWhereInput[]
    NOT?: StudentGroupHistoryWhereInput | StudentGroupHistoryWhereInput[]
    id?: IntFilter<"StudentGroupHistory"> | number
    studentGroupId?: IntFilter<"StudentGroupHistory"> | number
    studentId?: IntFilter<"StudentGroupHistory"> | number
    groupId?: IntFilter<"StudentGroupHistory"> | number
    event?: EnumEventTypeFilter<"StudentGroupHistory"> | $Enums.EventType
    startDate?: DateTimeFilter<"StudentGroupHistory"> | Date | string
    endDate?: DateTimeNullableFilter<"StudentGroupHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentGroupHistory"> | Date | string
    studentGroup?: XOR<StudentGroupScalarRelationFilter, StudentGroupWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type StudentGroupHistoryOrderByWithRelationInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    studentGroup?: StudentGroupOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type StudentGroupHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentGroupHistoryWhereInput | StudentGroupHistoryWhereInput[]
    OR?: StudentGroupHistoryWhereInput[]
    NOT?: StudentGroupHistoryWhereInput | StudentGroupHistoryWhereInput[]
    studentGroupId?: IntFilter<"StudentGroupHistory"> | number
    studentId?: IntFilter<"StudentGroupHistory"> | number
    groupId?: IntFilter<"StudentGroupHistory"> | number
    event?: EnumEventTypeFilter<"StudentGroupHistory"> | $Enums.EventType
    startDate?: DateTimeFilter<"StudentGroupHistory"> | Date | string
    endDate?: DateTimeNullableFilter<"StudentGroupHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentGroupHistory"> | Date | string
    studentGroup?: XOR<StudentGroupScalarRelationFilter, StudentGroupWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type StudentGroupHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentGroupHistoryCountOrderByAggregateInput
    _avg?: StudentGroupHistoryAvgOrderByAggregateInput
    _max?: StudentGroupHistoryMaxOrderByAggregateInput
    _min?: StudentGroupHistoryMinOrderByAggregateInput
    _sum?: StudentGroupHistorySumOrderByAggregateInput
  }

  export type StudentGroupHistoryScalarWhereWithAggregatesInput = {
    AND?: StudentGroupHistoryScalarWhereWithAggregatesInput | StudentGroupHistoryScalarWhereWithAggregatesInput[]
    OR?: StudentGroupHistoryScalarWhereWithAggregatesInput[]
    NOT?: StudentGroupHistoryScalarWhereWithAggregatesInput | StudentGroupHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentGroupHistory"> | number
    studentGroupId?: IntWithAggregatesFilter<"StudentGroupHistory"> | number
    studentId?: IntWithAggregatesFilter<"StudentGroupHistory"> | number
    groupId?: IntWithAggregatesFilter<"StudentGroupHistory"> | number
    event?: EnumEventTypeWithAggregatesFilter<"StudentGroupHistory"> | $Enums.EventType
    startDate?: DateTimeWithAggregatesFilter<"StudentGroupHistory"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"StudentGroupHistory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentGroupHistory"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    fullName?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    photo?: StringNullableFilter<"Staff"> | string | null
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    branchId?: IntNullableFilter<"Staff"> | number | null
    status?: EnumStatusFilter<"Staff"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    permissions?: PermissionListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photo?: SortOrderInput | SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    fullName?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    photo?: StringNullableFilter<"Staff"> | string | null
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    branchId?: IntNullableFilter<"Staff"> | number | null
    status?: EnumStatusFilter<"Staff"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    permissions?: PermissionListRelationFilter
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photo?: SortOrderInput | SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    status?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    fullName?: StringWithAggregatesFilter<"Staff"> | string
    phone?: StringWithAggregatesFilter<"Staff"> | string
    photo?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    role?: EnumStaffRoleWithAggregatesFilter<"Staff"> | $Enums.StaffRole
    branchId?: IntNullableWithAggregatesFilter<"Staff"> | number | null
    status?: EnumStatusWithAggregatesFilter<"Staff"> | $Enums.Status
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    staffId?: IntFilter<"Permission"> | number
    tableName?: StringFilter<"Permission"> | string
    canRead?: BoolFilter<"Permission"> | boolean
    canWrite?: BoolFilter<"Permission"> | boolean
    canUpdate?: BoolFilter<"Permission"> | boolean
    canDelete?: BoolFilter<"Permission"> | boolean
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    tableName?: SortOrder
    canRead?: SortOrder
    canWrite?: SortOrder
    canUpdate?: SortOrder
    canDelete?: SortOrder
    staff?: StaffOrderByWithRelationInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    staffId_tableName?: PermissionStaffIdTableNameCompoundUniqueInput
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    staffId?: IntFilter<"Permission"> | number
    tableName?: StringFilter<"Permission"> | string
    canRead?: BoolFilter<"Permission"> | boolean
    canWrite?: BoolFilter<"Permission"> | boolean
    canUpdate?: BoolFilter<"Permission"> | boolean
    canDelete?: BoolFilter<"Permission"> | boolean
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "id" | "staffId_tableName">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    tableName?: SortOrder
    canRead?: SortOrder
    canWrite?: SortOrder
    canUpdate?: SortOrder
    canDelete?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    staffId?: IntWithAggregatesFilter<"Permission"> | number
    tableName?: StringWithAggregatesFilter<"Permission"> | string
    canRead?: BoolWithAggregatesFilter<"Permission"> | boolean
    canWrite?: BoolWithAggregatesFilter<"Permission"> | boolean
    canUpdate?: BoolWithAggregatesFilter<"Permission"> | boolean
    canDelete?: BoolWithAggregatesFilter<"Permission"> | boolean
  }

  export type BranchCreateInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    name: string
    capacity: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutRoomsInput
    groups?: GroupCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    name: string
    capacity: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutRoomsNestedInput
    groups?: GroupUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    name: string
    capacity: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutCoursesInput
    groups?: GroupCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutCoursesNestedInput
    groups?: GroupUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    branch: BranchCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    fullName: string
    photo?: string | null
    email: string
    password: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutTeachersInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutTeacherInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    password: string
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutTeacherInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutTeachersNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutTeacherNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutTeacherNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    password: string
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupCreateInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutTeacherGroupsInput
    group: GroupCreateNestedOneWithoutTeachersInput
    branch: BranchCreateNestedOneWithoutTeacherGroupsInput
    history?: TeacherGroupHistoryCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupUncheckedCreateInput = {
    id?: number
    teacherId: number
    branchId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutTeachersNestedInput
    branch?: BranchUpdateOneRequiredWithoutTeacherGroupsNestedInput
    history?: TeacherGroupHistoryUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupCreateManyInput = {
    id?: number
    teacherId: number
    branchId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherGroupUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryCreateInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    teacherGroup: TeacherGroupCreateNestedOneWithoutHistoryInput
    teacher: TeacherCreateNestedOneWithoutTeacherGroupHistoryInput
    group: GroupCreateNestedOneWithoutTeacherGroupHistoryInput
  }

  export type TeacherGroupHistoryUncheckedCreateInput = {
    id?: number
    teacherGroupId: number
    teacherId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupHistoryUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroup?: TeacherGroupUpdateOneRequiredWithoutHistoryNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput
    group?: GroupUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput
  }

  export type TeacherGroupHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherGroupId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryCreateManyInput = {
    id?: number
    teacherGroupId: number
    teacherId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupHistoryUpdateManyMutationInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherGroupId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    groups?: StudentGroupCreateNestedManyWithoutStudentInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    branchId: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: StudentGroupUncheckedCreateNestedManyWithoutStudentInput
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    groups?: StudentGroupUpdateManyWithoutStudentNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    branchId?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: StudentGroupUncheckedUpdateManyWithoutStudentNestedInput
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    branchId: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    branchId?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupCreateInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutStudentsInput
    branch: BranchCreateNestedOneWithoutStudentGroupsInput
    student: StudentCreateNestedOneWithoutGroupsInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupUncheckedCreateInput = {
    id?: number
    studentId: number
    groupId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentGroupsNestedInput
    student?: StudentUpdateOneRequiredWithoutGroupsNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupCreateManyInput = {
    id?: number
    studentId: number
    groupId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type StudentGroupUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentGroupHistoryCreateInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    studentGroup: StudentGroupCreateNestedOneWithoutHistoryInput
    student: StudentCreateNestedOneWithoutHistoryInput
    group: GroupCreateNestedOneWithoutStudentGroupHistoryInput
  }

  export type StudentGroupHistoryUncheckedCreateInput = {
    id?: number
    studentGroupId: number
    studentId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentGroup?: StudentGroupUpdateOneRequiredWithoutHistoryNestedInput
    student?: StudentUpdateOneRequiredWithoutHistoryNestedInput
    group?: GroupUpdateOneRequiredWithoutStudentGroupHistoryNestedInput
  }

  export type StudentGroupHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentGroupId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryCreateManyInput = {
    id?: number
    studentGroupId: number
    studentId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryUpdateManyMutationInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentGroupId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutStaffInput
    permissions?: PermissionCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: number
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    branchId?: number | null
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutStaffNestedInput
    permissions?: PermissionUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: number
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    branchId?: number | null
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    tableName: string
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
    staff: StaffCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    staffId: number
    tableName: string
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }

  export type PermissionUpdateInput = {
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    staff?: StaffUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionCreateManyInput = {
    id?: number
    staffId: number
    tableName: string
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }

  export type PermissionUpdateManyMutationInput = {
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffId?: IntFieldUpdateOperationsInput | number
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type TeacherGroupListRelationFilter = {
    every?: TeacherGroupWhereInput
    some?: TeacherGroupWhereInput
    none?: TeacherGroupWhereInput
  }

  export type StudentGroupListRelationFilter = {
    every?: StudentGroupWhereInput
    some?: StudentGroupWhereInput
    none?: StudentGroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type RoomBranchIdNameCompoundUniqueInput = {
    branchId: number
    name: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    branchId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCourseLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelFilter<$PrismaModel> | $Enums.CourseLevel
  }

  export type CourseBranchIdNameCompoundUniqueInput = {
    branchId: number
    name: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    level?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    branchId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    level?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    level?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    durationHours?: SortOrder
    branchId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCourseLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelWithAggregatesFilter<$PrismaModel> | $Enums.CourseLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseLevelFilter<$PrismaModel>
    _max?: NestedEnumCourseLevelFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type TeacherGroupHistoryListRelationFilter = {
    every?: TeacherGroupHistoryWhereInput
    some?: TeacherGroupHistoryWhereInput
    none?: TeacherGroupHistoryWhereInput
  }

  export type StudentGroupHistoryListRelationFilter = {
    every?: StudentGroupHistoryWhereInput
    some?: StudentGroupHistoryWhereInput
    none?: StudentGroupHistoryWhereInput
  }

  export type TeacherGroupHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentGroupHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupBranchIdNameCompoundUniqueInput = {
    branchId: number
    name: string
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
    startDate?: SortOrder
    startLesson?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
    startDate?: SortOrder
    startLesson?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
    startDate?: SortOrder
    startLesson?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    roomId?: SortOrder
    courseId?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    password?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    password?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    password?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type TeacherGroupTeacherIdGroupIdBranchIdCompoundUniqueInput = {
    teacherId: number
    groupId: number
    branchId: number
  }

  export type TeacherGroupCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
  }

  export type TeacherGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherGroupMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherGroupSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    branchId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type TeacherGroupScalarRelationFilter = {
    is?: TeacherGroupWhereInput
    isNot?: TeacherGroupWhereInput
  }

  export type TeacherGroupHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherGroupHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
  }

  export type TeacherGroupHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherGroupHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherGroupHistorySumOrderByAggregateInput = {
    id?: SortOrder
    teacherGroupId?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentGroupStudentIdGroupIdBranchIdCompoundUniqueInput = {
    studentId: number
    groupId: number
    branchId: number
  }

  export type StudentGroupCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
  }

  export type StudentGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentGroupMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentGroupSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    branchId?: SortOrder
  }

  export type StudentGroupScalarRelationFilter = {
    is?: StudentGroupWhereInput
    isNot?: StudentGroupWhereInput
  }

  export type StudentGroupHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentGroupHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type StudentGroupHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentGroupHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    event?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentGroupHistorySumOrderByAggregateInput = {
    id?: SortOrder
    studentGroupId?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    status?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type EnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type PermissionStaffIdTableNameCompoundUniqueInput = {
    staffId: number
    tableName: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tableName?: SortOrder
    canRead?: SortOrder
    canWrite?: SortOrder
    canUpdate?: SortOrder
    canDelete?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tableName?: SortOrder
    canRead?: SortOrder
    canWrite?: SortOrder
    canUpdate?: SortOrder
    canDelete?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tableName?: SortOrder
    canRead?: SortOrder
    canWrite?: SortOrder
    canUpdate?: SortOrder
    canDelete?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomCreateNestedManyWithoutBranchInput = {
    create?: XOR<RoomCreateWithoutBranchInput, RoomUncheckedCreateWithoutBranchInput> | RoomCreateWithoutBranchInput[] | RoomUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutBranchInput | RoomCreateOrConnectWithoutBranchInput[]
    createMany?: RoomCreateManyBranchInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type TeacherCreateNestedManyWithoutBranchInput = {
    create?: XOR<TeacherCreateWithoutBranchInput, TeacherUncheckedCreateWithoutBranchInput> | TeacherCreateWithoutBranchInput[] | TeacherUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutBranchInput | TeacherCreateOrConnectWithoutBranchInput[]
    createMany?: TeacherCreateManyBranchInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutBranchInput = {
    create?: XOR<GroupCreateWithoutBranchInput, GroupUncheckedCreateWithoutBranchInput> | GroupCreateWithoutBranchInput[] | GroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutBranchInput | GroupCreateOrConnectWithoutBranchInput[]
    createMany?: GroupCreateManyBranchInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutBranchInput = {
    create?: XOR<StaffCreateWithoutBranchInput, StaffUncheckedCreateWithoutBranchInput> | StaffCreateWithoutBranchInput[] | StaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutBranchInput | StaffCreateOrConnectWithoutBranchInput[]
    createMany?: StaffCreateManyBranchInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type TeacherGroupCreateNestedManyWithoutBranchInput = {
    create?: XOR<TeacherGroupCreateWithoutBranchInput, TeacherGroupUncheckedCreateWithoutBranchInput> | TeacherGroupCreateWithoutBranchInput[] | TeacherGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutBranchInput | TeacherGroupCreateOrConnectWithoutBranchInput[]
    createMany?: TeacherGroupCreateManyBranchInputEnvelope
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
  }

  export type StudentGroupCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentGroupCreateWithoutBranchInput, StudentGroupUncheckedCreateWithoutBranchInput> | StudentGroupCreateWithoutBranchInput[] | StudentGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutBranchInput | StudentGroupCreateOrConnectWithoutBranchInput[]
    createMany?: StudentGroupCreateManyBranchInputEnvelope
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<RoomCreateWithoutBranchInput, RoomUncheckedCreateWithoutBranchInput> | RoomCreateWithoutBranchInput[] | RoomUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutBranchInput | RoomCreateOrConnectWithoutBranchInput[]
    createMany?: RoomCreateManyBranchInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<TeacherCreateWithoutBranchInput, TeacherUncheckedCreateWithoutBranchInput> | TeacherCreateWithoutBranchInput[] | TeacherUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutBranchInput | TeacherCreateOrConnectWithoutBranchInput[]
    createMany?: TeacherCreateManyBranchInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<GroupCreateWithoutBranchInput, GroupUncheckedCreateWithoutBranchInput> | GroupCreateWithoutBranchInput[] | GroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutBranchInput | GroupCreateOrConnectWithoutBranchInput[]
    createMany?: GroupCreateManyBranchInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StaffCreateWithoutBranchInput, StaffUncheckedCreateWithoutBranchInput> | StaffCreateWithoutBranchInput[] | StaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutBranchInput | StaffCreateOrConnectWithoutBranchInput[]
    createMany?: StaffCreateManyBranchInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type TeacherGroupUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<TeacherGroupCreateWithoutBranchInput, TeacherGroupUncheckedCreateWithoutBranchInput> | TeacherGroupCreateWithoutBranchInput[] | TeacherGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutBranchInput | TeacherGroupCreateOrConnectWithoutBranchInput[]
    createMany?: TeacherGroupCreateManyBranchInputEnvelope
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
  }

  export type StudentGroupUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentGroupCreateWithoutBranchInput, StudentGroupUncheckedCreateWithoutBranchInput> | StudentGroupCreateWithoutBranchInput[] | StudentGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutBranchInput | StudentGroupCreateOrConnectWithoutBranchInput[]
    createMany?: StudentGroupCreateManyBranchInputEnvelope
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateManyWithoutBranchNestedInput = {
    create?: XOR<RoomCreateWithoutBranchInput, RoomUncheckedCreateWithoutBranchInput> | RoomCreateWithoutBranchInput[] | RoomUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutBranchInput | RoomCreateOrConnectWithoutBranchInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutBranchInput | RoomUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: RoomCreateManyBranchInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutBranchInput | RoomUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutBranchInput | RoomUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type TeacherUpdateManyWithoutBranchNestedInput = {
    create?: XOR<TeacherCreateWithoutBranchInput, TeacherUncheckedCreateWithoutBranchInput> | TeacherCreateWithoutBranchInput[] | TeacherUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutBranchInput | TeacherCreateOrConnectWithoutBranchInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutBranchInput | TeacherUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: TeacherCreateManyBranchInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutBranchInput | TeacherUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutBranchInput | TeacherUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutBranchInput | CourseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutBranchInput | CourseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutBranchInput | CourseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutBranchNestedInput = {
    create?: XOR<GroupCreateWithoutBranchInput, GroupUncheckedCreateWithoutBranchInput> | GroupCreateWithoutBranchInput[] | GroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutBranchInput | GroupCreateOrConnectWithoutBranchInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutBranchInput | GroupUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: GroupCreateManyBranchInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutBranchInput | GroupUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutBranchInput | GroupUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBranchInput | StudentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBranchInput | StudentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBranchInput | StudentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StaffCreateWithoutBranchInput, StaffUncheckedCreateWithoutBranchInput> | StaffCreateWithoutBranchInput[] | StaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutBranchInput | StaffCreateOrConnectWithoutBranchInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutBranchInput | StaffUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StaffCreateManyBranchInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutBranchInput | StaffUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutBranchInput | StaffUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type TeacherGroupUpdateManyWithoutBranchNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutBranchInput, TeacherGroupUncheckedCreateWithoutBranchInput> | TeacherGroupCreateWithoutBranchInput[] | TeacherGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutBranchInput | TeacherGroupCreateOrConnectWithoutBranchInput[]
    upsert?: TeacherGroupUpsertWithWhereUniqueWithoutBranchInput | TeacherGroupUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: TeacherGroupCreateManyBranchInputEnvelope
    set?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    disconnect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    delete?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    update?: TeacherGroupUpdateWithWhereUniqueWithoutBranchInput | TeacherGroupUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: TeacherGroupUpdateManyWithWhereWithoutBranchInput | TeacherGroupUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
  }

  export type StudentGroupUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentGroupCreateWithoutBranchInput, StudentGroupUncheckedCreateWithoutBranchInput> | StudentGroupCreateWithoutBranchInput[] | StudentGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutBranchInput | StudentGroupCreateOrConnectWithoutBranchInput[]
    upsert?: StudentGroupUpsertWithWhereUniqueWithoutBranchInput | StudentGroupUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentGroupCreateManyBranchInputEnvelope
    set?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    disconnect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    delete?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    update?: StudentGroupUpdateWithWhereUniqueWithoutBranchInput | StudentGroupUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentGroupUpdateManyWithWhereWithoutBranchInput | StudentGroupUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<RoomCreateWithoutBranchInput, RoomUncheckedCreateWithoutBranchInput> | RoomCreateWithoutBranchInput[] | RoomUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutBranchInput | RoomCreateOrConnectWithoutBranchInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutBranchInput | RoomUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: RoomCreateManyBranchInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutBranchInput | RoomUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutBranchInput | RoomUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<TeacherCreateWithoutBranchInput, TeacherUncheckedCreateWithoutBranchInput> | TeacherCreateWithoutBranchInput[] | TeacherUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutBranchInput | TeacherCreateOrConnectWithoutBranchInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutBranchInput | TeacherUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: TeacherCreateManyBranchInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutBranchInput | TeacherUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutBranchInput | TeacherUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutBranchInput | CourseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutBranchInput | CourseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutBranchInput | CourseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<GroupCreateWithoutBranchInput, GroupUncheckedCreateWithoutBranchInput> | GroupCreateWithoutBranchInput[] | GroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutBranchInput | GroupCreateOrConnectWithoutBranchInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutBranchInput | GroupUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: GroupCreateManyBranchInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutBranchInput | GroupUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutBranchInput | GroupUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBranchInput | StudentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBranchInput | StudentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBranchInput | StudentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StaffCreateWithoutBranchInput, StaffUncheckedCreateWithoutBranchInput> | StaffCreateWithoutBranchInput[] | StaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutBranchInput | StaffCreateOrConnectWithoutBranchInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutBranchInput | StaffUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StaffCreateManyBranchInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutBranchInput | StaffUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutBranchInput | StaffUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutBranchInput, TeacherGroupUncheckedCreateWithoutBranchInput> | TeacherGroupCreateWithoutBranchInput[] | TeacherGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutBranchInput | TeacherGroupCreateOrConnectWithoutBranchInput[]
    upsert?: TeacherGroupUpsertWithWhereUniqueWithoutBranchInput | TeacherGroupUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: TeacherGroupCreateManyBranchInputEnvelope
    set?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    disconnect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    delete?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    update?: TeacherGroupUpdateWithWhereUniqueWithoutBranchInput | TeacherGroupUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: TeacherGroupUpdateManyWithWhereWithoutBranchInput | TeacherGroupUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
  }

  export type StudentGroupUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentGroupCreateWithoutBranchInput, StudentGroupUncheckedCreateWithoutBranchInput> | StudentGroupCreateWithoutBranchInput[] | StudentGroupUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutBranchInput | StudentGroupCreateOrConnectWithoutBranchInput[]
    upsert?: StudentGroupUpsertWithWhereUniqueWithoutBranchInput | StudentGroupUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentGroupCreateManyBranchInputEnvelope
    set?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    disconnect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    delete?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    update?: StudentGroupUpdateWithWhereUniqueWithoutBranchInput | StudentGroupUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentGroupUpdateManyWithWhereWithoutBranchInput | StudentGroupUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutRoomsInput = {
    create?: XOR<BranchCreateWithoutRoomsInput, BranchUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutRoomsInput
    connect?: BranchWhereUniqueInput
  }

  export type GroupCreateNestedManyWithoutRoomInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput> | GroupCreateWithoutRoomInput[] | GroupUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput | GroupCreateOrConnectWithoutRoomInput[]
    createMany?: GroupCreateManyRoomInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput> | GroupCreateWithoutRoomInput[] | GroupUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput | GroupCreateOrConnectWithoutRoomInput[]
    createMany?: GroupCreateManyRoomInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BranchUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<BranchCreateWithoutRoomsInput, BranchUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutRoomsInput
    upsert?: BranchUpsertWithoutRoomsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutRoomsInput, BranchUpdateWithoutRoomsInput>, BranchUncheckedUpdateWithoutRoomsInput>
  }

  export type GroupUpdateManyWithoutRoomNestedInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput> | GroupCreateWithoutRoomInput[] | GroupUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput | GroupCreateOrConnectWithoutRoomInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutRoomInput | GroupUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: GroupCreateManyRoomInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutRoomInput | GroupUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutRoomInput | GroupUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput> | GroupCreateWithoutRoomInput[] | GroupUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutRoomInput | GroupCreateOrConnectWithoutRoomInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutRoomInput | GroupUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: GroupCreateManyRoomInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutRoomInput | GroupUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutRoomInput | GroupUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutCoursesInput = {
    create?: XOR<BranchCreateWithoutCoursesInput, BranchUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCoursesInput
    connect?: BranchWhereUniqueInput
  }

  export type GroupCreateNestedManyWithoutCourseInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCourseLevelFieldUpdateOperationsInput = {
    set?: $Enums.CourseLevel
  }

  export type BranchUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<BranchCreateWithoutCoursesInput, BranchUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCoursesInput
    upsert?: BranchUpsertWithoutCoursesInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutCoursesInput, BranchUpdateWithoutCoursesInput>, BranchUncheckedUpdateWithoutCoursesInput>
  }

  export type GroupUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCourseInput | GroupUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCourseInput | GroupUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCourseInput | GroupUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCourseInput | GroupUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCourseInput | GroupUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCourseInput | GroupUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutGroupsInput = {
    create?: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGroupsInput
    connect?: CourseWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutGroupsInput = {
    create?: XOR<BranchCreateWithoutGroupsInput, BranchUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutGroupsInput
    connect?: BranchWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutGroupsInput = {
    create?: XOR<RoomCreateWithoutGroupsInput, RoomUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutGroupsInput
    connect?: RoomWhereUniqueInput
  }

  export type TeacherGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<TeacherGroupCreateWithoutGroupInput, TeacherGroupUncheckedCreateWithoutGroupInput> | TeacherGroupCreateWithoutGroupInput[] | TeacherGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutGroupInput | TeacherGroupCreateOrConnectWithoutGroupInput[]
    createMany?: TeacherGroupCreateManyGroupInputEnvelope
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
  }

  export type StudentGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentGroupCreateWithoutGroupInput, StudentGroupUncheckedCreateWithoutGroupInput> | StudentGroupCreateWithoutGroupInput[] | StudentGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutGroupInput | StudentGroupCreateOrConnectWithoutGroupInput[]
    createMany?: StudentGroupCreateManyGroupInputEnvelope
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
  }

  export type TeacherGroupHistoryCreateNestedManyWithoutGroupInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutGroupInput, TeacherGroupHistoryUncheckedCreateWithoutGroupInput> | TeacherGroupHistoryCreateWithoutGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutGroupInput | TeacherGroupHistoryCreateOrConnectWithoutGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyGroupInputEnvelope
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
  }

  export type StudentGroupHistoryCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutGroupInput, StudentGroupHistoryUncheckedCreateWithoutGroupInput> | StudentGroupHistoryCreateWithoutGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutGroupInput | StudentGroupHistoryCreateOrConnectWithoutGroupInput[]
    createMany?: StudentGroupHistoryCreateManyGroupInputEnvelope
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
  }

  export type TeacherGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TeacherGroupCreateWithoutGroupInput, TeacherGroupUncheckedCreateWithoutGroupInput> | TeacherGroupCreateWithoutGroupInput[] | TeacherGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutGroupInput | TeacherGroupCreateOrConnectWithoutGroupInput[]
    createMany?: TeacherGroupCreateManyGroupInputEnvelope
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
  }

  export type StudentGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentGroupCreateWithoutGroupInput, StudentGroupUncheckedCreateWithoutGroupInput> | StudentGroupCreateWithoutGroupInput[] | StudentGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutGroupInput | StudentGroupCreateOrConnectWithoutGroupInput[]
    createMany?: StudentGroupCreateManyGroupInputEnvelope
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
  }

  export type TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutGroupInput, TeacherGroupHistoryUncheckedCreateWithoutGroupInput> | TeacherGroupHistoryCreateWithoutGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutGroupInput | TeacherGroupHistoryCreateOrConnectWithoutGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyGroupInputEnvelope
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
  }

  export type StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutGroupInput, StudentGroupHistoryUncheckedCreateWithoutGroupInput> | StudentGroupHistoryCreateWithoutGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutGroupInput | StudentGroupHistoryCreateOrConnectWithoutGroupInput[]
    createMany?: StudentGroupHistoryCreateManyGroupInputEnvelope
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGroupsInput
    upsert?: CourseUpsertWithoutGroupsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutGroupsInput, CourseUpdateWithoutGroupsInput>, CourseUncheckedUpdateWithoutGroupsInput>
  }

  export type BranchUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<BranchCreateWithoutGroupsInput, BranchUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutGroupsInput
    upsert?: BranchUpsertWithoutGroupsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutGroupsInput, BranchUpdateWithoutGroupsInput>, BranchUncheckedUpdateWithoutGroupsInput>
  }

  export type RoomUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<RoomCreateWithoutGroupsInput, RoomUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutGroupsInput
    upsert?: RoomUpsertWithoutGroupsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutGroupsInput, RoomUpdateWithoutGroupsInput>, RoomUncheckedUpdateWithoutGroupsInput>
  }

  export type TeacherGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutGroupInput, TeacherGroupUncheckedCreateWithoutGroupInput> | TeacherGroupCreateWithoutGroupInput[] | TeacherGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutGroupInput | TeacherGroupCreateOrConnectWithoutGroupInput[]
    upsert?: TeacherGroupUpsertWithWhereUniqueWithoutGroupInput | TeacherGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TeacherGroupCreateManyGroupInputEnvelope
    set?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    disconnect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    delete?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    update?: TeacherGroupUpdateWithWhereUniqueWithoutGroupInput | TeacherGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TeacherGroupUpdateManyWithWhereWithoutGroupInput | TeacherGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
  }

  export type StudentGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentGroupCreateWithoutGroupInput, StudentGroupUncheckedCreateWithoutGroupInput> | StudentGroupCreateWithoutGroupInput[] | StudentGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutGroupInput | StudentGroupCreateOrConnectWithoutGroupInput[]
    upsert?: StudentGroupUpsertWithWhereUniqueWithoutGroupInput | StudentGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentGroupCreateManyGroupInputEnvelope
    set?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    disconnect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    delete?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    update?: StudentGroupUpdateWithWhereUniqueWithoutGroupInput | StudentGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentGroupUpdateManyWithWhereWithoutGroupInput | StudentGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
  }

  export type TeacherGroupHistoryUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutGroupInput, TeacherGroupHistoryUncheckedCreateWithoutGroupInput> | TeacherGroupHistoryCreateWithoutGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutGroupInput | TeacherGroupHistoryCreateOrConnectWithoutGroupInput[]
    upsert?: TeacherGroupHistoryUpsertWithWhereUniqueWithoutGroupInput | TeacherGroupHistoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyGroupInputEnvelope
    set?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    disconnect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    delete?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    update?: TeacherGroupHistoryUpdateWithWhereUniqueWithoutGroupInput | TeacherGroupHistoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TeacherGroupHistoryUpdateManyWithWhereWithoutGroupInput | TeacherGroupHistoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
  }

  export type StudentGroupHistoryUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutGroupInput, StudentGroupHistoryUncheckedCreateWithoutGroupInput> | StudentGroupHistoryCreateWithoutGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutGroupInput | StudentGroupHistoryCreateOrConnectWithoutGroupInput[]
    upsert?: StudentGroupHistoryUpsertWithWhereUniqueWithoutGroupInput | StudentGroupHistoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentGroupHistoryCreateManyGroupInputEnvelope
    set?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    disconnect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    delete?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    update?: StudentGroupHistoryUpdateWithWhereUniqueWithoutGroupInput | StudentGroupHistoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentGroupHistoryUpdateManyWithWhereWithoutGroupInput | StudentGroupHistoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
  }

  export type TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutGroupInput, TeacherGroupUncheckedCreateWithoutGroupInput> | TeacherGroupCreateWithoutGroupInput[] | TeacherGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutGroupInput | TeacherGroupCreateOrConnectWithoutGroupInput[]
    upsert?: TeacherGroupUpsertWithWhereUniqueWithoutGroupInput | TeacherGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TeacherGroupCreateManyGroupInputEnvelope
    set?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    disconnect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    delete?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    update?: TeacherGroupUpdateWithWhereUniqueWithoutGroupInput | TeacherGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TeacherGroupUpdateManyWithWhereWithoutGroupInput | TeacherGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
  }

  export type StudentGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentGroupCreateWithoutGroupInput, StudentGroupUncheckedCreateWithoutGroupInput> | StudentGroupCreateWithoutGroupInput[] | StudentGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutGroupInput | StudentGroupCreateOrConnectWithoutGroupInput[]
    upsert?: StudentGroupUpsertWithWhereUniqueWithoutGroupInput | StudentGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentGroupCreateManyGroupInputEnvelope
    set?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    disconnect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    delete?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    update?: StudentGroupUpdateWithWhereUniqueWithoutGroupInput | StudentGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentGroupUpdateManyWithWhereWithoutGroupInput | StudentGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
  }

  export type TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutGroupInput, TeacherGroupHistoryUncheckedCreateWithoutGroupInput> | TeacherGroupHistoryCreateWithoutGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutGroupInput | TeacherGroupHistoryCreateOrConnectWithoutGroupInput[]
    upsert?: TeacherGroupHistoryUpsertWithWhereUniqueWithoutGroupInput | TeacherGroupHistoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyGroupInputEnvelope
    set?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    disconnect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    delete?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    update?: TeacherGroupHistoryUpdateWithWhereUniqueWithoutGroupInput | TeacherGroupHistoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TeacherGroupHistoryUpdateManyWithWhereWithoutGroupInput | TeacherGroupHistoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
  }

  export type StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutGroupInput, StudentGroupHistoryUncheckedCreateWithoutGroupInput> | StudentGroupHistoryCreateWithoutGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutGroupInput | StudentGroupHistoryCreateOrConnectWithoutGroupInput[]
    upsert?: StudentGroupHistoryUpsertWithWhereUniqueWithoutGroupInput | StudentGroupHistoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentGroupHistoryCreateManyGroupInputEnvelope
    set?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    disconnect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    delete?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    update?: StudentGroupHistoryUpdateWithWhereUniqueWithoutGroupInput | StudentGroupHistoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentGroupHistoryUpdateManyWithWhereWithoutGroupInput | StudentGroupHistoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutTeachersInput = {
    create?: XOR<BranchCreateWithoutTeachersInput, BranchUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutTeachersInput
    connect?: BranchWhereUniqueInput
  }

  export type TeacherGroupCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherGroupCreateWithoutTeacherInput, TeacherGroupUncheckedCreateWithoutTeacherInput> | TeacherGroupCreateWithoutTeacherInput[] | TeacherGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutTeacherInput | TeacherGroupCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherGroupCreateManyTeacherInputEnvelope
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
  }

  export type TeacherGroupHistoryCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherInput> | TeacherGroupHistoryCreateWithoutTeacherInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherInputEnvelope
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
  }

  export type TeacherGroupUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherGroupCreateWithoutTeacherInput, TeacherGroupUncheckedCreateWithoutTeacherInput> | TeacherGroupCreateWithoutTeacherInput[] | TeacherGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutTeacherInput | TeacherGroupCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherGroupCreateManyTeacherInputEnvelope
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
  }

  export type TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherInput> | TeacherGroupHistoryCreateWithoutTeacherInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherInputEnvelope
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<BranchCreateWithoutTeachersInput, BranchUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutTeachersInput
    upsert?: BranchUpsertWithoutTeachersInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutTeachersInput, BranchUpdateWithoutTeachersInput>, BranchUncheckedUpdateWithoutTeachersInput>
  }

  export type TeacherGroupUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutTeacherInput, TeacherGroupUncheckedCreateWithoutTeacherInput> | TeacherGroupCreateWithoutTeacherInput[] | TeacherGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutTeacherInput | TeacherGroupCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherGroupUpsertWithWhereUniqueWithoutTeacherInput | TeacherGroupUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherGroupCreateManyTeacherInputEnvelope
    set?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    disconnect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    delete?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    update?: TeacherGroupUpdateWithWhereUniqueWithoutTeacherInput | TeacherGroupUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherGroupUpdateManyWithWhereWithoutTeacherInput | TeacherGroupUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
  }

  export type TeacherGroupHistoryUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherInput> | TeacherGroupHistoryCreateWithoutTeacherInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherInput | TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherInputEnvelope
    set?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    disconnect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    delete?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    update?: TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherInput | TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherInput | TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
  }

  export type TeacherGroupUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutTeacherInput, TeacherGroupUncheckedCreateWithoutTeacherInput> | TeacherGroupCreateWithoutTeacherInput[] | TeacherGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutTeacherInput | TeacherGroupCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherGroupUpsertWithWhereUniqueWithoutTeacherInput | TeacherGroupUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherGroupCreateManyTeacherInputEnvelope
    set?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    disconnect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    delete?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    connect?: TeacherGroupWhereUniqueInput | TeacherGroupWhereUniqueInput[]
    update?: TeacherGroupUpdateWithWhereUniqueWithoutTeacherInput | TeacherGroupUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherGroupUpdateManyWithWhereWithoutTeacherInput | TeacherGroupUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
  }

  export type TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherInput> | TeacherGroupHistoryCreateWithoutTeacherInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherInput | TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherInputEnvelope
    set?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    disconnect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    delete?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    update?: TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherInput | TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherInput | TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutTeacherGroupsInput = {
    create?: XOR<TeacherCreateWithoutTeacherGroupsInput, TeacherUncheckedCreateWithoutTeacherGroupsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTeacherGroupsInput
    connect?: TeacherWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutTeachersInput = {
    create?: XOR<GroupCreateWithoutTeachersInput, GroupUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTeachersInput
    connect?: GroupWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutTeacherGroupsInput = {
    create?: XOR<BranchCreateWithoutTeacherGroupsInput, BranchUncheckedCreateWithoutTeacherGroupsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutTeacherGroupsInput
    connect?: BranchWhereUniqueInput
  }

  export type TeacherGroupHistoryCreateNestedManyWithoutTeacherGroupInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput> | TeacherGroupHistoryCreateWithoutTeacherGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherGroupInputEnvelope
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
  }

  export type TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherGroupInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput> | TeacherGroupHistoryCreateWithoutTeacherGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherGroupInputEnvelope
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
  }

  export type TeacherUpdateOneRequiredWithoutTeacherGroupsNestedInput = {
    create?: XOR<TeacherCreateWithoutTeacherGroupsInput, TeacherUncheckedCreateWithoutTeacherGroupsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTeacherGroupsInput
    upsert?: TeacherUpsertWithoutTeacherGroupsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutTeacherGroupsInput, TeacherUpdateWithoutTeacherGroupsInput>, TeacherUncheckedUpdateWithoutTeacherGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<GroupCreateWithoutTeachersInput, GroupUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTeachersInput
    upsert?: GroupUpsertWithoutTeachersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTeachersInput, GroupUpdateWithoutTeachersInput>, GroupUncheckedUpdateWithoutTeachersInput>
  }

  export type BranchUpdateOneRequiredWithoutTeacherGroupsNestedInput = {
    create?: XOR<BranchCreateWithoutTeacherGroupsInput, BranchUncheckedCreateWithoutTeacherGroupsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutTeacherGroupsInput
    upsert?: BranchUpsertWithoutTeacherGroupsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutTeacherGroupsInput, BranchUpdateWithoutTeacherGroupsInput>, BranchUncheckedUpdateWithoutTeacherGroupsInput>
  }

  export type TeacherGroupHistoryUpdateManyWithoutTeacherGroupNestedInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput> | TeacherGroupHistoryCreateWithoutTeacherGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput[]
    upsert?: TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherGroupInput | TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherGroupInputEnvelope
    set?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    disconnect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    delete?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    update?: TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherGroupInput | TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherGroupInput[]
    updateMany?: TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherGroupInput | TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherGroupInput[]
    deleteMany?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
  }

  export type TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupNestedInput = {
    create?: XOR<TeacherGroupHistoryCreateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput> | TeacherGroupHistoryCreateWithoutTeacherGroupInput[] | TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput[]
    connectOrCreate?: TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput | TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput[]
    upsert?: TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherGroupInput | TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherGroupInput[]
    createMany?: TeacherGroupHistoryCreateManyTeacherGroupInputEnvelope
    set?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    disconnect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    delete?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    connect?: TeacherGroupHistoryWhereUniqueInput | TeacherGroupHistoryWhereUniqueInput[]
    update?: TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherGroupInput | TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherGroupInput[]
    updateMany?: TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherGroupInput | TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherGroupInput[]
    deleteMany?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
  }

  export type TeacherGroupCreateNestedOneWithoutHistoryInput = {
    create?: XOR<TeacherGroupCreateWithoutHistoryInput, TeacherGroupUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutHistoryInput
    connect?: TeacherGroupWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutTeacherGroupHistoryInput = {
    create?: XOR<TeacherCreateWithoutTeacherGroupHistoryInput, TeacherUncheckedCreateWithoutTeacherGroupHistoryInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTeacherGroupHistoryInput
    connect?: TeacherWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutTeacherGroupHistoryInput = {
    create?: XOR<GroupCreateWithoutTeacherGroupHistoryInput, GroupUncheckedCreateWithoutTeacherGroupHistoryInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTeacherGroupHistoryInput
    connect?: GroupWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type TeacherGroupUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<TeacherGroupCreateWithoutHistoryInput, TeacherGroupUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TeacherGroupCreateOrConnectWithoutHistoryInput
    upsert?: TeacherGroupUpsertWithoutHistoryInput
    connect?: TeacherGroupWhereUniqueInput
    update?: XOR<XOR<TeacherGroupUpdateToOneWithWhereWithoutHistoryInput, TeacherGroupUpdateWithoutHistoryInput>, TeacherGroupUncheckedUpdateWithoutHistoryInput>
  }

  export type TeacherUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput = {
    create?: XOR<TeacherCreateWithoutTeacherGroupHistoryInput, TeacherUncheckedCreateWithoutTeacherGroupHistoryInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTeacherGroupHistoryInput
    upsert?: TeacherUpsertWithoutTeacherGroupHistoryInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutTeacherGroupHistoryInput, TeacherUpdateWithoutTeacherGroupHistoryInput>, TeacherUncheckedUpdateWithoutTeacherGroupHistoryInput>
  }

  export type GroupUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput = {
    create?: XOR<GroupCreateWithoutTeacherGroupHistoryInput, GroupUncheckedCreateWithoutTeacherGroupHistoryInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTeacherGroupHistoryInput
    upsert?: GroupUpsertWithoutTeacherGroupHistoryInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTeacherGroupHistoryInput, GroupUpdateWithoutTeacherGroupHistoryInput>, GroupUncheckedUpdateWithoutTeacherGroupHistoryInput>
  }

  export type BranchCreateNestedOneWithoutStudentsInput = {
    create?: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentsInput
    connect?: BranchWhereUniqueInput
  }

  export type StudentGroupCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentGroupCreateWithoutStudentInput, StudentGroupUncheckedCreateWithoutStudentInput> | StudentGroupCreateWithoutStudentInput[] | StudentGroupUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutStudentInput | StudentGroupCreateOrConnectWithoutStudentInput[]
    createMany?: StudentGroupCreateManyStudentInputEnvelope
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
  }

  export type StudentGroupHistoryCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentInput, StudentGroupHistoryUncheckedCreateWithoutStudentInput> | StudentGroupHistoryCreateWithoutStudentInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentInput | StudentGroupHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentGroupHistoryCreateManyStudentInputEnvelope
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
  }

  export type StudentGroupUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentGroupCreateWithoutStudentInput, StudentGroupUncheckedCreateWithoutStudentInput> | StudentGroupCreateWithoutStudentInput[] | StudentGroupUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutStudentInput | StudentGroupCreateOrConnectWithoutStudentInput[]
    createMany?: StudentGroupCreateManyStudentInputEnvelope
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
  }

  export type StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentInput, StudentGroupHistoryUncheckedCreateWithoutStudentInput> | StudentGroupHistoryCreateWithoutStudentInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentInput | StudentGroupHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentGroupHistoryCreateManyStudentInputEnvelope
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentsInput
    upsert?: BranchUpsertWithoutStudentsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStudentsInput, BranchUpdateWithoutStudentsInput>, BranchUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentGroupUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentGroupCreateWithoutStudentInput, StudentGroupUncheckedCreateWithoutStudentInput> | StudentGroupCreateWithoutStudentInput[] | StudentGroupUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutStudentInput | StudentGroupCreateOrConnectWithoutStudentInput[]
    upsert?: StudentGroupUpsertWithWhereUniqueWithoutStudentInput | StudentGroupUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentGroupCreateManyStudentInputEnvelope
    set?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    disconnect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    delete?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    update?: StudentGroupUpdateWithWhereUniqueWithoutStudentInput | StudentGroupUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentGroupUpdateManyWithWhereWithoutStudentInput | StudentGroupUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
  }

  export type StudentGroupHistoryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentInput, StudentGroupHistoryUncheckedCreateWithoutStudentInput> | StudentGroupHistoryCreateWithoutStudentInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentInput | StudentGroupHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentGroupHistoryCreateManyStudentInputEnvelope
    set?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    disconnect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    delete?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    update?: StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentGroupHistoryUpdateManyWithWhereWithoutStudentInput | StudentGroupHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
  }

  export type StudentGroupUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentGroupCreateWithoutStudentInput, StudentGroupUncheckedCreateWithoutStudentInput> | StudentGroupCreateWithoutStudentInput[] | StudentGroupUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupCreateOrConnectWithoutStudentInput | StudentGroupCreateOrConnectWithoutStudentInput[]
    upsert?: StudentGroupUpsertWithWhereUniqueWithoutStudentInput | StudentGroupUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentGroupCreateManyStudentInputEnvelope
    set?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    disconnect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    delete?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    connect?: StudentGroupWhereUniqueInput | StudentGroupWhereUniqueInput[]
    update?: StudentGroupUpdateWithWhereUniqueWithoutStudentInput | StudentGroupUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentGroupUpdateManyWithWhereWithoutStudentInput | StudentGroupUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
  }

  export type StudentGroupHistoryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentInput, StudentGroupHistoryUncheckedCreateWithoutStudentInput> | StudentGroupHistoryCreateWithoutStudentInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentInput | StudentGroupHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentGroupHistoryCreateManyStudentInputEnvelope
    set?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    disconnect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    delete?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    update?: StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentGroupHistoryUpdateManyWithWhereWithoutStudentInput | StudentGroupHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    connect?: GroupWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutStudentGroupsInput = {
    create?: XOR<BranchCreateWithoutStudentGroupsInput, BranchUncheckedCreateWithoutStudentGroupsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentGroupsInput
    connect?: BranchWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutGroupsInput = {
    create?: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupsInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentGroupHistoryCreateNestedManyWithoutStudentGroupInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentGroupInput, StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput> | StudentGroupHistoryCreateWithoutStudentGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput | StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput[]
    createMany?: StudentGroupHistoryCreateManyStudentGroupInputEnvelope
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
  }

  export type StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentGroupInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentGroupInput, StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput> | StudentGroupHistoryCreateWithoutStudentGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput | StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput[]
    createMany?: StudentGroupHistoryCreateManyStudentGroupInputEnvelope
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    upsert?: GroupUpsertWithoutStudentsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentsInput, GroupUpdateWithoutStudentsInput>, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type BranchUpdateOneRequiredWithoutStudentGroupsNestedInput = {
    create?: XOR<BranchCreateWithoutStudentGroupsInput, BranchUncheckedCreateWithoutStudentGroupsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentGroupsInput
    upsert?: BranchUpsertWithoutStudentGroupsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStudentGroupsInput, BranchUpdateWithoutStudentGroupsInput>, BranchUncheckedUpdateWithoutStudentGroupsInput>
  }

  export type StudentUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupsInput
    upsert?: StudentUpsertWithoutGroupsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGroupsInput, StudentUpdateWithoutGroupsInput>, StudentUncheckedUpdateWithoutGroupsInput>
  }

  export type StudentGroupHistoryUpdateManyWithoutStudentGroupNestedInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentGroupInput, StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput> | StudentGroupHistoryCreateWithoutStudentGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput | StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput[]
    upsert?: StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentGroupInput | StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentGroupInput[]
    createMany?: StudentGroupHistoryCreateManyStudentGroupInputEnvelope
    set?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    disconnect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    delete?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    update?: StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentGroupInput | StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentGroupInput[]
    updateMany?: StudentGroupHistoryUpdateManyWithWhereWithoutStudentGroupInput | StudentGroupHistoryUpdateManyWithWhereWithoutStudentGroupInput[]
    deleteMany?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
  }

  export type StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupNestedInput = {
    create?: XOR<StudentGroupHistoryCreateWithoutStudentGroupInput, StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput> | StudentGroupHistoryCreateWithoutStudentGroupInput[] | StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput[]
    connectOrCreate?: StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput | StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput[]
    upsert?: StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentGroupInput | StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentGroupInput[]
    createMany?: StudentGroupHistoryCreateManyStudentGroupInputEnvelope
    set?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    disconnect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    delete?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    connect?: StudentGroupHistoryWhereUniqueInput | StudentGroupHistoryWhereUniqueInput[]
    update?: StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentGroupInput | StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentGroupInput[]
    updateMany?: StudentGroupHistoryUpdateManyWithWhereWithoutStudentGroupInput | StudentGroupHistoryUpdateManyWithWhereWithoutStudentGroupInput[]
    deleteMany?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
  }

  export type StudentGroupCreateNestedOneWithoutHistoryInput = {
    create?: XOR<StudentGroupCreateWithoutHistoryInput, StudentGroupUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: StudentGroupCreateOrConnectWithoutHistoryInput
    connect?: StudentGroupWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<StudentCreateWithoutHistoryInput, StudentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutHistoryInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutStudentGroupHistoryInput = {
    create?: XOR<GroupCreateWithoutStudentGroupHistoryInput, GroupUncheckedCreateWithoutStudentGroupHistoryInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentGroupHistoryInput
    connect?: GroupWhereUniqueInput
  }

  export type StudentGroupUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<StudentGroupCreateWithoutHistoryInput, StudentGroupUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: StudentGroupCreateOrConnectWithoutHistoryInput
    upsert?: StudentGroupUpsertWithoutHistoryInput
    connect?: StudentGroupWhereUniqueInput
    update?: XOR<XOR<StudentGroupUpdateToOneWithWhereWithoutHistoryInput, StudentGroupUpdateWithoutHistoryInput>, StudentGroupUncheckedUpdateWithoutHistoryInput>
  }

  export type StudentUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<StudentCreateWithoutHistoryInput, StudentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutHistoryInput
    upsert?: StudentUpsertWithoutHistoryInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutHistoryInput, StudentUpdateWithoutHistoryInput>, StudentUncheckedUpdateWithoutHistoryInput>
  }

  export type GroupUpdateOneRequiredWithoutStudentGroupHistoryNestedInput = {
    create?: XOR<GroupCreateWithoutStudentGroupHistoryInput, GroupUncheckedCreateWithoutStudentGroupHistoryInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentGroupHistoryInput
    upsert?: GroupUpsertWithoutStudentGroupHistoryInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentGroupHistoryInput, GroupUpdateWithoutStudentGroupHistoryInput>, GroupUncheckedUpdateWithoutStudentGroupHistoryInput>
  }

  export type BranchCreateNestedOneWithoutStaffInput = {
    create?: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStaffInput
    connect?: BranchWhereUniqueInput
  }

  export type PermissionCreateNestedManyWithoutStaffInput = {
    create?: XOR<PermissionCreateWithoutStaffInput, PermissionUncheckedCreateWithoutStaffInput> | PermissionCreateWithoutStaffInput[] | PermissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutStaffInput | PermissionCreateOrConnectWithoutStaffInput[]
    createMany?: PermissionCreateManyStaffInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<PermissionCreateWithoutStaffInput, PermissionUncheckedCreateWithoutStaffInput> | PermissionCreateWithoutStaffInput[] | PermissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutStaffInput | PermissionCreateOrConnectWithoutStaffInput[]
    createMany?: PermissionCreateManyStaffInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type EnumStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.StaffRole
  }

  export type BranchUpdateOneWithoutStaffNestedInput = {
    create?: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStaffInput
    upsert?: BranchUpsertWithoutStaffInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStaffInput, BranchUpdateWithoutStaffInput>, BranchUncheckedUpdateWithoutStaffInput>
  }

  export type PermissionUpdateManyWithoutStaffNestedInput = {
    create?: XOR<PermissionCreateWithoutStaffInput, PermissionUncheckedCreateWithoutStaffInput> | PermissionCreateWithoutStaffInput[] | PermissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutStaffInput | PermissionCreateOrConnectWithoutStaffInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutStaffInput | PermissionUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: PermissionCreateManyStaffInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutStaffInput | PermissionUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutStaffInput | PermissionUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PermissionUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<PermissionCreateWithoutStaffInput, PermissionUncheckedCreateWithoutStaffInput> | PermissionCreateWithoutStaffInput[] | PermissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutStaffInput | PermissionCreateOrConnectWithoutStaffInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutStaffInput | PermissionUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: PermissionCreateManyStaffInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutStaffInput | PermissionUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutStaffInput | PermissionUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<StaffCreateWithoutPermissionsInput, StaffUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutPermissionsInput
    connect?: StaffWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StaffUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<StaffCreateWithoutPermissionsInput, StaffUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutPermissionsInput
    upsert?: StaffUpsertWithoutPermissionsInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutPermissionsInput, StaffUpdateWithoutPermissionsInput>, StaffUncheckedUpdateWithoutPermissionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCourseLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelFilter<$PrismaModel> | $Enums.CourseLevel
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCourseLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseLevel | EnumCourseLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseLevel[] | ListEnumCourseLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseLevelWithAggregatesFilter<$PrismaModel> | $Enums.CourseLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseLevelFilter<$PrismaModel>
    _max?: NestedEnumCourseLevelFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomCreateWithoutBranchInput = {
    name: string
    capacity: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBranchInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBranchInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBranchInput, RoomUncheckedCreateWithoutBranchInput>
  }

  export type RoomCreateManyBranchInputEnvelope = {
    data: RoomCreateManyBranchInput | RoomCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutBranchInput = {
    fullName: string
    photo?: string | null
    email: string
    password: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherGroups?: TeacherGroupCreateNestedManyWithoutTeacherInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutBranchInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    password: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutTeacherInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutBranchInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutBranchInput, TeacherUncheckedCreateWithoutBranchInput>
  }

  export type TeacherCreateManyBranchInputEnvelope = {
    data: TeacherCreateManyBranchInput | TeacherCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutBranchInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutBranchInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutBranchInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput>
  }

  export type CourseCreateManyBranchInputEnvelope = {
    data: CourseCreateManyBranchInput | CourseCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutBranchInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutBranchInput = {
    id?: number
    name: string
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutBranchInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutBranchInput, GroupUncheckedCreateWithoutBranchInput>
  }

  export type GroupCreateManyBranchInputEnvelope = {
    data: GroupCreateManyBranchInput | GroupCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutBranchInput = {
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: StudentGroupCreateNestedManyWithoutStudentInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBranchInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: StudentGroupUncheckedCreateNestedManyWithoutStudentInput
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutBranchInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput>
  }

  export type StudentCreateManyBranchInputEnvelope = {
    data: StudentCreateManyBranchInput | StudentCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutBranchInput = {
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutBranchInput = {
    id?: number
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutBranchInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutBranchInput, StaffUncheckedCreateWithoutBranchInput>
  }

  export type StaffCreateManyBranchInputEnvelope = {
    data: StaffCreateManyBranchInput | StaffCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type TeacherGroupCreateWithoutBranchInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutTeacherGroupsInput
    group: GroupCreateNestedOneWithoutTeachersInput
    history?: TeacherGroupHistoryCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupUncheckedCreateWithoutBranchInput = {
    id?: number
    teacherId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupCreateOrConnectWithoutBranchInput = {
    where: TeacherGroupWhereUniqueInput
    create: XOR<TeacherGroupCreateWithoutBranchInput, TeacherGroupUncheckedCreateWithoutBranchInput>
  }

  export type TeacherGroupCreateManyBranchInputEnvelope = {
    data: TeacherGroupCreateManyBranchInput | TeacherGroupCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StudentGroupCreateWithoutBranchInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutStudentsInput
    student: StudentCreateNestedOneWithoutGroupsInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupUncheckedCreateWithoutBranchInput = {
    id?: number
    studentId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupCreateOrConnectWithoutBranchInput = {
    where: StudentGroupWhereUniqueInput
    create: XOR<StudentGroupCreateWithoutBranchInput, StudentGroupUncheckedCreateWithoutBranchInput>
  }

  export type StudentGroupCreateManyBranchInputEnvelope = {
    data: StudentGroupCreateManyBranchInput | StudentGroupCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutBranchInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutBranchInput, RoomUncheckedUpdateWithoutBranchInput>
    create: XOR<RoomCreateWithoutBranchInput, RoomUncheckedCreateWithoutBranchInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutBranchInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutBranchInput, RoomUncheckedUpdateWithoutBranchInput>
  }

  export type RoomUpdateManyWithWhereWithoutBranchInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutBranchInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    branchId?: IntFilter<"Room"> | number
    status?: EnumStatusFilter<"Room"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type TeacherUpsertWithWhereUniqueWithoutBranchInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutBranchInput, TeacherUncheckedUpdateWithoutBranchInput>
    create: XOR<TeacherCreateWithoutBranchInput, TeacherUncheckedCreateWithoutBranchInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutBranchInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutBranchInput, TeacherUncheckedUpdateWithoutBranchInput>
  }

  export type TeacherUpdateManyWithWhereWithoutBranchInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutBranchInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: IntFilter<"Teacher"> | number
    fullName?: StringFilter<"Teacher"> | string
    photo?: StringNullableFilter<"Teacher"> | string | null
    email?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    branchId?: IntFilter<"Teacher"> | number
    status?: EnumStatusFilter<"Teacher"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutBranchInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutBranchInput, CourseUncheckedUpdateWithoutBranchInput>
    create: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutBranchInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutBranchInput, CourseUncheckedUpdateWithoutBranchInput>
  }

  export type CourseUpdateManyWithWhereWithoutBranchInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutBranchInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFilter<"Course"> | number
    durationHours?: FloatFilter<"Course"> | number
    level?: EnumCourseLevelFilter<"Course"> | $Enums.CourseLevel
    branchId?: IntFilter<"Course"> | number
    status?: EnumStatusFilter<"Course"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Course"> | Date | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutBranchInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutBranchInput, GroupUncheckedUpdateWithoutBranchInput>
    create: XOR<GroupCreateWithoutBranchInput, GroupUncheckedCreateWithoutBranchInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutBranchInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutBranchInput, GroupUncheckedUpdateWithoutBranchInput>
  }

  export type GroupUpdateManyWithWhereWithoutBranchInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutBranchInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    branchId?: IntFilter<"Group"> | number
    roomId?: IntFilter<"Group"> | number
    courseId?: IntFilter<"Group"> | number
    startDate?: DateTimeFilter<"Group"> | Date | string
    startLesson?: DateTimeFilter<"Group"> | Date | string
    endDate?: DateTimeFilter<"Group"> | Date | string
    status?: EnumStatusFilter<"Group"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutBranchInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutBranchInput, StudentUncheckedUpdateWithoutBranchInput>
    create: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutBranchInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutBranchInput, StudentUncheckedUpdateWithoutBranchInput>
  }

  export type StudentUpdateManyWithWhereWithoutBranchInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutBranchInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    fullName?: StringFilter<"Student"> | string
    photo?: StringNullableFilter<"Student"> | string | null
    email?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    branchId?: IntFilter<"Student"> | number
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type StaffUpsertWithWhereUniqueWithoutBranchInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutBranchInput, StaffUncheckedUpdateWithoutBranchInput>
    create: XOR<StaffCreateWithoutBranchInput, StaffUncheckedCreateWithoutBranchInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutBranchInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutBranchInput, StaffUncheckedUpdateWithoutBranchInput>
  }

  export type StaffUpdateManyWithWhereWithoutBranchInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutBranchInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: IntFilter<"Staff"> | number
    fullName?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    photo?: StringNullableFilter<"Staff"> | string | null
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    branchId?: IntNullableFilter<"Staff"> | number | null
    status?: EnumStatusFilter<"Staff"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
  }

  export type TeacherGroupUpsertWithWhereUniqueWithoutBranchInput = {
    where: TeacherGroupWhereUniqueInput
    update: XOR<TeacherGroupUpdateWithoutBranchInput, TeacherGroupUncheckedUpdateWithoutBranchInput>
    create: XOR<TeacherGroupCreateWithoutBranchInput, TeacherGroupUncheckedCreateWithoutBranchInput>
  }

  export type TeacherGroupUpdateWithWhereUniqueWithoutBranchInput = {
    where: TeacherGroupWhereUniqueInput
    data: XOR<TeacherGroupUpdateWithoutBranchInput, TeacherGroupUncheckedUpdateWithoutBranchInput>
  }

  export type TeacherGroupUpdateManyWithWhereWithoutBranchInput = {
    where: TeacherGroupScalarWhereInput
    data: XOR<TeacherGroupUpdateManyMutationInput, TeacherGroupUncheckedUpdateManyWithoutBranchInput>
  }

  export type TeacherGroupScalarWhereInput = {
    AND?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
    OR?: TeacherGroupScalarWhereInput[]
    NOT?: TeacherGroupScalarWhereInput | TeacherGroupScalarWhereInput[]
    id?: IntFilter<"TeacherGroup"> | number
    teacherId?: IntFilter<"TeacherGroup"> | number
    branchId?: IntFilter<"TeacherGroup"> | number
    groupId?: IntFilter<"TeacherGroup"> | number
    status?: EnumStatusFilter<"TeacherGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"TeacherGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"TeacherGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherGroup"> | Date | string
  }

  export type StudentGroupUpsertWithWhereUniqueWithoutBranchInput = {
    where: StudentGroupWhereUniqueInput
    update: XOR<StudentGroupUpdateWithoutBranchInput, StudentGroupUncheckedUpdateWithoutBranchInput>
    create: XOR<StudentGroupCreateWithoutBranchInput, StudentGroupUncheckedCreateWithoutBranchInput>
  }

  export type StudentGroupUpdateWithWhereUniqueWithoutBranchInput = {
    where: StudentGroupWhereUniqueInput
    data: XOR<StudentGroupUpdateWithoutBranchInput, StudentGroupUncheckedUpdateWithoutBranchInput>
  }

  export type StudentGroupUpdateManyWithWhereWithoutBranchInput = {
    where: StudentGroupScalarWhereInput
    data: XOR<StudentGroupUpdateManyMutationInput, StudentGroupUncheckedUpdateManyWithoutBranchInput>
  }

  export type StudentGroupScalarWhereInput = {
    AND?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
    OR?: StudentGroupScalarWhereInput[]
    NOT?: StudentGroupScalarWhereInput | StudentGroupScalarWhereInput[]
    id?: IntFilter<"StudentGroup"> | number
    studentId?: IntFilter<"StudentGroup"> | number
    groupId?: IntFilter<"StudentGroup"> | number
    branchId?: IntFilter<"StudentGroup"> | number
    status?: EnumStatusFilter<"StudentGroup"> | $Enums.Status
    deletedAt?: DateTimeNullableFilter<"StudentGroup"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentGroup"> | Date | string
    updatedAt?: DateTimeNullableFilter<"StudentGroup"> | Date | string | null
  }

  export type BranchCreateWithoutRoomsInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutRoomsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutRoomsInput, BranchUncheckedCreateWithoutRoomsInput>
  }

  export type GroupCreateWithoutRoomInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    branch: BranchCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutRoomInput = {
    id?: number
    name: string
    branchId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutRoomInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
  }

  export type GroupCreateManyRoomInputEnvelope = {
    data: GroupCreateManyRoomInput | GroupCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutRoomsInput = {
    update: XOR<BranchUpdateWithoutRoomsInput, BranchUncheckedUpdateWithoutRoomsInput>
    create: XOR<BranchCreateWithoutRoomsInput, BranchUncheckedCreateWithoutRoomsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutRoomsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutRoomsInput, BranchUncheckedUpdateWithoutRoomsInput>
  }

  export type BranchUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type GroupUpsertWithWhereUniqueWithoutRoomInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutRoomInput, GroupUncheckedUpdateWithoutRoomInput>
    create: XOR<GroupCreateWithoutRoomInput, GroupUncheckedCreateWithoutRoomInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutRoomInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutRoomInput, GroupUncheckedUpdateWithoutRoomInput>
  }

  export type GroupUpdateManyWithWhereWithoutRoomInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutRoomInput>
  }

  export type BranchCreateWithoutCoursesInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCoursesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCoursesInput, BranchUncheckedCreateWithoutCoursesInput>
  }

  export type GroupCreateWithoutCourseInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCourseInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCourseInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput>
  }

  export type GroupCreateManyCourseInputEnvelope = {
    data: GroupCreateManyCourseInput | GroupCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutCoursesInput = {
    update: XOR<BranchUpdateWithoutCoursesInput, BranchUncheckedUpdateWithoutCoursesInput>
    create: XOR<BranchCreateWithoutCoursesInput, BranchUncheckedCreateWithoutCoursesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutCoursesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutCoursesInput, BranchUncheckedUpdateWithoutCoursesInput>
  }

  export type BranchUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type GroupUpsertWithWhereUniqueWithoutCourseInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCourseInput, GroupUncheckedUpdateWithoutCourseInput>
    create: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCourseInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCourseInput, GroupUncheckedUpdateWithoutCourseInput>
  }

  export type GroupUpdateManyWithWhereWithoutCourseInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutGroupsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutGroupsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
  }

  export type BranchCreateWithoutGroupsInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutGroupsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutGroupsInput, BranchUncheckedCreateWithoutGroupsInput>
  }

  export type RoomCreateWithoutGroupsInput = {
    name: string
    capacity: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    capacity: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutGroupsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutGroupsInput, RoomUncheckedCreateWithoutGroupsInput>
  }

  export type TeacherGroupCreateWithoutGroupInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutTeacherGroupsInput
    branch: BranchCreateNestedOneWithoutTeacherGroupsInput
    history?: TeacherGroupHistoryCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupUncheckedCreateWithoutGroupInput = {
    id?: number
    teacherId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupCreateOrConnectWithoutGroupInput = {
    where: TeacherGroupWhereUniqueInput
    create: XOR<TeacherGroupCreateWithoutGroupInput, TeacherGroupUncheckedCreateWithoutGroupInput>
  }

  export type TeacherGroupCreateManyGroupInputEnvelope = {
    data: TeacherGroupCreateManyGroupInput | TeacherGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type StudentGroupCreateWithoutGroupInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    branch: BranchCreateNestedOneWithoutStudentGroupsInput
    student: StudentCreateNestedOneWithoutGroupsInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupUncheckedCreateWithoutGroupInput = {
    id?: number
    studentId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupCreateOrConnectWithoutGroupInput = {
    where: StudentGroupWhereUniqueInput
    create: XOR<StudentGroupCreateWithoutGroupInput, StudentGroupUncheckedCreateWithoutGroupInput>
  }

  export type StudentGroupCreateManyGroupInputEnvelope = {
    data: StudentGroupCreateManyGroupInput | StudentGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TeacherGroupHistoryCreateWithoutGroupInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    teacherGroup: TeacherGroupCreateNestedOneWithoutHistoryInput
    teacher: TeacherCreateNestedOneWithoutTeacherGroupHistoryInput
  }

  export type TeacherGroupHistoryUncheckedCreateWithoutGroupInput = {
    id?: number
    teacherGroupId: number
    teacherId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupHistoryCreateOrConnectWithoutGroupInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    create: XOR<TeacherGroupHistoryCreateWithoutGroupInput, TeacherGroupHistoryUncheckedCreateWithoutGroupInput>
  }

  export type TeacherGroupHistoryCreateManyGroupInputEnvelope = {
    data: TeacherGroupHistoryCreateManyGroupInput | TeacherGroupHistoryCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type StudentGroupHistoryCreateWithoutGroupInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    studentGroup: StudentGroupCreateNestedOneWithoutHistoryInput
    student: StudentCreateNestedOneWithoutHistoryInput
  }

  export type StudentGroupHistoryUncheckedCreateWithoutGroupInput = {
    id?: number
    studentGroupId: number
    studentId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryCreateOrConnectWithoutGroupInput = {
    where: StudentGroupHistoryWhereUniqueInput
    create: XOR<StudentGroupHistoryCreateWithoutGroupInput, StudentGroupHistoryUncheckedCreateWithoutGroupInput>
  }

  export type StudentGroupHistoryCreateManyGroupInputEnvelope = {
    data: StudentGroupHistoryCreateManyGroupInput | StudentGroupHistoryCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutGroupsInput = {
    update: XOR<CourseUpdateWithoutGroupsInput, CourseUncheckedUpdateWithoutGroupsInput>
    create: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutGroupsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutGroupsInput, CourseUncheckedUpdateWithoutGroupsInput>
  }

  export type CourseUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUpsertWithoutGroupsInput = {
    update: XOR<BranchUpdateWithoutGroupsInput, BranchUncheckedUpdateWithoutGroupsInput>
    create: XOR<BranchCreateWithoutGroupsInput, BranchUncheckedCreateWithoutGroupsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutGroupsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutGroupsInput, BranchUncheckedUpdateWithoutGroupsInput>
  }

  export type BranchUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type RoomUpsertWithoutGroupsInput = {
    update: XOR<RoomUpdateWithoutGroupsInput, RoomUncheckedUpdateWithoutGroupsInput>
    create: XOR<RoomCreateWithoutGroupsInput, RoomUncheckedCreateWithoutGroupsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutGroupsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutGroupsInput, RoomUncheckedUpdateWithoutGroupsInput>
  }

  export type RoomUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: TeacherGroupWhereUniqueInput
    update: XOR<TeacherGroupUpdateWithoutGroupInput, TeacherGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<TeacherGroupCreateWithoutGroupInput, TeacherGroupUncheckedCreateWithoutGroupInput>
  }

  export type TeacherGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: TeacherGroupWhereUniqueInput
    data: XOR<TeacherGroupUpdateWithoutGroupInput, TeacherGroupUncheckedUpdateWithoutGroupInput>
  }

  export type TeacherGroupUpdateManyWithWhereWithoutGroupInput = {
    where: TeacherGroupScalarWhereInput
    data: XOR<TeacherGroupUpdateManyMutationInput, TeacherGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type StudentGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentGroupWhereUniqueInput
    update: XOR<StudentGroupUpdateWithoutGroupInput, StudentGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentGroupCreateWithoutGroupInput, StudentGroupUncheckedCreateWithoutGroupInput>
  }

  export type StudentGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentGroupWhereUniqueInput
    data: XOR<StudentGroupUpdateWithoutGroupInput, StudentGroupUncheckedUpdateWithoutGroupInput>
  }

  export type StudentGroupUpdateManyWithWhereWithoutGroupInput = {
    where: StudentGroupScalarWhereInput
    data: XOR<StudentGroupUpdateManyMutationInput, StudentGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type TeacherGroupHistoryUpsertWithWhereUniqueWithoutGroupInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    update: XOR<TeacherGroupHistoryUpdateWithoutGroupInput, TeacherGroupHistoryUncheckedUpdateWithoutGroupInput>
    create: XOR<TeacherGroupHistoryCreateWithoutGroupInput, TeacherGroupHistoryUncheckedCreateWithoutGroupInput>
  }

  export type TeacherGroupHistoryUpdateWithWhereUniqueWithoutGroupInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    data: XOR<TeacherGroupHistoryUpdateWithoutGroupInput, TeacherGroupHistoryUncheckedUpdateWithoutGroupInput>
  }

  export type TeacherGroupHistoryUpdateManyWithWhereWithoutGroupInput = {
    where: TeacherGroupHistoryScalarWhereInput
    data: XOR<TeacherGroupHistoryUpdateManyMutationInput, TeacherGroupHistoryUncheckedUpdateManyWithoutGroupInput>
  }

  export type TeacherGroupHistoryScalarWhereInput = {
    AND?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
    OR?: TeacherGroupHistoryScalarWhereInput[]
    NOT?: TeacherGroupHistoryScalarWhereInput | TeacherGroupHistoryScalarWhereInput[]
    id?: IntFilter<"TeacherGroupHistory"> | number
    teacherGroupId?: IntFilter<"TeacherGroupHistory"> | number
    teacherId?: IntFilter<"TeacherGroupHistory"> | number
    groupId?: IntFilter<"TeacherGroupHistory"> | number
    event?: EnumEventTypeFilter<"TeacherGroupHistory"> | $Enums.EventType
    startDate?: DateTimeFilter<"TeacherGroupHistory"> | Date | string
    endDate?: DateTimeNullableFilter<"TeacherGroupHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"TeacherGroupHistory"> | Date | string
  }

  export type StudentGroupHistoryUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentGroupHistoryWhereUniqueInput
    update: XOR<StudentGroupHistoryUpdateWithoutGroupInput, StudentGroupHistoryUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentGroupHistoryCreateWithoutGroupInput, StudentGroupHistoryUncheckedCreateWithoutGroupInput>
  }

  export type StudentGroupHistoryUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentGroupHistoryWhereUniqueInput
    data: XOR<StudentGroupHistoryUpdateWithoutGroupInput, StudentGroupHistoryUncheckedUpdateWithoutGroupInput>
  }

  export type StudentGroupHistoryUpdateManyWithWhereWithoutGroupInput = {
    where: StudentGroupHistoryScalarWhereInput
    data: XOR<StudentGroupHistoryUpdateManyMutationInput, StudentGroupHistoryUncheckedUpdateManyWithoutGroupInput>
  }

  export type StudentGroupHistoryScalarWhereInput = {
    AND?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
    OR?: StudentGroupHistoryScalarWhereInput[]
    NOT?: StudentGroupHistoryScalarWhereInput | StudentGroupHistoryScalarWhereInput[]
    id?: IntFilter<"StudentGroupHistory"> | number
    studentGroupId?: IntFilter<"StudentGroupHistory"> | number
    studentId?: IntFilter<"StudentGroupHistory"> | number
    groupId?: IntFilter<"StudentGroupHistory"> | number
    event?: EnumEventTypeFilter<"StudentGroupHistory"> | $Enums.EventType
    startDate?: DateTimeFilter<"StudentGroupHistory"> | Date | string
    endDate?: DateTimeNullableFilter<"StudentGroupHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentGroupHistory"> | Date | string
  }

  export type BranchCreateWithoutTeachersInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutTeachersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutTeachersInput, BranchUncheckedCreateWithoutTeachersInput>
  }

  export type TeacherGroupCreateWithoutTeacherInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutTeachersInput
    branch: BranchCreateNestedOneWithoutTeacherGroupsInput
    history?: TeacherGroupHistoryCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupUncheckedCreateWithoutTeacherInput = {
    id?: number
    branchId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherGroupInput
  }

  export type TeacherGroupCreateOrConnectWithoutTeacherInput = {
    where: TeacherGroupWhereUniqueInput
    create: XOR<TeacherGroupCreateWithoutTeacherInput, TeacherGroupUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherGroupCreateManyTeacherInputEnvelope = {
    data: TeacherGroupCreateManyTeacherInput | TeacherGroupCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherGroupHistoryCreateWithoutTeacherInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    teacherGroup: TeacherGroupCreateNestedOneWithoutHistoryInput
    group: GroupCreateNestedOneWithoutTeacherGroupHistoryInput
  }

  export type TeacherGroupHistoryUncheckedCreateWithoutTeacherInput = {
    id?: number
    teacherGroupId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupHistoryCreateOrConnectWithoutTeacherInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    create: XOR<TeacherGroupHistoryCreateWithoutTeacherInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherGroupHistoryCreateManyTeacherInputEnvelope = {
    data: TeacherGroupHistoryCreateManyTeacherInput | TeacherGroupHistoryCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutTeachersInput = {
    update: XOR<BranchUpdateWithoutTeachersInput, BranchUncheckedUpdateWithoutTeachersInput>
    create: XOR<BranchCreateWithoutTeachersInput, BranchUncheckedCreateWithoutTeachersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutTeachersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutTeachersInput, BranchUncheckedUpdateWithoutTeachersInput>
  }

  export type BranchUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type TeacherGroupUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherGroupWhereUniqueInput
    update: XOR<TeacherGroupUpdateWithoutTeacherInput, TeacherGroupUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherGroupCreateWithoutTeacherInput, TeacherGroupUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherGroupUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherGroupWhereUniqueInput
    data: XOR<TeacherGroupUpdateWithoutTeacherInput, TeacherGroupUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherGroupUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherGroupScalarWhereInput
    data: XOR<TeacherGroupUpdateManyMutationInput, TeacherGroupUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    update: XOR<TeacherGroupHistoryUpdateWithoutTeacherInput, TeacherGroupHistoryUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherGroupHistoryCreateWithoutTeacherInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    data: XOR<TeacherGroupHistoryUpdateWithoutTeacherInput, TeacherGroupHistoryUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherGroupHistoryScalarWhereInput
    data: XOR<TeacherGroupHistoryUpdateManyMutationInput, TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherCreateWithoutTeacherGroupsInput = {
    fullName: string
    photo?: string | null
    email: string
    password: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutTeachersInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutTeacherGroupsInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    password: string
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutTeacherGroupsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutTeacherGroupsInput, TeacherUncheckedCreateWithoutTeacherGroupsInput>
  }

  export type GroupCreateWithoutTeachersInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    branch: BranchCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTeachersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTeachersInput, GroupUncheckedCreateWithoutTeachersInput>
  }

  export type BranchCreateWithoutTeacherGroupsInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutTeacherGroupsInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutTeacherGroupsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutTeacherGroupsInput, BranchUncheckedCreateWithoutTeacherGroupsInput>
  }

  export type TeacherGroupHistoryCreateWithoutTeacherGroupInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutTeacherGroupHistoryInput
    group: GroupCreateNestedOneWithoutTeacherGroupHistoryInput
  }

  export type TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput = {
    id?: number
    teacherId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupHistoryCreateOrConnectWithoutTeacherGroupInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    create: XOR<TeacherGroupHistoryCreateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput>
  }

  export type TeacherGroupHistoryCreateManyTeacherGroupInputEnvelope = {
    data: TeacherGroupHistoryCreateManyTeacherGroupInput | TeacherGroupHistoryCreateManyTeacherGroupInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutTeacherGroupsInput = {
    update: XOR<TeacherUpdateWithoutTeacherGroupsInput, TeacherUncheckedUpdateWithoutTeacherGroupsInput>
    create: XOR<TeacherCreateWithoutTeacherGroupsInput, TeacherUncheckedCreateWithoutTeacherGroupsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutTeacherGroupsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutTeacherGroupsInput, TeacherUncheckedUpdateWithoutTeacherGroupsInput>
  }

  export type TeacherUpdateWithoutTeacherGroupsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutTeachersNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutTeacherGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type GroupUpsertWithoutTeachersInput = {
    update: XOR<GroupUpdateWithoutTeachersInput, GroupUncheckedUpdateWithoutTeachersInput>
    create: XOR<GroupCreateWithoutTeachersInput, GroupUncheckedCreateWithoutTeachersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTeachersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTeachersInput, GroupUncheckedUpdateWithoutTeachersInput>
  }

  export type GroupUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type BranchUpsertWithoutTeacherGroupsInput = {
    update: XOR<BranchUpdateWithoutTeacherGroupsInput, BranchUncheckedUpdateWithoutTeacherGroupsInput>
    create: XOR<BranchCreateWithoutTeacherGroupsInput, BranchUncheckedCreateWithoutTeacherGroupsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutTeacherGroupsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutTeacherGroupsInput, BranchUncheckedUpdateWithoutTeacherGroupsInput>
  }

  export type BranchUpdateWithoutTeacherGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutTeacherGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type TeacherGroupHistoryUpsertWithWhereUniqueWithoutTeacherGroupInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    update: XOR<TeacherGroupHistoryUpdateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedUpdateWithoutTeacherGroupInput>
    create: XOR<TeacherGroupHistoryCreateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedCreateWithoutTeacherGroupInput>
  }

  export type TeacherGroupHistoryUpdateWithWhereUniqueWithoutTeacherGroupInput = {
    where: TeacherGroupHistoryWhereUniqueInput
    data: XOR<TeacherGroupHistoryUpdateWithoutTeacherGroupInput, TeacherGroupHistoryUncheckedUpdateWithoutTeacherGroupInput>
  }

  export type TeacherGroupHistoryUpdateManyWithWhereWithoutTeacherGroupInput = {
    where: TeacherGroupHistoryScalarWhereInput
    data: XOR<TeacherGroupHistoryUpdateManyMutationInput, TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupInput>
  }

  export type TeacherGroupCreateWithoutHistoryInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutTeacherGroupsInput
    group: GroupCreateNestedOneWithoutTeachersInput
    branch: BranchCreateNestedOneWithoutTeacherGroupsInput
  }

  export type TeacherGroupUncheckedCreateWithoutHistoryInput = {
    id?: number
    teacherId: number
    branchId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherGroupCreateOrConnectWithoutHistoryInput = {
    where: TeacherGroupWhereUniqueInput
    create: XOR<TeacherGroupCreateWithoutHistoryInput, TeacherGroupUncheckedCreateWithoutHistoryInput>
  }

  export type TeacherCreateWithoutTeacherGroupHistoryInput = {
    fullName: string
    photo?: string | null
    email: string
    password: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutTeachersInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutTeacherGroupHistoryInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    password: string
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutTeacherGroupHistoryInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutTeacherGroupHistoryInput, TeacherUncheckedCreateWithoutTeacherGroupHistoryInput>
  }

  export type GroupCreateWithoutTeacherGroupHistoryInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    branch: BranchCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTeacherGroupHistoryInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTeacherGroupHistoryInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTeacherGroupHistoryInput, GroupUncheckedCreateWithoutTeacherGroupHistoryInput>
  }

  export type TeacherGroupUpsertWithoutHistoryInput = {
    update: XOR<TeacherGroupUpdateWithoutHistoryInput, TeacherGroupUncheckedUpdateWithoutHistoryInput>
    create: XOR<TeacherGroupCreateWithoutHistoryInput, TeacherGroupUncheckedCreateWithoutHistoryInput>
    where?: TeacherGroupWhereInput
  }

  export type TeacherGroupUpdateToOneWithWhereWithoutHistoryInput = {
    where?: TeacherGroupWhereInput
    data: XOR<TeacherGroupUpdateWithoutHistoryInput, TeacherGroupUncheckedUpdateWithoutHistoryInput>
  }

  export type TeacherGroupUpdateWithoutHistoryInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutTeachersNestedInput
    branch?: BranchUpdateOneRequiredWithoutTeacherGroupsNestedInput
  }

  export type TeacherGroupUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUpsertWithoutTeacherGroupHistoryInput = {
    update: XOR<TeacherUpdateWithoutTeacherGroupHistoryInput, TeacherUncheckedUpdateWithoutTeacherGroupHistoryInput>
    create: XOR<TeacherCreateWithoutTeacherGroupHistoryInput, TeacherUncheckedCreateWithoutTeacherGroupHistoryInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutTeacherGroupHistoryInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutTeacherGroupHistoryInput, TeacherUncheckedUpdateWithoutTeacherGroupHistoryInput>
  }

  export type TeacherUpdateWithoutTeacherGroupHistoryInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutTeachersNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutTeacherGroupHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type GroupUpsertWithoutTeacherGroupHistoryInput = {
    update: XOR<GroupUpdateWithoutTeacherGroupHistoryInput, GroupUncheckedUpdateWithoutTeacherGroupHistoryInput>
    create: XOR<GroupCreateWithoutTeacherGroupHistoryInput, GroupUncheckedCreateWithoutTeacherGroupHistoryInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTeacherGroupHistoryInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTeacherGroupHistoryInput, GroupUncheckedUpdateWithoutTeacherGroupHistoryInput>
  }

  export type GroupUpdateWithoutTeacherGroupHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTeacherGroupHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type BranchCreateWithoutStudentsInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStudentsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
  }

  export type StudentGroupCreateWithoutStudentInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutStudentsInput
    branch: BranchCreateNestedOneWithoutStudentGroupsInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupUncheckedCreateWithoutStudentInput = {
    id?: number
    groupId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentGroupInput
  }

  export type StudentGroupCreateOrConnectWithoutStudentInput = {
    where: StudentGroupWhereUniqueInput
    create: XOR<StudentGroupCreateWithoutStudentInput, StudentGroupUncheckedCreateWithoutStudentInput>
  }

  export type StudentGroupCreateManyStudentInputEnvelope = {
    data: StudentGroupCreateManyStudentInput | StudentGroupCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentGroupHistoryCreateWithoutStudentInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    studentGroup: StudentGroupCreateNestedOneWithoutHistoryInput
    group: GroupCreateNestedOneWithoutStudentGroupHistoryInput
  }

  export type StudentGroupHistoryUncheckedCreateWithoutStudentInput = {
    id?: number
    studentGroupId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryCreateOrConnectWithoutStudentInput = {
    where: StudentGroupHistoryWhereUniqueInput
    create: XOR<StudentGroupHistoryCreateWithoutStudentInput, StudentGroupHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentGroupHistoryCreateManyStudentInputEnvelope = {
    data: StudentGroupHistoryCreateManyStudentInput | StudentGroupHistoryCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutStudentsInput = {
    update: XOR<BranchUpdateWithoutStudentsInput, BranchUncheckedUpdateWithoutStudentsInput>
    create: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStudentsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStudentsInput, BranchUncheckedUpdateWithoutStudentsInput>
  }

  export type BranchUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StudentGroupUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentGroupWhereUniqueInput
    update: XOR<StudentGroupUpdateWithoutStudentInput, StudentGroupUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentGroupCreateWithoutStudentInput, StudentGroupUncheckedCreateWithoutStudentInput>
  }

  export type StudentGroupUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentGroupWhereUniqueInput
    data: XOR<StudentGroupUpdateWithoutStudentInput, StudentGroupUncheckedUpdateWithoutStudentInput>
  }

  export type StudentGroupUpdateManyWithWhereWithoutStudentInput = {
    where: StudentGroupScalarWhereInput
    data: XOR<StudentGroupUpdateManyMutationInput, StudentGroupUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentGroupHistoryWhereUniqueInput
    update: XOR<StudentGroupHistoryUpdateWithoutStudentInput, StudentGroupHistoryUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentGroupHistoryCreateWithoutStudentInput, StudentGroupHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentGroupHistoryWhereUniqueInput
    data: XOR<StudentGroupHistoryUpdateWithoutStudentInput, StudentGroupHistoryUncheckedUpdateWithoutStudentInput>
  }

  export type StudentGroupHistoryUpdateManyWithWhereWithoutStudentInput = {
    where: StudentGroupHistoryScalarWhereInput
    data: XOR<StudentGroupHistoryUpdateManyMutationInput, StudentGroupHistoryUncheckedUpdateManyWithoutStudentInput>
  }

  export type GroupCreateWithoutStudentsInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    branch: BranchCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
    studentGroupHistory?: StudentGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type BranchCreateWithoutStudentGroupsInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    staff?: StaffCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStudentGroupsInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    staff?: StaffUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStudentGroupsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStudentGroupsInput, BranchUncheckedCreateWithoutStudentGroupsInput>
  }

  export type StudentCreateWithoutGroupsInput = {
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    history?: StudentGroupHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGroupsInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    branchId: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: StudentGroupHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGroupsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
  }

  export type StudentGroupHistoryCreateWithoutStudentGroupInput = {
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutHistoryInput
    group: GroupCreateNestedOneWithoutStudentGroupHistoryInput
  }

  export type StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput = {
    id?: number
    studentId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryCreateOrConnectWithoutStudentGroupInput = {
    where: StudentGroupHistoryWhereUniqueInput
    create: XOR<StudentGroupHistoryCreateWithoutStudentGroupInput, StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput>
  }

  export type StudentGroupHistoryCreateManyStudentGroupInputEnvelope = {
    data: StudentGroupHistoryCreateManyStudentGroupInput | StudentGroupHistoryCreateManyStudentGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutStudentsInput = {
    update: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type BranchUpsertWithoutStudentGroupsInput = {
    update: XOR<BranchUpdateWithoutStudentGroupsInput, BranchUncheckedUpdateWithoutStudentGroupsInput>
    create: XOR<BranchCreateWithoutStudentGroupsInput, BranchUncheckedCreateWithoutStudentGroupsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStudentGroupsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStudentGroupsInput, BranchUncheckedUpdateWithoutStudentGroupsInput>
  }

  export type BranchUpdateWithoutStudentGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    staff?: StaffUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStudentGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    staff?: StaffUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StudentUpsertWithoutGroupsInput = {
    update: XOR<StudentUpdateWithoutGroupsInput, StudentUncheckedUpdateWithoutGroupsInput>
    create: XOR<StudentCreateWithoutGroupsInput, StudentUncheckedCreateWithoutGroupsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGroupsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGroupsInput, StudentUncheckedUpdateWithoutGroupsInput>
  }

  export type StudentUpdateWithoutGroupsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    branchId?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentGroupHistoryUpsertWithWhereUniqueWithoutStudentGroupInput = {
    where: StudentGroupHistoryWhereUniqueInput
    update: XOR<StudentGroupHistoryUpdateWithoutStudentGroupInput, StudentGroupHistoryUncheckedUpdateWithoutStudentGroupInput>
    create: XOR<StudentGroupHistoryCreateWithoutStudentGroupInput, StudentGroupHistoryUncheckedCreateWithoutStudentGroupInput>
  }

  export type StudentGroupHistoryUpdateWithWhereUniqueWithoutStudentGroupInput = {
    where: StudentGroupHistoryWhereUniqueInput
    data: XOR<StudentGroupHistoryUpdateWithoutStudentGroupInput, StudentGroupHistoryUncheckedUpdateWithoutStudentGroupInput>
  }

  export type StudentGroupHistoryUpdateManyWithWhereWithoutStudentGroupInput = {
    where: StudentGroupHistoryScalarWhereInput
    data: XOR<StudentGroupHistoryUpdateManyMutationInput, StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupInput>
  }

  export type StudentGroupCreateWithoutHistoryInput = {
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutStudentsInput
    branch: BranchCreateNestedOneWithoutStudentGroupsInput
    student: StudentCreateNestedOneWithoutGroupsInput
  }

  export type StudentGroupUncheckedCreateWithoutHistoryInput = {
    id?: number
    studentId: number
    groupId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type StudentGroupCreateOrConnectWithoutHistoryInput = {
    where: StudentGroupWhereUniqueInput
    create: XOR<StudentGroupCreateWithoutHistoryInput, StudentGroupUncheckedCreateWithoutHistoryInput>
  }

  export type StudentCreateWithoutHistoryInput = {
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    groups?: StudentGroupCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutHistoryInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    branchId: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: StudentGroupUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutHistoryInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutHistoryInput, StudentUncheckedCreateWithoutHistoryInput>
  }

  export type GroupCreateWithoutStudentGroupHistoryInput = {
    name: string
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutGroupsInput
    branch: BranchCreateNestedOneWithoutGroupsInput
    room: RoomCreateNestedOneWithoutGroupsInput
    teachers?: TeacherGroupCreateNestedManyWithoutGroupInput
    students?: StudentGroupCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStudentGroupHistoryInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherGroupUncheckedCreateNestedManyWithoutGroupInput
    students?: StudentGroupUncheckedCreateNestedManyWithoutGroupInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStudentGroupHistoryInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentGroupHistoryInput, GroupUncheckedCreateWithoutStudentGroupHistoryInput>
  }

  export type StudentGroupUpsertWithoutHistoryInput = {
    update: XOR<StudentGroupUpdateWithoutHistoryInput, StudentGroupUncheckedUpdateWithoutHistoryInput>
    create: XOR<StudentGroupCreateWithoutHistoryInput, StudentGroupUncheckedCreateWithoutHistoryInput>
    where?: StudentGroupWhereInput
  }

  export type StudentGroupUpdateToOneWithWhereWithoutHistoryInput = {
    where?: StudentGroupWhereInput
    data: XOR<StudentGroupUpdateWithoutHistoryInput, StudentGroupUncheckedUpdateWithoutHistoryInput>
  }

  export type StudentGroupUpdateWithoutHistoryInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentGroupsNestedInput
    student?: StudentUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type StudentGroupUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUpsertWithoutHistoryInput = {
    update: XOR<StudentUpdateWithoutHistoryInput, StudentUncheckedUpdateWithoutHistoryInput>
    create: XOR<StudentCreateWithoutHistoryInput, StudentUncheckedCreateWithoutHistoryInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutHistoryInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutHistoryInput, StudentUncheckedUpdateWithoutHistoryInput>
  }

  export type StudentUpdateWithoutHistoryInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    groups?: StudentGroupUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    branchId?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: StudentGroupUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type GroupUpsertWithoutStudentGroupHistoryInput = {
    update: XOR<GroupUpdateWithoutStudentGroupHistoryInput, GroupUncheckedUpdateWithoutStudentGroupHistoryInput>
    create: XOR<GroupCreateWithoutStudentGroupHistoryInput, GroupUncheckedCreateWithoutStudentGroupHistoryInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentGroupHistoryInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentGroupHistoryInput, GroupUncheckedUpdateWithoutStudentGroupHistoryInput>
  }

  export type GroupUpdateWithoutStudentGroupHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentGroupHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type BranchCreateWithoutStaffInput = {
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutBranchInput
    teachers?: TeacherCreateNestedManyWithoutBranchInput
    courses?: CourseCreateNestedManyWithoutBranchInput
    groups?: GroupCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStaffInput = {
    id?: number
    name: string
    logo?: string | null
    address: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutBranchInput
    teachers?: TeacherUncheckedCreateNestedManyWithoutBranchInput
    courses?: CourseUncheckedCreateNestedManyWithoutBranchInput
    groups?: GroupUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    teacherGroups?: TeacherGroupUncheckedCreateNestedManyWithoutBranchInput
    studentGroups?: StudentGroupUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStaffInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
  }

  export type PermissionCreateWithoutStaffInput = {
    tableName: string
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }

  export type PermissionUncheckedCreateWithoutStaffInput = {
    id?: number
    tableName: string
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }

  export type PermissionCreateOrConnectWithoutStaffInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutStaffInput, PermissionUncheckedCreateWithoutStaffInput>
  }

  export type PermissionCreateManyStaffInputEnvelope = {
    data: PermissionCreateManyStaffInput | PermissionCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutStaffInput = {
    update: XOR<BranchUpdateWithoutStaffInput, BranchUncheckedUpdateWithoutStaffInput>
    create: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStaffInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStaffInput, BranchUncheckedUpdateWithoutStaffInput>
  }

  export type BranchUpdateWithoutStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUpdateManyWithoutBranchNestedInput
    courses?: CourseUpdateManyWithoutBranchNestedInput
    groups?: GroupUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutBranchNestedInput
    teachers?: TeacherUncheckedUpdateManyWithoutBranchNestedInput
    courses?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    groups?: GroupUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutBranchNestedInput
    studentGroups?: StudentGroupUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type PermissionUpsertWithWhereUniqueWithoutStaffInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutStaffInput, PermissionUncheckedUpdateWithoutStaffInput>
    create: XOR<PermissionCreateWithoutStaffInput, PermissionUncheckedCreateWithoutStaffInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutStaffInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutStaffInput, PermissionUncheckedUpdateWithoutStaffInput>
  }

  export type PermissionUpdateManyWithWhereWithoutStaffInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutStaffInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: IntFilter<"Permission"> | number
    staffId?: IntFilter<"Permission"> | number
    tableName?: StringFilter<"Permission"> | string
    canRead?: BoolFilter<"Permission"> | boolean
    canWrite?: BoolFilter<"Permission"> | boolean
    canUpdate?: BoolFilter<"Permission"> | boolean
    canDelete?: BoolFilter<"Permission"> | boolean
  }

  export type StaffCreateWithoutPermissionsInput = {
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutPermissionsInput = {
    id?: number
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    branchId?: number | null
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutPermissionsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutPermissionsInput, StaffUncheckedCreateWithoutPermissionsInput>
  }

  export type StaffUpsertWithoutPermissionsInput = {
    update: XOR<StaffUpdateWithoutPermissionsInput, StaffUncheckedUpdateWithoutPermissionsInput>
    create: XOR<StaffCreateWithoutPermissionsInput, StaffUncheckedCreateWithoutPermissionsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutPermissionsInput, StaffUncheckedUpdateWithoutPermissionsInput>
  }

  export type StaffUpdateWithoutPermissionsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyBranchInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherCreateManyBranchInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    password: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateManyBranchInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    durationMonth: number
    durationHours: number
    level: $Enums.CourseLevel
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateManyBranchInput = {
    id?: number
    name: string
    roomId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyBranchInput = {
    id?: number
    fullName: string
    photo?: string | null
    email: string
    phone: string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateManyBranchInput = {
    id?: number
    fullName: string
    phone: string
    photo?: string | null
    role: $Enums.StaffRole
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherGroupCreateManyBranchInput = {
    id?: number
    teacherId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentGroupCreateManyBranchInput = {
    id?: number
    studentId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type RoomUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUpdateWithoutBranchInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroups?: TeacherGroupUpdateManyWithoutTeacherNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroups?: TeacherGroupUncheckedUpdateManyWithoutTeacherNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMonth?: IntFieldUpdateOperationsInput | number
    durationHours?: FloatFieldUpdateOperationsInput | number
    level?: EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutBranchInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: StudentGroupUpdateManyWithoutStudentNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: StudentGroupUncheckedUpdateManyWithoutStudentNestedInput
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutBranchInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupUpdateWithoutBranchInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutTeachersNestedInput
    history?: TeacherGroupHistoryUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupUpdateWithoutBranchInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
    student?: StudentUpdateOneRequiredWithoutGroupsNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateManyRoomInput = {
    id?: number
    name: string
    branchId: number
    courseId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManyCourseInput = {
    id?: number
    name: string
    branchId: number
    roomId: number
    startDate: Date | string
    startLesson: Date | string
    endDate: Date | string
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutCourseInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutGroupsNestedInput
    room?: RoomUpdateOneRequiredWithoutGroupsNestedInput
    teachers?: TeacherGroupUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherGroupUncheckedUpdateManyWithoutGroupNestedInput
    students?: StudentGroupUncheckedUpdateManyWithoutGroupNestedInput
    teacherGroupHistory?: TeacherGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
    studentGroupHistory?: StudentGroupHistoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branchId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startLesson?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupCreateManyGroupInput = {
    id?: number
    teacherId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentGroupCreateManyGroupInput = {
    id?: number
    studentId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TeacherGroupHistoryCreateManyGroupInput = {
    id?: number
    teacherGroupId: number
    teacherId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryCreateManyGroupInput = {
    id?: number
    studentGroupId: number
    studentId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupUpdateWithoutGroupInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupsNestedInput
    branch?: BranchUpdateOneRequiredWithoutTeacherGroupsNestedInput
    history?: TeacherGroupHistoryUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupUpdateWithoutGroupInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: BranchUpdateOneRequiredWithoutStudentGroupsNestedInput
    student?: StudentUpdateOneRequiredWithoutGroupsNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeacherGroupHistoryUpdateWithoutGroupInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroup?: TeacherGroupUpdateOneRequiredWithoutHistoryNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput
  }

  export type TeacherGroupHistoryUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherGroupId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherGroupId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryUpdateWithoutGroupInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentGroup?: StudentGroupUpdateOneRequiredWithoutHistoryNestedInput
    student?: StudentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type StudentGroupHistoryUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentGroupId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentGroupId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupCreateManyTeacherInput = {
    id?: number
    branchId: number
    groupId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherGroupHistoryCreateManyTeacherInput = {
    id?: number
    teacherGroupId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupUpdateWithoutTeacherInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutTeachersNestedInput
    branch?: BranchUpdateOneRequiredWithoutTeacherGroupsNestedInput
    history?: TeacherGroupHistoryUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupNestedInput
  }

  export type TeacherGroupUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryUpdateWithoutTeacherInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherGroup?: TeacherGroupUpdateOneRequiredWithoutHistoryNestedInput
    group?: GroupUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput
  }

  export type TeacherGroupHistoryUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherGroupId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherGroupId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryCreateManyTeacherGroupInput = {
    id?: number
    teacherId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type TeacherGroupHistoryUpdateWithoutTeacherGroupInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput
    group?: GroupUpdateOneRequiredWithoutTeacherGroupHistoryNestedInput
  }

  export type TeacherGroupHistoryUncheckedUpdateWithoutTeacherGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherGroupHistoryUncheckedUpdateManyWithoutTeacherGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupCreateManyStudentInput = {
    id?: number
    groupId: number
    branchId: number
    status?: $Enums.Status
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type StudentGroupHistoryCreateManyStudentInput = {
    id?: number
    studentGroupId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupUpdateWithoutStudentInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutStudentsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentGroupsNestedInput
    history?: StudentGroupHistoryUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupNestedInput
  }

  export type StudentGroupUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentGroupHistoryUpdateWithoutStudentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentGroup?: StudentGroupUpdateOneRequiredWithoutHistoryNestedInput
    group?: GroupUpdateOneRequiredWithoutStudentGroupHistoryNestedInput
  }

  export type StudentGroupHistoryUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentGroupId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentGroupId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryCreateManyStudentGroupInput = {
    id?: number
    studentId: number
    groupId: number
    event: $Enums.EventType
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
  }

  export type StudentGroupHistoryUpdateWithoutStudentGroupInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutHistoryNestedInput
    group?: GroupUpdateOneRequiredWithoutStudentGroupHistoryNestedInput
  }

  export type StudentGroupHistoryUncheckedUpdateWithoutStudentGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGroupHistoryUncheckedUpdateManyWithoutStudentGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    event?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateManyStaffInput = {
    id?: number
    tableName: string
    canRead?: boolean
    canWrite?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }

  export type PermissionUpdateWithoutStaffInput = {
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionUncheckedUpdateManyWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableName?: StringFieldUpdateOperationsInput | string
    canRead?: BoolFieldUpdateOperationsInput | boolean
    canWrite?: BoolFieldUpdateOperationsInput | boolean
    canUpdate?: BoolFieldUpdateOperationsInput | boolean
    canDelete?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}