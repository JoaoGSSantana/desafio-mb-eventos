import { useRoute } from "@react-navigation/native";

import Logo from "@assets/logo.svg";
import { Button } from "@components/Button";

import {
    Container,
    Content,
    FailIcon,
    Message,
    SuccessIcon,
    Title,
} from "./styles";

interface IRouteProps {
    success: boolean;
    title: string;
    message?: string;
    buttonText: string;
    onClickButton?: () => void;
}

export function ResponseScreen() {
    const route = useRoute();

    const { success, title, message, buttonText, onClickButton } =
        route.params as IRouteProps;

    return (
        <Container>
            <Logo height={40} />
            <Content>
                {success ? <SuccessIcon /> : <FailIcon />}
                <Title success={success}>{title}</Title>
                {message && <Message success={success}>{message}</Message>}
            </Content>
            <Button text={buttonText} onPress={onClickButton} />
        </Container>
    );
}
