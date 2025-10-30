import { Container } from "lucide-react"

const Navbar = ()=> {
    return (
        <div className="flex justify-center md:justify-between">
            <a href="#"
            className="flex items-center font-bold text-3xl md:text-xl"
            >
                <Container className="mr-2"/>
                KAMEL <span className="text-accent">DEV</span>

            </a>
            <ul className=" hidden md:flex space-x-4">
                <li>
                    <a href="#"
                    className="btn btn-sm btn-ghost"
                    >Acceil</a>
                </li>
                <li>
                    <a href="#About"
                    className="btn btn-sm btn-ghost"
                    >A propos</a>
                </li>
                <li>
                    <a href="#Experiences"
                    className="btn btn-sm btn-ghost"
                    >Mes expériences</a>
                </li>
                <li>
                    <a href="#Projects"
                    className="btn btn-sm btn-ghost"
                    >Mes projets</a>
                </li>
                <li>
                    <a href="#Activities"
                    className="btn btn-sm btn-ghost"
                    >Mes Activitées</a>
                </li>

            </ul>
        </div>
    )
}
export default Navbar