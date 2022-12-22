import { useNavigation } from "@react-navigation/native";

import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { LinkText } from "@components/LinkText";

import texts from "@mocks/texts";

import { Container, Content, Footer, Title } from "./styles";

export function HomeScreen() {
    const { navigate } = useNavigation();

    // navega para tela de login
    function handleLogIn() {
        return navigate("loginScreen");
    }
    // navega para tela de cadastro
    function handleSignUp() {
        return navigate("registerScreen");
    }

    return (
        <Container>
            <Logo width="60%" height={50} />
            <Content>
                <Title>{texts.HomeScreen.title}</Title>
            </Content>
            <Footer>
                <Button
                    text={texts.HomeScreen.buttonSignIn}
                    onPress={handleLogIn}
                />
                <LinkText onPress={handleSignUp}>
                    {texts.HomeScreen.buttonSignUp}
                </LinkText>
            </Footer>
        </Container>
    );
}
