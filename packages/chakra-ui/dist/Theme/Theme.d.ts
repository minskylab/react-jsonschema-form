/// <reference types="react" />
/// <reference types="@rjsf/core" />
declare const Theme: {
    ArrayFieldTemplate: (props: import("@rjsf/core").ArrayFieldTemplateProps<any>) => JSX.Element;
    fields: {
        DescriptionField: ({ description }: import("@rjsf/core").FieldTemplateProps) => JSX.Element | null;
        TitleField: import("react").FC<import("@rjsf/core").WidgetProps & import("@chakra-ui/layout").HeadingProps>;
    };
    FieldTemplate: ({ id, children, label, displayLabel, disabled, readonly, required, rawErrors, rawHelp, }: import("@rjsf/core").FieldTemplateProps) => JSX.Element;
    ObjectFieldTemplate: ({ DescriptionField, description, TitleField, title, properties, required, uiSchema, idSchema, }: import("@rjsf/core").ObjectFieldTemplateProps<any>) => JSX.Element;
    widgets: {
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
        select: typeof import("../SelectWidget/SelectWidget").default;
        TextareaWidget: ({ id, placeholder, value, disabled, autofocus, readonly, onBlur, onFocus, onChange, options, }: import("@rjsf/core").WidgetProps) => JSX.Element;
        UpDownWidget: ({ id, readonly, disabled, value, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    };
    ErrorList: ({ errors }: import("@rjsf/core").ErrorListProps) => JSX.Element;
};
export default Theme;
