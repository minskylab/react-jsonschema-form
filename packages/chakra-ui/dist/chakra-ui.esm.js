import React from 'react';
import { Text, Box, Heading, Divider, FormControl, FormLabel, FormErrorMessage, FormHelperText, Stack, Button, IconButton, Flex, List, ListItem, ListIcon, Input, CheckboxGroup, Checkbox, RadioGroup, Radio, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { getDefaultRegistry, isMultiSelect, asNumber, guessType } from '@rjsf/core/lib/utils';
import { MdAdd, MdRemove, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import PropTypes from 'prop-types';
import { utils } from '@rjsf/core';

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;
  // if (!description) {
  //   return null;
  // }
  return React.createElement(Text, {
    fontSize: "sm",
    mb: 2,
    opacity: "0.9"
  }, description);
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(Box, {
    mb: 1,
    mt: 1
  }, React.createElement(Heading, {
    as: "h5",
    fontWeight: "500",
    color: "green.800",
    size: "md",
    mt: 6
  }, title), React.createElement(Divider, null));
};

var fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField
};

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      label = _ref.label,
      displayLabel = _ref.displayLabel,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      required = _ref.required,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp;
  return React.createElement(FormControl, {
    isDisabled: disabled,
    mt: 4,
    isReadOnly: readonly,
    isRequired: required,
    isInvalid: !!rawErrors.length
  }, displayLabel && React.createElement(FormLabel, {
    fontWeight: "500",
    fontSize: "0.9rem",
    htmlFor: id
  }, label), children, rawErrors.length > 0 && rawErrors.map(function (error, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(FormErrorMessage, {
        key: i,
        id: id
      }, error)
    );
  }), rawHelp && React.createElement(FormHelperText, {
    id: id
  }, rawHelp));
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      description = _ref.description,
      TitleField = _ref.TitleField,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      uiSchema = _ref.uiSchema,
      idSchema = _ref.idSchema;
  return React.createElement(React.Fragment, null, (uiSchema["ui:title"] || title) && React.createElement(TitleField, {
    id: idSchema.$id + "-title",
    title: title,
    required: required
  }), description && React.createElement(DescriptionField, {
    id: idSchema.$id + "-description",
    description: description
  }), React.createElement(Stack, {
    spacing: 2,
    mt: 3
  }, properties.map(function (element, index) {
    return React.createElement(Box, {
      key: [element.content, index].join("_"),
      mb: 3
    }, element.content);
  })));
};

var AddButton = function AddButton(props) {
  return React.createElement(Button, Object.assign({
    variant: "outline",
    fontWeight: "500",
    size: "sm",
    leftIcon: React.createElement(MdAdd, null)
  }, props), props.children);
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var mappings = {
  remove: /*#__PURE__*/React.createElement(MdRemove, null),
  plus: /*#__PURE__*/React.createElement(MdAdd, null),
  "arrow-up": /*#__PURE__*/React.createElement(MdArrowUpward, null),
  "arrow-down": /*#__PURE__*/React.createElement(MdArrowDownward, null)
};

var MyIconButton = function MyIconButton(_ref) {
  var _mappings$iconMap;

  var iconMap = _ref.iconMap,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["iconMap"]);

  // const { iconMap, ...otherProps } = props;
  //@ts-ignore
  return React.createElement(IconButton, Object.assign({}, otherProps, {
    size: "sm",
    icon: (_mappings$iconMap = mappings[iconMap]) !== null && _mappings$iconMap !== void 0 ? _mappings$iconMap : React.createElement(MdAdd, null)
  }));
};

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry;

  if (isMultiSelect(schema, registry.rootSchema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  }

  return React.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;
  var id = idSchema.$id + "__title";

  if (!title) {
    return React.createElement(TitleField, {
      id: id,
      title: title,
      required: required
    });
  }

  return React.createElement(React.Fragment, null, React.createElement(Divider, {
    mb: 3
  }), React.createElement(FormLabel, {
    fontSize: "0.9rem",
    fontWeight: "500",
    htmlFor: id
  }, title));
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    return React.createElement(React.Fragment, null);
  }

  var id = idSchema.$id + "__description";
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
}; // Used in the two templates


