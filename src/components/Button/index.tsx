import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container, LoadingIndicator } from "./styles";

type Props = TouchableOpacityProps & {
    text: string;
    isLoading?: boolean;
};

export function Button({ text, isLoading, ...rest }: Props) {
    return (
        <Container {...rest}>
            {isLoading ? <LoadingIndicator /> : <ButtonText>{text}</ButtonText>}
        </Container>
    );
}
