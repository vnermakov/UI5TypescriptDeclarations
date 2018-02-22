declare module 'sap/ui/table/AnalyticalColumnMenu' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ColumnMenu, IColumnMenuSettings } from 'sap/ui/table/ColumnMenu';

    export interface IAnalyticalColumnMenuSettings extends IColumnMenuSettings {
    }

    /**
    
    */
    export class AnalyticalColumnMenu extends ColumnMenu {

        /**
            * Constructor for a new AnalyticalColumnMenu.
        */
        public constructor(sId: string, mSettings: IAnalyticalColumnMenuSettings);


        /**
            * Creates a new subclass of class sap.ui.table.AnalyticalColumnMenu with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.ColumnMenu.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.table.AnalyticalColumnMenu.
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