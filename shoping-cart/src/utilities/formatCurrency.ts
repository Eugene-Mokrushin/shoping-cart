const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, { currency: "USD", style: "currency" })

export function formarCurrency(num: number): string {
    return CURRENCY_FORMATER.format(num)
}