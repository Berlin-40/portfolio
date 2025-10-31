import { Mail } from "lucide-react"
import img from "../assets/moi.jpg"

type Props={
    highlight:boolean
}
const Home = ({highlight}:Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className="flex flex-col">

            <h1 className="text-5xl md:text-6xl font-bold 
            text-center md:text-left mt-4 md:mt-0">
                Bonjour , <br/> je suis {" "}
                <span className="text-accent">Kamel FOTSO</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
                je suis un etudiant ingénieur en développement logiciel à l'Ensicaen
                 Je suis actuellement à la
                recherche d’une entreprise d’accueil pour un contrat d’apprentissage. Cette
                alternance est indispensable à la poursuite de mon parcours à l’ENSICAEN
                et représente pour moi l’opportunité de mettre en pratique mes
                compétences tout en contribuant activement à des projets concrets et
                innovants.
            </p>
    <a id="Contact" href="mailto:fotsopaulin47@gmail.com"
      className={`btn btn-accent md:w-fit flex items-center gap-2 transition-all duration-300 
        ${highlight
          ? "bg-yellow-400 shadow-[0_0_15px_5px_rgba(250,204,21,0.7)]"
          : "bg-accent"
        }`}
    >
      <Mail className="w-5 h-5" />
      contactez-moi
    </a>        </div>
      <div className="flex justify-center md:w-200 mb-10 md:mb-0 md:ml-20">
            <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
                style={{
                    borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33% "
                }}
            />
        </div>
    </div>
  )
}

export default Home