var DefaultArrayItem = function DefaultArrayItem(_ref3) {
  var index = _ref3.index,
      children = _ref3.children,
      hasToolbar = _ref3.hasToolbar,
      hasMoveUp = _ref3.hasMoveUp,
      hasMoveDown = _ref3.hasMoveDown,
      disabled = _ref3.disabled,
      readonly = _ref3.readonly,
      hasRemove = _ref3.hasRemove,
      onReorderClick = _ref3.onReorderClick,
      onDropIndexClick = _ref3.onDropIndexClick;
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return React.createElement(Flex, {
    key: index,
    alignItems: "flex-end",
    justifyContent: "flex-start"
  }, React.createElement(Box, {
    flexGrow: 1,
    py: 1,
    mb: 1
  }, children), hasToolbar && React.createElement(Flex, {
    justify: "space-between",
    alignItems: "flex-end",
    direction: ["column", "row"],
    pb: [2, 2],
    pl: 1,
    ml: 1
  }, (hasMoveUp || hasMoveDown) && React.createElement(MyIconButton, {
    p: 2,
    mt: 2,
    minHeight: "35px",
    minWidth: "35px",
    iconMap: "arrow-up",
    "aria-label": "array-item-move-up",
    className: "array-item-move-up",
    tabIndex: -1,
    sx: btnStyle,
    isDisabled: disabled || readonly || !hasMoveUp,
    onClick: function onClick() {
      return onReorderClick(index, index - 1);
    }
  }), (hasMoveUp || hasMoveDown) && React.createElement(MyIconButton, {
    p: 2,
    mt: 2,
    mx: [0, 1],
    minHeight: "35px",
    minWidth: "35px",
    iconMap: "arrow-down",
    "aria-label": "array-item-move-down",
    tabIndex: -1,
    sx: btnStyle,
    isDisabled: disabled || readonly || !hasMoveDown,
    onClick: function onClick() {
      return onReorderClick(index, index + 1);
    }
  }), hasRemove && React.createElement(MyIconButton, {
    p: 2,
    mt: 2,
    minHeight: "35px",
    minWidth: "35px",
    iconMap: "remove",
    "aria-label": "array-item-remove",
    tabIndex: -1,
    sx: btnStyle,
    isDisabled: disabled || readonly,
    onClick: function onClick() {
      return onDropIndexClick(index);
    }
  })));
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(_ref4) {
  var className = _ref4.className,
      idSchema = _ref4.idSchema,
      TitleField = _ref4.TitleField,
      title = _ref4.title,
      required = _ref4.required,
      schema = _ref4.schema,
      uiSchema = _ref4.uiSchema,
      items = _ref4.items,
      canAdd = _ref4.canAdd,
      onAddClick = _ref4.onAddClick,
      disabled = _ref4.disabled,
      readonly = _ref4.readonly;
  return React.createElement("fieldset", {
    className: className
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + idSchema.$id,
    TitleField: TitleField,
    idSchema: idSchema,
    title: uiSchema["ui:title"] || title,
    required: required
  }), (uiSchema["ui:description"] || schema.description) && React.createElement("div", {
    className: "field-description",
    key: "field-description-" + idSchema.$id
  }, uiSchema["ui:description"] || schema.description), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-" + idSchema.$id
  }, items && items.map(DefaultArrayItem)), canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: onAddClick,
    disabled: disabled || readonly
  }));
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(_ref5) {
  var idSchema = _ref5.idSchema,
      TitleField = _ref5.TitleField,
      DescriptionField = _ref5.DescriptionField,
      uiSchema = _ref5.uiSchema,
      schema = _ref5.schema,
      title = _ref5.title,
      required = _ref5.required,
      items = _ref5.items,
      canAdd = _ref5.canAdd,
      onAddClick = _ref5.onAddClick,
      disabled = _ref5.disabled,
      readonly = _ref5.readonly;
  return React.createElement(Box, {
    py: 2
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + idSchema.$id,
    TitleField: TitleField,
    idSchema: idSchema,
    title: uiSchema["ui:title"] || title,
    required: required
  }), (uiSchema["ui:description"] || schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + idSchema.$id,
    DescriptionField: DescriptionField,
    idSchema: idSchema,
    description: uiSchema["ui:description"] || schema.description
  }), React.createElement(Flex, {
    key: "array-item-list-" + idSchema.$id,
    direction: "column",
    justify: "center"
  }, items && items.map(function (p) {
    return DefaultArrayItem(p);
  }), canAdd && React.createElement(Flex, {
    justify: "flex-end"
  }, React.createElement(Box, {
    mt: 2
  }, React.createElement(AddButton, {
    onClick: onAddClick,
    isDisabled: disabled || readonly
  }, "Add More")))));
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Box, {
    mb: 2,
    p: 2
  }, React.createElement(Heading, {
    as: "h6",
    size: "md",
    fontWeight: "500",
    color: "red.600"
  }, "Errors"), React.createElement(List, {
    spacing: 2
  }, errors.map(function (error, i) {
    return React.createElement(ListItem, {
      key: i
    }, React.createElement(ListIcon, {
      icon: "warning-2"
    }), error.stack);
  })));
};

