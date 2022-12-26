import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";

import uuid from "react-native-uuid";

import Logo from "@assets/logo.svg";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { FeedbackModal, IFeedbackDTO } from "@components/FeedbackModal";
import { LinkText } from "@components/LinkText";

import texts from "@mocks/texts";

import { AuthService, IRegisterServiceRequest } from "@services/authService";

import { Container, Footer, Title } from "./styles";

import { Replace } from "../../helpers/Replace";

type UserProps = Replace<IRegisterServiceRequest, { id?: string | number[] }>;

export function RegisterScreen() {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState({
        visible: false,
        message: "",
    } as IFeedbackDTO);
    const [success, setSuccess] = useState(false);

    const height = useHeaderHeight();

    const { goBack } = useNavigation();

    // navega de volta para a tela anterior
    function handleGoBack() {
        return goBack();
    }
    // Fecha o modal de resposta
    function handleClose() {
        setFeedback({ visible: false, message: "" });
    }
    // Lida com o cadastro de usuário
    async function handleRegister() {
        try {
            setIsLoading(true);

            if (user.password !== confirmPassword) {
                setSuccess(false);
                setFeedback({
                    visible: true,
                    message: "Desculpe, mas as senhas não coincidem.",
                });
            } else {
                const newUser: IRegisterServiceRequest = {
                    ...user,
                    id: uuid.v4(),
                };

                await AuthService.register(newUser);

                setSuccess(true);
                setFeedback({
                    visible: true,
                    message: "Usuário cadastrado com sucesso!",
                });
            }
        } catch (error) {
            setSuccess(false);
            setFeedback({
                visible: true,
                message:
                    "Não foi possível cadastrar o usuário, verifique os dados ou se já não possui uma conta!",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Container behavior="padding" keyboardVerticalOffset={height + 82}>
            <Logo height={20} />
            <Title>{texts.RegisterScreen.title}</Title>
            <Input
                placeholder="Nome"
                value={user.name}
                onChangeText={(text) =>
                    setUser((prevState) => ({ ...prevState, name: text }))
                }
            />
            <Input
                placeholder="E-mail"
                keyboardType="email-address"
                value={user.email}
                onChangeText={(text) =>
                    setUser((prevState) => ({ ...prevState, email: text }))
                }
            />
            <Input
                placeholder="Senha"
                type="password"
                value={user.password}
                onChangeText={(text) =>
                    setUser((prevState) => ({ ...prevState, password: text }))
                }
            />
            <Input
                placeholder="Confirmar senha"
                type="password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Footer>
                <Button
                    isLoading={isLoading}
                    text={texts.RegisterScreen.buttonSignUp}
                    onPress={handleRegister}
                />
                <LinkText onPress={handleGoBack}>
                    {texts.RegisterScreen.backText}
                </LinkText>
            </Footer>
            <FeedbackModal
                visible={feedback.visible}
                onClose={success ? handleGoBack : handleClose}
                message={feedback.message}
                buttonText="Ok"
            />
        </Container>
    );
}
