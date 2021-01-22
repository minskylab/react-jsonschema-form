import React from "react";
import { Text } from "@chakra-ui/react";
import { Field, FieldProps } from "@rjsf/core";

const DescriptionField: Field = ({ description }: FieldProps) => {
  // if (!description) {
  //   return null;
  // }

  return (
    <Text fontSize="sm" mb={2} opacity="0.9">
      {description}
    </Text>
  );
};

export default DescriptionField;