// type TWidgetProps = WidgetProps & {
//   schema: JSONSchema7 & {
//     examples:
//       | string
//       | number
//       | boolean
//       | JSONSchema7Object
//       | JSONSchema7Array
//       | string[]
//       | any;
//   };
// };
// type ExtInputProps = InputProps & {
//   list: string | undefined;
//   // onChange: any;
//   // onBlur: any;
//   // onFocus: any;
// };
// type TBaseInput = TWidgetProps & ExtInputProps;

var BaseInput = function BaseInput(_ref) {
  var id = _ref.id,
      props = _objectWithoutPropertiesLoose(_ref, ["id"]);

  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!id) {
    throw new Error("no id for props " + JSON.stringify(props));
  }

  var value = props.value,
      readonly = props.readonly,
      disabled = props.disabled,
      autofocus = props.autofocus,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      options = props.options,
      schema = props.schema,
      _inputProps = _objectWithoutPropertiesLoose(props, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema"]);

  var inputProps = _inputProps; // If options.inputType is set use that as the input type

  if (options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    // If the schema is of type number or integer, set the input type to number
    if (schema.type === "number") {
      inputProps.type = "number"; // Setting step to 'any' fixes a bug in Safari where decimals are not
      // allowed in number inputs

      inputProps.step = "any";
    } else if (schema.type === "integer") {
      inputProps.type = "number"; // Since this is integer, you always want to step up or down in multiples
      // of 1

      inputProps.step = "1";
    } else {
      inputProps.type = "text";
    }
  }

  if (options.autocomplete) {
    inputProps.autoComplete = options.autocomplete;
  } // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).


  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== "undefined") {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== "undefined") {
    inputProps.max = schema.maximum;
  }

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return props.onChange(value === "" ? options.emptyValue : value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Input, Object.assign({
    key: inputProps.id,
    className: "form-control",
    isReadOnly: readonly,
    isDisabled: disabled,
    autoFocus: autofocus,
    value: value == null ? "" : value
  }, inputProps, {
    list: schema.examples ? "examples_" + inputProps.id : undefined,
    onChange: _onChange,
    onBlur: onBlur && function (event) {
      return onBlur(inputProps.id, event.target.value);
    },
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    }
  })));
};

BaseInput.defaultProps = {
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
  placeholder: undefined,
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  value: undefined
};

if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any
  };
}

//   const at = all.indexOf(value);
//   const updated = selected.slice(0, at).concat(value, selected.slice(at));
//   // As inserting values at predefined index positions doesn't work with empty
//   // arrays, we need to reorder the updated selection to match the initial order
//   return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
// };
// const deselectValue = (value, selected) => {
//   return selected.filter((v) => v !== value);
// };

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      readonly = _ref.readonly,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled; // const _onChange = option => ({ target: { checked } }) => {
  //   const all = enumOptions.map(({ value }) => value)
  //   if (checked) {
  //     onChange(selectValue(option.value, value, all))
  //   } else {
  //     onChange(deselectValue(option.value, value))
  //   }
  // }

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  return React.createElement(CheckboxGroup, {
    onChange: function onChange(option) {
      return _onChange(option);
    }
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return React.createElement(Checkbox, {
      key: id + "_" + index,
      id: id + "_" + index,
      value: option.value,
      isChecked: checked,
      isDisabled: disabled || itemDisabled || readonly,
      onBlur: _onBlur,
      paddingTop: "0",
      display: "inline-flex",
      onFocus: _onFocus
    }, React.createElement(FormLabel, {
      fontWeight: "400",
      htmlFor: id + "_" + index,
      display: "inline-flex",
      fontSize: "0.9rem"
    }, option.label));
  }));
};

