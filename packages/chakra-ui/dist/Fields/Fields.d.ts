/// <reference types="react" />
/// <reference types="@rjsf/core" />
declare const fields: {
    DescriptionField: ({ description }: import("@rjsf/core").FieldTemplateProps) => JSX.Element | null;
    TitleField: import("react").FC<import("@rjsf/core").WidgetProps & import("@chakra-ui/layout").HeadingProps>;
};
export default fields;
