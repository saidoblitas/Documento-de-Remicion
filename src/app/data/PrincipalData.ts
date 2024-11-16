import { Principal } from "../models/Principal";


export const principalData: Principal = {
    id: 2,
    date: "21/11/2024",
    driver: {
        dni: "7845123",
        firstName: "Carlos Alberto",
        lastName: "Gomez Ruiz",
        phone: "987654321"
    },
    truck: {
        plate: "AB12 CDE",
        brand: "Ford",
        motor: "V8 Turbo",
        colour: "Blue"
    },
    remitter: {
        dni: "98765432",
        firstName: "Ana Maria",
        lastName: "Perez Salazar",
        phone: "991223344"
    },
    products: [
        {
            code: "P101",
            name: "Smartwatch",
            quantity: 75,
            serie: "SW9876",
            price: 199.99,
        },
        {
            code: "P102",
            name: "Tablet",
            quantity: 120,
            serie: "TAB5432",
            price: 350.75,
        },
        {
            code: "P103",
            name: "Bluetooth Speaker",
            quantity: 180,
            serie: "SPK2468",
            price: 59.49,
        }
    ]
}
