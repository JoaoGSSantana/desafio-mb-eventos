import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";

type Props = TouchableOpacityProps & {
    text: string;
};

export function Button({ text, ...rest }: Props) {
    return (
        <Container {...rest}>
            <ButtonText>{text}</ButtonText>
        </Container>
    );
}