var CheckboxWidget = function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      disabled = props.disabled,
      readonly = props.readonly,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var _onChange = function _onChange(_ref) {
    var checked = _ref.target.checked;
    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Checkbox, {
    id: id,
    isChecked: typeof value === "undefined" ? false : value,
    isDisabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  });
};

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      disabled = _ref.disabled,
      required = _ref.required,
      readonly = _ref.readonly,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  // Generating a unique field name to identify this set of radio buttons
  var name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled; // eslint-disable-next-line no-empty-pattern

  var _onChange = function _onChange(value) {
    return onChange(schema.type === "boolean" ? value !== "false" : value);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  var inline = !!options.inline;
  var paddingRatio = inline ? 4 : 2; // Number

  return React.createElement(FormControl, {
    required: required
  }, React.createElement(RadioGroup, {
    name: name,
    value: "" + value,
    isInline: inline,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Radio, {
        value: "" + option.value,
        key: i,
        pr: paddingRatio,
        isDisabled: disabled || itemDisabled || readonly
      }, option.label)
    );
  })));
};

var rangeSpec = utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema,
      onChange = _ref.onChange,
      label = _ref.label,
      id = _ref.id;

  var sliderProps = _extends({
    value: value,
    label: label,
    id: id
  }, rangeSpec(schema));

  var _onChange = function _onChange(value) {
    return onChange(value === undefined ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Slider, Object.assign({}, sliderProps, {
    isDisabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }), React.createElement(SliderTrack, null), React.createElement(SliderFilledTrack, null), React.createElement(SliderThumb, null));
};

var nums = /*#__PURE__*/new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  }

  if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  }

  if (type === "boolean") {
    return value === "true";
  }

  if (type === "number") {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema["enum"]) {
    if (schema["enum"].every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    }

    if (schema["enum"].every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice.call(event.target.options) // @ts-ignore
    .filter(function (o) {
      return o.selected;
    }) // @ts-ignore
    .map(function (o) {
      return o.value;
    });
  }

  return event.target.value;
}

function SelectWidget(props) {
  var schema = props.schema,
      id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";
  return React.createElement(Select, {
    id: id,
    multiple: multiple,
    value: typeof value === "undefined" ? emptyValue : value,
    isRequired: required,
    isDisabled: disabled,
    isReadOnly: readonly,
    autoFocus: autofocus,
    onBlur: onBlur && function (event) {
      var newValue = getValue(event, multiple);
      onBlur(id, processValue(schema, newValue));
    },
    onFocus: onFocus && function (event) {
      var newValue = getValue(event, multiple);
      onFocus(id, processValue(schema, newValue));
    },
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);

      _onChange(processValue(schema, newValue));
    }
  }, !multiple && schema["default"] === undefined && React.createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref, i) {
    var value = _ref.value,
        label = _ref.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) !== -1;
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement("option", {
        key: i,
        value: value,
        disabled: disabled
      }, label)
    );
  }));
}

SelectWidget.defaultProps = {
  autofocus: false,
  required: false,
  disabled: false,
  readonly: false,
  multiple: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
}; // if (process.env.NODE_ENV !== "production") {

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      options = _ref.options;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(Textarea, {
    id: id,
    value: value,
    placeholder: placeholder,
    isDisabled: disabled,
    isReadOnly: readonly,
    autoFocus: autofocus,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  });
};

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;

  var _onChange = function _onChange(value) {
    return onChange(value);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  return React.createElement(NumberInput, {
    id: id,
    isDisabled: disabled || readonly,
    value: value,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, React.createElement(NumberInputField, null), React.createElement(NumberInputStepper, null, React.createElement(NumberIncrementStepper, null), React.createElement(NumberDecrementStepper, null)));
};

var widgets = {
  BaseInput: BaseInput,
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  radio: RadioWidget,
  RangeWidget: RangeWidget,
  select: SelectWidget,
  TextareaWidget: TextareaWidget,
  UpDownWidget: UpDownWidget
};

var Theme = {
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields: fields,
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets: widgets,
  ErrorList: ErrorList
};

export { FieldTemplate, fields as Fields, ObjectFieldTemplate, Theme, widgets as Widgets };
//# sourceMappingURL=chakra-ui.esm.js.map
