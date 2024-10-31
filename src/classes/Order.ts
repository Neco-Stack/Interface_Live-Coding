import OrderStatus from "../enums/OrderStatus";
import IOrder from "../Interface/IOrder";
import IPizzen from "../Interface/IPizzen";


// ich bekomme beim leeren Anlegen der Klasse direkt einen Fehler, dass die Eigenschaften und die Methoden fehlen
// ! ich kann dann den Klassename auswählen und geht man auf die schnelle Problembehebung und dann auf die gelbe Glühbirne klicken
class Order implements IOrder {
    _orderNumber: number;
    _customerName: string;
    _pizzen: IPizzen[] | undefined = [];
    _status: OrderStatus;

    constructor(orderNumber: number, customerName: string, status: OrderStatus) {
        this._orderNumber = orderNumber;
        this._customerName = customerName;
        this._status = status
    }


    public cancel(): boolean {
        if (OrderStatus.created) {
            return false
        } else {
            this._status = OrderStatus.Cancelled
            return true
        }
    }

    public deliver(): boolean {
        if (OrderStatus.Deliver) {
            return true
        } else {
            this._status = OrderStatus.InProgress
            return false
        }
    }



}


export default Order;