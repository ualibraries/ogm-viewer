/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { OgmRecord } from "./utils/record";
export { OgmRecord } from "./utils/record";
export namespace Components {
    interface OgmMenubar {
        "record": OgmRecord;
    }
    interface OgmMetadata {
        "fieldNames": string[];
        "record": OgmRecord;
    }
    interface OgmSidebar {
        "open": boolean;
        "record": OgmRecord;
    }
    interface OgmViewer {
        "recordUrl": string;
    }
}
export interface OgmMenubarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOgmMenubarElement;
}
export interface OgmViewerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOgmViewerElement;
}
declare global {
    interface HTMLOgmMenubarElementEventMap {
        "sidebarToggled": any;
    }
    interface HTMLOgmMenubarElement extends Components.OgmMenubar, HTMLStencilElement {
        addEventListener<K extends keyof HTMLOgmMenubarElementEventMap>(type: K, listener: (this: HTMLOgmMenubarElement, ev: OgmMenubarCustomEvent<HTMLOgmMenubarElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLOgmMenubarElementEventMap>(type: K, listener: (this: HTMLOgmMenubarElement, ev: OgmMenubarCustomEvent<HTMLOgmMenubarElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLOgmMenubarElement: {
        prototype: HTMLOgmMenubarElement;
        new (): HTMLOgmMenubarElement;
    };
    interface HTMLOgmMetadataElement extends Components.OgmMetadata, HTMLStencilElement {
    }
    var HTMLOgmMetadataElement: {
        prototype: HTMLOgmMetadataElement;
        new (): HTMLOgmMetadataElement;
    };
    interface HTMLOgmSidebarElement extends Components.OgmSidebar, HTMLStencilElement {
    }
    var HTMLOgmSidebarElement: {
        prototype: HTMLOgmSidebarElement;
        new (): HTMLOgmSidebarElement;
    };
    interface HTMLOgmViewerElementEventMap {
        "recordLoaded": OgmRecord;
    }
    interface HTMLOgmViewerElement extends Components.OgmViewer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLOgmViewerElementEventMap>(type: K, listener: (this: HTMLOgmViewerElement, ev: OgmViewerCustomEvent<HTMLOgmViewerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLOgmViewerElementEventMap>(type: K, listener: (this: HTMLOgmViewerElement, ev: OgmViewerCustomEvent<HTMLOgmViewerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLOgmViewerElement: {
        prototype: HTMLOgmViewerElement;
        new (): HTMLOgmViewerElement;
    };
    interface HTMLElementTagNameMap {
        "ogm-menubar": HTMLOgmMenubarElement;
        "ogm-metadata": HTMLOgmMetadataElement;
        "ogm-sidebar": HTMLOgmSidebarElement;
        "ogm-viewer": HTMLOgmViewerElement;
    }
}
declare namespace LocalJSX {
    interface OgmMenubar {
        "onSidebarToggled"?: (event: OgmMenubarCustomEvent<any>) => void;
        "record"?: OgmRecord;
    }
    interface OgmMetadata {
        "fieldNames"?: string[];
        "record"?: OgmRecord;
    }
    interface OgmSidebar {
        "open"?: boolean;
        "record"?: OgmRecord;
    }
    interface OgmViewer {
        "onRecordLoaded"?: (event: OgmViewerCustomEvent<OgmRecord>) => void;
        "recordUrl"?: string;
    }
    interface IntrinsicElements {
        "ogm-menubar": OgmMenubar;
        "ogm-metadata": OgmMetadata;
        "ogm-sidebar": OgmSidebar;
        "ogm-viewer": OgmViewer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ogm-menubar": LocalJSX.OgmMenubar & JSXBase.HTMLAttributes<HTMLOgmMenubarElement>;
            "ogm-metadata": LocalJSX.OgmMetadata & JSXBase.HTMLAttributes<HTMLOgmMetadataElement>;
            "ogm-sidebar": LocalJSX.OgmSidebar & JSXBase.HTMLAttributes<HTMLOgmSidebarElement>;
            "ogm-viewer": LocalJSX.OgmViewer & JSXBase.HTMLAttributes<HTMLOgmViewerElement>;
        }
    }
}
