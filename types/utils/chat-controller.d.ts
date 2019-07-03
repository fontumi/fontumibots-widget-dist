import { Block as BlockInterface, Link as LinkInterface } from "./interfaces";
/**
 * Bloque
 */
declare class Block implements BlockInterface {
    id: number;
    name: string;
    title: string;
    values: {
        property: {
            [key: string]: any;
        };
    };
    constructor(id: number, name: string, title: string, values: {
        property: {
            [key: string]: any;
        };
    });
    props(): {
        [key: string]: any;
    };
    question(): {
        type: string;
        value: any;
    };
}
/**
 * Controlador para el bot
 */
export declare class ChatController {
    private blocks;
    private links;
    /**
     * Bloque inicial
     */
    startBlock: Block;
    /**
     * Bloque (pregunta) actual
     */
    actualBlock: Block;
    /**
     * Crea un nuevo controlador.
     * @param links Lista de enlaces
     * @param blocks Lista de bloques
     */
    constructor(links: Array<LinkInterface>, blocks: Array<BlockInterface>);
    /**
     * Encontrar todos los bloques del mismo tipo
     * @param name
     */
    blockByName(name: any): Block[];
    /**
     * Encontrar bloque usando ID
     * @param id
     */
    blockById(id: any): Block;
    /**
     * Pasar al siguiente bloque (siguiente pregunta)
     * @param slot Numero del slot que se tomara para seguir el camino
     */
    next(slot?: number): Block;
}
export {};
