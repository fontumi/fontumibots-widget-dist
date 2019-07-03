/**
 * Bloque
 */
class Block {
    constructor(id, name, title, values) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.values = values;
    }
    props() {
        return this.values.property;
    }
    question() {
        let prop;
        switch (this.name) {
            case "end": {
                prop = "goodbye_text";
                break;
            }
            case "start": {
                prop = "welcome_text";
                break;
            }
            default: {
                prop = "question";
                break;
            }
        }
        const value = this.values.property[prop].value || "";
        return {
            type: this.name,
            value
        };
    }
}
/**
 * Enlace entre bloques
 */
class Link {
    constructor(id, originID, originSlot, targetID, targetSlot) {
        this.id = id;
        this.originID = originID;
        this.originSlot = originSlot;
        this.targetID = targetID;
        this.targetSlot = targetSlot;
    }
}
/**
 * Controlador para el bot
 */
export class ChatController {
    /**
     * Crea un nuevo controlador.
     * @param links Lista de enlaces
     * @param blocks Lista de bloques
     */
    constructor(links, blocks) {
        this.blocks = [];
        this.links = [];
        blocks.map(block => this.blocks.push(new Block(block.id, block.name, block.title, block.values)));
        links.map(link => this.links.push(new Link(link.id, link.originID, link.originSlot, link.targetID, link.targetSlot)));
        this.startBlock = this.blockByName("start")[0];
        this.actualBlock = this.startBlock;
    }
    /**
     * Encontrar todos los bloques del mismo tipo
     * @param name
     */
    blockByName(name) {
        return this.blocks.filter(b => b.name === name);
    }
    /**
     * Encontrar bloque usando ID
     * @param id
     */
    blockById(id) {
        return this.blocks.find(b => b.id === id);
    }
    /**
     * Pasar al siguiente bloque (siguiente pregunta)
     * @param slot Numero del slot que se tomara para seguir el camino
     */
    next(slot = 0) {
        if (this.actualBlock.name === "end")
            return; // si es un bloque final, permanecer
        // encontrar el siguiente enlace en la lista de enlaces
        const nextLink = this.links.find(link => link.originID === this.actualBlock.id && link.originSlot === slot);
        // encontrar el siguiente bloque
        const nextBlock = this.blockById(nextLink.targetID);
        this.actualBlock = nextBlock;
        return nextBlock;
    }
}
