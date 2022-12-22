import { Button } from "@components/Button";
import { ModalProps } from "react-native";
import {
    Background,
    Container,
    Content,
    Message,
    MessageContainer,
} from "./styles";

export interface IFeedbackDTO {
    visible: boolean;
    message: string;
}

type Props = ModalProps & {
    onClose: () => void;
    message: string;
    buttonText: string;
};

export function FeedbackModal({
    onClose,
    message,
    buttonText,
    ...rest
}: Props) {
    return (
        <Container onRequestClose={onClose} transparent {...rest}>
            <Background>
                <Content>
                    <MessageContainer>
                        <Message>{message}</Message>
                    </MessageContainer>
                    <Button text={buttonText} onPress={onClose} />
                </Content>
            </Background>
        </Container>
    );
}
