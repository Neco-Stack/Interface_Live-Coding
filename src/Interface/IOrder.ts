import OrderStatus from "../enums/OrderStatus";
import IPizzen from "./IPizzen";

interface IOrder {
    _orderNumber: number;
    _customerName: string;
    _pizzen?: IPizzen[];
    _status: OrderStatus

    // * Schreibweise (wie bei type): Methodenname: () für Parameter => Rückgabedatentype

    // z.B => 
    // customerNamePrint: () => string

    cancel: () => boolean

    deliver: () => boolean

}

export default IOrder;