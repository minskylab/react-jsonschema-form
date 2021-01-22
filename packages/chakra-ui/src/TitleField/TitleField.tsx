import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";
import { Field, FieldProps } from "@rjsf/core";

const TitleField: Field = ({ title }: FieldProps) => (
  <Box mb={1} mt={1}>
    <Heading as="h5" fontWeight="500" color="green.800" size="md" mt={6}>
      {title}
    </Heading>
    <Divider />
  </Box>
);

export default TitleField;
