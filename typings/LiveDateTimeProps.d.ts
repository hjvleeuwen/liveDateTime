/**
 * This file was generated from LiveDateTime.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface LiveDateTimeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dateFormat: string;
}

export interface LiveDateTimePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dateFormat: string;
}
