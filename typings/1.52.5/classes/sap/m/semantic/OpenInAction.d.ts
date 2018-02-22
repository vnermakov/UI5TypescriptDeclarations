declare module 'sap/m/semantic/OpenInAction' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SemanticButton, ISemanticButtonSettings } from 'sap/m/semantic/SemanticButton';

    export interface IOpenInActionSettings extends ISemanticButtonSettings {
    }

    /**
    
    */
    export class OpenInAction extends SemanticButton {

        /**
            * Constructor for a new OpenInAction.
        */
        public constructor(sId: string, mSettings: IOpenInActionSettings);


        /**
            * Creates a new subclass of class sap.m.semantic.OpenInAction with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticButton.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.semantic.OpenInAction.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

    }
}