
export interface ICustomerInput{
    customerName:string
    customerEmail:string
}

export interface ICustomerList extends ICustomerInput{
    id:number
}