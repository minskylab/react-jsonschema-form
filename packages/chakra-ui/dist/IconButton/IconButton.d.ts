/// <reference types="react" />
import { IconButtonProps } from "@chakra-ui/react";
declare type TIconButtonProps = IconButtonProps & {
    iconMap: string;
};
declare const MyIconButton: ({ iconMap, ...otherProps }: TIconButtonProps) => JSX.Element;
export default MyIconButton;
