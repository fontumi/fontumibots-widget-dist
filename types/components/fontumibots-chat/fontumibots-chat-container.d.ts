import { Bot } from "../../utils/interfaces";
import { ChatController } from "../../utils/chat-controller";
export declare class FontumibotsChatContainer {
    /**
     * Bot
     */
    bot: Bot;
    /**
     * Lista de mensajes (preguntas y respuestas)
     */
    messages: Array<{
        id: number;
        message: string;
        user: boolean;
    }>;
    /**
     * Tipo actual de bloque (pregunta)
     */
    actualQuestionType: string;
    inCall: boolean;
    phoneReady: boolean;
    controller: ChatController;
    /**
     * Hacer una llamada
     */
    call: () => void;
    hangup: () => void;
    /**
     * Manejar la resputa del usuario
     */
    answer: (e: any) => void;
    /**
     * Preguntar
     */
    ask(): Promise<void>;
    /**
     * Inicializar controlador de chat
     */
    initChatController(): void;
    /**
     * Agregar mensaje a la lista de mensajes
     * TODO: hacer scroll del container de mensajes
     */
    addMessage(message: string, user: boolean): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
