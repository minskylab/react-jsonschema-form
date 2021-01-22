import React from "react";
import { InputProps } from "@chakra-ui/react";
import { WidgetProps } from "@rjsf/core";
import { JSONSchema7, JSONSchema7Object, JSONSchema7Array } from "json-schema";
declare type TWidgetProps = WidgetProps & {
    schema: JSONSchema7 & {
        examples: string | number | boolean | JSONSchema7Object | JSONSchema7Array | string[] | any;
    };
};
declare type ExtInputProps = InputProps & {
    list: string | undefined;
};
declare type TBaseInput = TWidgetProps & ExtInputProps;
declare const BaseInput: React.FC<TBaseInput>;
export default BaseInput;
