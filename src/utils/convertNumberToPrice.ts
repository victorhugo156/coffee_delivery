

export function ConvertNumberToPice(price: string){

    //turn "9.90" into 9.90

    return Number(price.replace(",", (".")));

}