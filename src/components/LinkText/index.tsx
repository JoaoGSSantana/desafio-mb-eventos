import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { LinkContainer, LinkText as LinkTextPrimitive } from "./styles";

type Props = TouchableOpacityProps & {
    children: ReactNode;
};

export function LinkText({ children, ...rest }: Props) {
    return (
        <LinkContainer {...rest}>
            <LinkTextPrimitive>{children}</LinkTextPrimitive>
        </LinkContainer>
    );
}
