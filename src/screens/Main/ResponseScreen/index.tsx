import { useNavigation, useRoute } from "@react-navigation/native";

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
    goToMain?: boolean;
}

export function ResponseScreen() {
    const { navigate, goBack } = useNavigation();
    const route = useRoute();

    const { success, title, message, buttonText, goToMain } =
        route.params as IRouteProps;

    function handleClickButton() {
        if (goToMain) {
            navigate("eventsMain");
        } else {
            goBack();
        }
    }

    return (
        <Container>
            <Logo height={40} />
            <Content>
                {success ? <SuccessIcon /> : <FailIcon />}
                <Title success={success}>{title}</Title>
                {message && <Message success={success}>{message}</Message>}
            </Content>
            <Button text={buttonText} onPress={handleClickButton} />
        </Container>
    );
}
