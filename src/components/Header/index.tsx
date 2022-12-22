import Logo from "@assets/logo.svg";
import { useNavigation } from "@react-navigation/native";
import { BackButton, ButtonIcon, Container } from "./styles";

export function Header() {
    const { goBack } = useNavigation();

    function handlePressBack() {
        return goBack();
    }
    return (
        <Container>
            <BackButton onPress={handlePressBack}>
                <ButtonIcon />
            </BackButton>
            <Logo height={20} />
        </Container>
    );
}
