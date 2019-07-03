import { EventEmitter } from "../../stencil.core";
/**
 * Input del chat. Varia segun el tipo de respuesta esperada.
 * Verifica que la respuesta sea valida.
 * @author krthr
 * @since 1.0.0
 */
export declare class FontumibotsChatInput {
    sendMessageEvent: EventEmitter;
    props: object;
    type: string;
    message: any;
    validMessage: boolean;
    handleInput: (e: any) => any;
    /**
     * Verificar que la respuesta sea valida. Si lo es, emitir el
     * evento `sendMessage` con el mensaje como dato.
     */
    sendMessage(): Promise<void>;
    /**
     * Manejar el `enter`.
     */
    handleKeyPress: (e: any) => true | Promise<void>;
    render(): any;
}
