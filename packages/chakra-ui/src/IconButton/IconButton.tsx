import React, { ReactElement } from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import {
  MdAdd,
  MdRemove,
  MdArrowUpward,
  MdArrowDownward,
} from "react-icons/md";

const mappings: { [key: string]: ReactElement } = {
  remove: <MdRemove />,
  plus: <MdAdd />,
  "arrow-up": <MdArrowUpward />,
  "arrow-down": <MdArrowDownward />,
};

type TIconButtonProps = IconButtonProps & {
  iconMap: string;
};

const MyIconButton = ({ iconMap, ...otherProps }: TIconButtonProps) => {
  // const { iconMap, ...otherProps } = props;
  //@ts-ignore
  return (
    <IconButton
      {...otherProps}
      size="sm"
      icon={mappings[iconMap] ?? <MdAdd />}
    />
  );
};

export default MyIconButton;
