/// <reference types="react" />
import PropTypes from "prop-types";
import { WidgetProps } from "@rjsf/core";
declare function SelectWidget(props: WidgetProps): JSX.Element;
declare namespace SelectWidget {
    var defaultProps: {
        autofocus: boolean;
        required: boolean;
        disabled: boolean;
        readonly: boolean;
        multiple: boolean;
        onChange: null;
        onBlur: null;
        onFocus: null;
    };
    var propTypes: {
        schema: PropTypes.Validator<object>;
        id: PropTypes.Validator<string>;
        options: PropTypes.Validator<PropTypes.InferProps<{
            enumOptions: PropTypes.Requireable<any[]>;
        }>>;
        required: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        readonly: PropTypes.Requireable<boolean>;
        multiple: PropTypes.Requireable<boolean>;
        autofocus: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default SelectWidget;
