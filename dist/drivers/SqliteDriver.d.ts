import { IDriver } from "./IDriver";
import type { Database } from "better-sqlite3";
export declare class SqliteDriver implements IDriver {
    database: Database;
    constructor(path: string);
    prepare(table: string): Promise<void>;
    getAllRows(table: string): Promise<{
        id: string;
        value: any;
    }[]>;
    getRowByKey<T>(table: string, key: string): Promise<T | null>;
    setRowByKey<T>(table: string, key: string, value: any, update: boolean): Promise<T>;
    deleteAllRows(table: string): Promise<number>;
    deleteRowByKey(table: string, key: string): Promise<number>;
}
