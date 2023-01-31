export interface ResponseDTO<T> {
    cause: string | null;
    data: T;
    error: string | null;
    message: string | null;
    status: number;
    timeStamp: Date;
}
