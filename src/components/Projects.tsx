import Title from "./Title"
import gameoflife from '../assets/projects/gameoflife.jpg'
import quotesapp from '../assets/projects/quotesapp.png'
import reaimatnativeapp from '../assets/projects/react.png'
import pokemon from '../assets/projects/pokemon.png'
import jeux from '../assets/projects/jeux.jpg'
import labyrinthe from '../assets/projects/labirynthe.png'
import pickupfood from '../assets/projects/PickUpFood.png'
import todoReact from '../assets/projects/todo.png'
import minuteurKotlin from '../assets/projects/minuteur.png'
import projetgea from '../assets/projects/projetgea.jpg'
import projetStockVetements from '../assets/projects/projetStockVetements.png'
import projetCalculScientifique from '../assets/projects/projetCalculScientifique.png'
import { Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Simulateur du Jeu de la Vie",
        description:
            "Implémentation complète du célèbre automate cellulaire de Conway en Java avec une interface graphique Swing. Optimisation du moteur via l’algorithme Hashlife pour de meilleures performances et ajout de tests unitaires (JUnit 5).",
        technologies: ["Java", "Swing", "JUnit 5", "Git"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: gameoflife, // à remplacer par ton image
    },
    {
        id: 2,
        title: "Application de citations dynamiques",
        description:
            "Développement d’un site en Vue.js consommant une API externe pour récupérer et afficher des citations. Possibilité d’ajouter, supprimer et consulter des citations favorites.",
        technologies: ["Vue.js", "API REST", "JavaScript", "HTML", "CSS"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: quotesapp,
    },
    {
        id: 3,
        title: "Application React Native – Authentification",
        description:
            "Création d’une application mobile avec gestion d’authentification, stockage persistant et navigation conditionnelle selon l’état de connexion de l’utilisateur.",
        technologies: ["React Native", "Context API", "AsyncStorage"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: reaimatnativeapp,
    },
    {
        id: 4,
        title: "Site Pokémon en PHP/MySQL",
        description:
            "Développement d’un site web de gestion de Pokémon avec insertion, modification et suppression d’entrées, pagination et affichage dynamique à partir d’une base MySQL.",
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: pokemon,
    },
    {
        id: 3,
        title: "Jeu du Labyrinthe",
        description:
            "Conception d’un générateur de labyrinthe aléatoire et d’un parcours automatique du joueur en C. Implémentation d’algorithmes de parcours DFS/BFS et gestion d’un affichage en console.",
        technologies: ["C", "Algorithmes", "Structures de données"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: labyrinthe,
    },
    {
        id: 6,
        title: "Jeux de société",
        description:
            "Développement de plusieurs mini-jeux (Morpion, Bataille navale, Jeux de Nim) avec interaction utilisateur en Java.",
        technologies: ["Java", "Swing"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: jeux,
    },
    {
        id: 7,
        title: "Pick Up Food",
        description:
            "Application Android développée en Kotlin permettant de planifier et gérer ses repas. L’utilisateur peut créer ses menus, organiser ses recettes et suivre ses besoins alimentaires. Interface moderne conçue avec Jetpack Compose et architecture propre basée sur MVVM, Repository et UseCases.",
        technologies: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "MVVM"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40",
        image: pickupfood, // ajoute une image de ton app ici
    },
    {
        id: 8,
        title: "To-Do List en React",
    description: "Création d’une application To-Do List réactive permettant l’ajout, la modification, la suppression et le tri des tâches selon leur priorité, avec persistance locale et interface intuitive.",
        technologies: ["React", "JavaScript", "HTML", "CSS","TypeScript"],
        demoLink: "#",
        repoLink: "https://github.com/Berlin-40/todo-react",
        image: todoReact
    },
    {
    id: 9,
    title: "Minuteur en Kotlin",
    description: "Développement d’une application mobile de minuteur intuitive en Kotlin, conçue à partir d’une maquette Figma. L’application permet de lancer, mettre en pause et réinitialiser un compte à rebours, avec une interface fluide et ergonomique réalisée en Jetpack Compose.",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Figma"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: minuteurKotlin
    },
{
    id: 10,
    title: "Projet tutoré avec étudiants GEA – Power BI",
    description: "Développement de tableaux de bord Power BI pour analyser les réponses d’interviews auprès des étudiants sur leurs besoins en aides au voyage.",
    technologies: ["Power BI"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: projetgea
    },
    {
    id: 11,
    title: "Gestion de stock d’un magasin de vêtements",
    description:
        "Application web développée avec Laravel permettant de gérer le stock d’un magasin de vêtements (pantalons, tee-shirts, écharpes). Le système calcule automatiquement les prix selon un coefficient et affiche la valeur totale du stock.",
    technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: projetStockVetements,
    },
    {
    id: 12,
    title: "Projet de calcul scientifique – L2 Informatique",
    description:
        "Réalisation d’un projet de calcul scientifique en Python visant à modéliser et analyser des données numériques. Utilisation de bibliothèques telles que NumPy et Matplotlib pour le traitement, la visualisation et l’analyse de résultats expérimentaux.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: projetCalculScientifique,
    }
];

const Projects = () => {
  return (
    <div className="mt-10" id="Projects">
        <Title title="Mes Projects"/>
        <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project)=>(
                <div key={project.id} className="bg-base-300 p-3 h-fit rounded-xl shadow-lg">
                    <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover"/>
                    <div>
                        <h1 className="my-2 font-bold">{project.title}</h1>
                        <p className="text-sm">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 my-3">
                        {project.technologies.map((techno)=>(
                            <span className="badge badge-accent badge-sm">{techno}</span>
                        ))}
                    </div>
                    <div className="flex">
                        <a  className="btn btn-natural" href={project.repoLink}>Dépôt
                        <video className="w-4"></video>
                            <Github className="w-4"/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects