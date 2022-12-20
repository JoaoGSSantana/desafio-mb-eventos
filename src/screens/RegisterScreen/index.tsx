import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { LinkText } from "@components/LinkText";

import { useHeaderHeight } from "@react-navigation/elements";

import texts from "@mocks/texts";

import { useNavigation } from "@react-navigation/native";
import { Container, Content, Footer, Title } from "./styles";

export function RegisterScreen() {
    const height = useHeaderHeight();

    const { goBack } = useNavigation();

    function handleGiveUp() {
        return goBack();
    }

    return (
        <Container>
            <Logo width="60%" height={40} />
            <Content behavior="padding" keyboardVerticalOffset={height + 46}>
                <Title>{texts.RegisterScreen.title}</Title>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Footer>
                    <Button text={texts.RegisterScreen.buttonSignUp} />
                    <LinkText onPress={handleGiveUp}>
                        {texts.RegisterScreen.backText}
                    </LinkText>
                </Footer>
            </Content>
        </Container>
    );
}
