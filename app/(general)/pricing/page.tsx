import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pricing Page',
 description: 'es mi pagina de precios',
 keywords:['Contact Page', 'Ariel']

};
export default function PricingPage () {
    return (
        <span className="text-7xl">
    Pricing Page
        </span>
    )
}