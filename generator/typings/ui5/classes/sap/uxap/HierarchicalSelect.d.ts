declare module 'sap/uxap/HierarchicalSelect' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Select, ISelectSettings } from 'sap/m/Select';

    export interface IHierarchicalSelectSettings extends ISelectSettings {
        upperCase?: boolean;
    }

    /**
    
    */
    export class HierarchicalSelect extends Select {

        /**
            * Constructor for a new HierarchicalSelect.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IHierarchicalSelectSettings);


        /**
            * Creates a new subclass of class sap.uxap.HierarchicalSelect with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Select.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.uxap.HierarchicalSelect.
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

        /**
            * Gets current value of property {@link #getUpperCase upperCase}.
         * 
         * Determines whether the HierarchicalSelect items are displayed in upper case.
         * 
         * Default value is `false`.
        */
        public getUpperCase(): boolean;

        /**
            * Sets a new value for property {@link #getUpperCase upperCase}.
         * 
         * Determines whether the HierarchicalSelect items are displayed in upper case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUpperCase(bUpperCase: boolean): this;

    }
}