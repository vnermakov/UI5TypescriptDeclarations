declare module 'sap/ui/model/odata/type/Int64' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType, IODataTypeSettings } from 'sap/ui/model/odata/type/ODataType';

    export interface IInt64Settings extends IODataTypeSettings {
    }

    /**
    
    */
    export class Int64 extends ODataType {

        /**
            * Constructor for a primitive type `Edm.Int64`.
        */
        public constructor(oConstraints: { nullable?: boolean | string, });

        /**
            * Constructor for a primitive type `Edm.Int64`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.Int64 with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Formats the given value to the given target type.
        */
        public formatValue(sValue: string, sTargetType: string): number | string | any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.Int64.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the type's name.
        */
        public getName(): string;

        /**
            * Parses the given value, which is expected to be of the given type, to an Int64 in `string` representation.
        */
        public parseValue(vValue: string | number, sSourceType: string): string | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validates whether the given value in model representation is valid and meets the defined constraints.
        */
        public validateValue(sValue: string): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(oValue: any): any;

    }
}