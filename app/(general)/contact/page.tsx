import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Contact Page',
 description: 'es mi pagina de contacto',
 keywords:['Contact Page', 'Ariel']

};
export default function ContactPage () {
    return (
        <span className="text-7xl">
            Contact Page
        </span>
    )
}