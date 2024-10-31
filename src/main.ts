

// DOM Elemente abholen 

import Order from "./classes/Order";
import Pizzen from "./classes/Pizzen";
import OrderStatus from "./enums/OrderStatus";

const customerNameInput = document.getElementById('customer-number') as HTMLInputElement;
const pizzaSelect = document.getElementById('pizza-select') as HTMLInputElement;
const orderButton = document.getElementById('order-button') as HTMLButtonElement;
const cancelButton = document.getElementById('cancel-button') as HTMLButtonElement
const deliverButton = document.getElementById("deliver-button") as HTMLButtonElement

deliverButton.style.display = "none"



// da sollte am besten typisiert werden, was für type diese Variable am Ende bekommt
let newPizzaOrder: Order | null = null





orderButton?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    if (customerNameInput && pizzaSelect) {
        const customerName = customerNameInput.value.trim()
        const pizzaName = pizzaSelect.value

        console.log(customerName, pizzaName);

        // Wir gucken ob die Variable newPizzaOrder bereits exitiert
        // if(!newPizzaOrder)
        if (!newPizzaOrder) {
            const uniqueOrderNumber = Date.now()
            console.log(uniqueOrderNumber);
            newPizzaOrder = new Order(uniqueOrderNumber, customerName, OrderStatus.created)
            console.log(newPizzaOrder);
            setTimeout(() => {
                deliverButton.style.display = "block"
            }, 3000)
        }


        const pizza = new Pizzen(pizzaName)
        // Pizza zur Bestellung hinzufügen
        newPizzaOrder._pizzen?.push(pizza)
        simulationSendToBackend()

    }

})


function simulationSendToBackend() {
    console.log("Sending order to Server");
}


cancelButton?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    if (newPizzaOrder) {
        const isCanceled = newPizzaOrder.cancel()
        if (isCanceled) {
            console.log("Die Bestellung wurde erfolgreich storniert");
            newPizzaOrder = null
        }
    } else {
        console.log("Es gibt keine Bestellung, die storniert werden muss");
    }
})


deliverButton?.addEventListener("click", (event: Event) => {
    event.preventDefault()
    if (newPizzaOrder) {
        const readyToDeliver = newPizzaOrder.deliver()
        if (readyToDeliver) {
            console.log("Die Bestellung ist auf dem Weg");
        } else {
            console.log("Die Bestellung is in der Bearbeitung");
        }
    }
})