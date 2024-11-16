import { Camion } from "./Camion"
import { Conductor } from "./Conductor"
import { Remitente } from "./Remitente"
import { Producto } from "./Producto"

export class Principal {
    id!: number
    date!: string
    driver!: Conductor
    truck!: Camion
    remitter!: Remitente
    products!: Producto[]
}