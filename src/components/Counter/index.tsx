import {
    Button,
    Container,
    LabelContainer,
    LessIcon,
    MostIcon,
    Text,
} from "./styles";

type Props = {
    label: string;
    quantity: number;
    maxQuantity?: number;
    minQuantity?: number;
    onAdd: () => void;
    onRemove: () => void;
};

export function Counter({
    label,
    quantity = 0,
    maxQuantity,
    minQuantity,
    onAdd,
    onRemove,
}: Props) {
    const min = minQuantity || 0;

    return (
        <Container>
            <LabelContainer>
                <Text>{label}</Text>
            </LabelContainer>
            <Button onPress={onAdd} disabled={quantity === maxQuantity}>
                <MostIcon disabled={quantity === maxQuantity} />
            </Button>
            <Text>{quantity}</Text>
            <Button onPress={onRemove} disabled={quantity === min}>
                <LessIcon disabled={quantity === min} />
            </Button>
        </Container>
    );
}
