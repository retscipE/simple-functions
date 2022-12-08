import { IDriver } from "./drivers/IDriver";
export { IDriver } from "./drivers/IDriver";
export { SqliteDriver } from "./drivers/SqliteDriver";
export { MySQLDriver } from "./drivers/MySQLDriver";
export interface ISimpleDBOptions {
    filePath?: string;
    table?: string;
    driver?: IDriver;
    normalKeys?: boolean;
}
export declare class SimpleDB {
    options: ISimpleDBOptions;
    tableName: string;
    driver: IDriver;
    normalKeys: boolean;
    constructor(options?: ISimpleDBOptions);
    private addSubtract;
    private getArray;
    all(): Promise<{
        id: string;
        value: any;
    }[]>;
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: any): Promise<T>;
    has(key: string): Promise<boolean>;
    delete(key: string): Promise<number>;
    deleteAll(): Promise<number>;
    add(key: string, value: number): Promise<number>;
    sub(key: string, value: number): Promise<number>;
    push<T>(key: string, value: any | any[]): Promise<T[]>;
    unshift<T>(key: string, value: any | any[]): Promise<T[]>;
    pop<T>(key: string): Promise<any>;
    shift<T>(key: string): Promise<any>;
    pull<T>(key: string, value: any | any[] | ((data: any) => boolean)): Promise<T[]>;
    startsWith(query: string, key?: string): Promise<{
        id: string;
        value: any;
    }[]>;
    table(table: string): SimpleDB;
    useNormalKeys(toggle: boolean): void;
}
