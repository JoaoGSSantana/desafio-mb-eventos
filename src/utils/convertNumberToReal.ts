export function convertNumberToReal(value: number) {
    return `R$ ${value.toFixed(2).replace(/\./g, ",")}`;
}
