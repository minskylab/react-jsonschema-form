/// <reference types="react" />
/// <reference types="@rjsf/core" />
import SelectWidget from '../SelectWidget/SelectWidget';
declare const widgets: {
    BaseInput: import("react").FC<import("@rjsf/core").WidgetProps & {
        schema: import("json-schema").JSONSchema7 & {
            examples: any;
        };
    } & import("@chakra-ui/input").InputProps & {
        list: string | undefined;
    }>;
    CheckboxWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
    CheckboxesWidget: ({ id, disabled, options, value, readonly, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    radio: ({ id, schema, options, value, disabled, required, readonly, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    RangeWidget: ({ value, readonly, disabled, onBlur, onFocus, options, schema, onChange, label, id, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    select: typeof SelectWidget;
    TextareaWidget: ({ id, placeholder, value, disabled, autofocus, readonly, onBlur, onFocus, onChange, options, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    UpDownWidget: ({ id, readonly, disabled, value, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
};
export default widgets;
