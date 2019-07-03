export interface Bot {
    readonly name?: string;
    readonly email?: string;
    readonly description?: string;
    readonly escene?: {
        links: Array<Link>;
        blocks: Array<Block>;
    };
    readonly user_id?: string;
    readonly colors?: {
        a: string;
        b: string;
    };
}
export interface Block {
    readonly id: number;
    readonly name: string;
    readonly title: string;
    readonly values: {
        property: {
            [key: string]: any;
        };
    };
}
export interface Link {
    readonly id: number;
    readonly originID: number;
    readonly originSlot: number;
    readonly targetID: number;
    readonly targetSlot: number;
}
