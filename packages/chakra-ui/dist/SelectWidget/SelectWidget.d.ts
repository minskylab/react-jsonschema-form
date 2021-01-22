/// <reference types="react" />
import { WidgetProps } from "@rjsf/core";
declare function SelectWidget(props: WidgetProps): JSX.Element;
declare namespace SelectWidget {
    var defaultProps: {
        autofocus: boolean;
        required: boolean;
        disabled: boolean;
        readonly: boolean;
        multiple: boolean;
        onChange: () => void;
        onBlur: () => void;
        onFocus: () => void;
    };
}
export default SelectWidget;
