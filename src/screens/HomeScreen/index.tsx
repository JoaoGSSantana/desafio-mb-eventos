import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { LinkText } from "@components/LinkText";

import texts from "@mocks/texts";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Footer, Title } from "./styles";

export function HomeScreen() {
    const { navigate } = useNavigation();

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
                <Button text={texts.HomeScreen.buttonSignIn} />
                <LinkText onPress={handleSignUp}>
                    {texts.HomeScreen.buttonSignUp}
                </LinkText>
            </Footer>
        </Container>
    );
}
