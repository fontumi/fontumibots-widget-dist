import { Bot } from "../../utils/interfaces";
/**
 * Componente base del widget. Contiene el resto de elementos que conforman el chat.
 */
export declare class FontumibotsWidget {
    /**
     * Bot unique ID
     */
    botId: string;
    opened: boolean;
    bot: Bot;
    error: boolean;
    phoneReady: boolean;
    widgetElement: HTMLElement;
    componentWillLoad(): Promise<unknown>;
    toggle: () => boolean;
    toggleAndCall: () => void;
    render(): any;
}
