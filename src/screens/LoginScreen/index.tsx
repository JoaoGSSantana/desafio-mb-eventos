import { useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { FeedbackModal, IFeedbackDTO } from "@components/FeedbackModal";

import texts from "@mocks/texts";
import { useAuth } from "../../hooks/useAuth";

import { Container, Content, Footer, Title } from "./styles";

export function LoginScreen() {
    const [feedback, setFeedback] = useState({
        visible: false,
    } as IFeedbackDTO);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { logIn, isUserLoading } = useAuth();

    const height = useHeaderHeight();

    // Lida com o fechamento do modal de feedback
    function handleCloseFeedbackModal() {
        setFeedback({ message: "", visible: !feedback.visible });
    }

    // Lida com o login do usuário
    async function handleLogIn() {
        try {
            if (!email || !password) {
                setFeedback({
                    message:
                        "Não foi possível realizar login, verifique se o campo de email e senha foram preenchidos.",
                    visible: true,
                });
            } else await logIn({ email, password });
        } catch (error) {
            setFeedback({
                message: `Não foi possível realizar login, verifique as informação e tente novamente. \n(${error})`,
                visible: true,
            });
        }
    }

    return (
        <Container>
            <Header />
            <Content behavior="height" keyboardVerticalOffset={height + 64}>
                <Title>{texts.LoginScreen.title}</Title>
                <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Footer>
                    <Button
                        text={texts.LoginScreen.buttonSignIn}
                        isLoading={isUserLoading}
                        onPress={handleLogIn}
                    />
                </Footer>
            </Content>
            <FeedbackModal
                visible={feedback.visible}
                onClose={handleCloseFeedbackModal}
                message={feedback.message}
                buttonText="Ok"
            />
        </Container>
    );
}
