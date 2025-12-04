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
import portfolioImg from '../assets/projects/portfolio.jpeg'
import webapp from '../assets/projects/wepApp.png'
import springcrud from '../assets/projects/api-img.png'
import wordCounter from '../assets/projects/wordCounter.png'


import { Github } from "lucide-react"
import React from "react"

const projects = [
    {
    id: 1,
    title: "Simulateur du Jeu de la Vie",
    description:
        "Implémentation complète du célèbre automate cellulaire de Conway en Java avec une interface graphique Swing, optimisation Hashlife et tests unitaires.",
    technologies: ["Java", "Swing", "JUnit 5", "Git"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: gameoflife,
},
{
    id: 2,
    title: "Application de citations dynamiques",
    description:
        "Site en Vue.js consommant une API externe pour afficher, ajouter et gérer des citations favorites.",
    technologies: ["Vue.js", "API REST", "JavaScript", "HTML", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: quotesapp,
},
{
    id: 3,
    title: "Application React Native – Authentification",
    description:
        "Application mobile avec gestion d’authentification, stockage persistant et navigation conditionnelle.",
    technologies: ["React Native", "Context API", "AsyncStorage"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: reaimatnativeapp,
},
{
    id: 4,
    title: "Site Pokémon en PHP/MySQL",
    description:
        "Site web permettant de gérer des Pokémon : ajout, modification, suppression, pagination et gestion MySQL.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: pokemon,
},
{
    id: 5,
    title: "Jeu du Labyrinthe",
    description:
        "Générateur de labyrinthe en C avec algorithmes DFS/BFS et affichage console.",
    technologies: ["C", "Algorithmes", "Structures de données"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: labyrinthe,
},
{
    id: 6,
    title: "Jeux de société",
    description:
        "Développement de plusieurs mini-jeux (Morpion, Nim, Bataille navale) en Java.",
    technologies: ["Java", "Swing"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: jeux,
},
{
    id: 7,
    title: "Pick Up Food",
    description:
        "Application Android en Kotlin permettant de gérer ses repas via Jetpack Compose et architecture MVVM.",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "MVVM"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40",
    image: pickupfood,
},
{
    id: 8,
    title: "To-Do List en React",
    description:
        "Application React permettant d’ajouter, modifier, supprimer et trier des tâches avec persistance locale.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "TypeScript"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/todo-react",
    image: todoReact,
},
{
    id: 9,
    title: "Minuteur en Kotlin",
    description:
        "Application mobile Kotlin avec minuteur complet inspiré d'une maquette Figma et interface Jetpack Compose.",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Figma"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: minuteurKotlin,
},
{
    id: 10,
    title: "Projet tutoré GEA – Power BI",
    description:
        "Tableaux de bord Power BI pour analyser les réponses d'interviews d'étudiants concernant les aides au voyage.",
    technologies: ["Power BI"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: projetgea,
},
{
    id: 11,
    title: "Gestion de stock – Magasin de vêtements",
    description:
        "Application Laravel/React permettant de gérer un stock avec calcul automatique des prix et valeur totale.",
    technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: projetStockVetements,
},
{
    id: 12,
    title: "Projet de calcul scientifique",
    description:
        "Projet Python utilisant NumPy et Matplotlib pour modéliser, traiter et visualiser des données scientifiques.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: projetCalculScientifique,
},

{
    id: 13,
    title: "Portfolio Personnel",
    description:
        "Site portfolio moderne, responsive et déployé en ligne, présentant mes projets, mon parcours et mes compétences.",
    technologies: ["HTML", "CSS","React", "JavaScript", "Netlify"],
    demoLink: "https://fkamelportfolio.netlify.app/",
    repoLink: "https://github.com/Berlin-40/",
    image: portfolioImg,
},
{
    id: 15,
    title: "WebApp – Interface Spring Boot",
    description:
        "Interface utilisateur du projet backend, réalisée avec Spring Boot. Point d'entrée principal pour les utilisateurs.",
    technologies: ["Spring Boot", "Java","Html", "Thymeleaf"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/",
    image: webapp,
},
{
    id: 16,
    title: "API-Employee",
    description: "A RESTful API built with Spring Boot to manage employees, supporting full CRUD operations.",
    technologies: ["Spring Boot", "Spring Data JPA","Postman", "MySQL", "REST API"],
    demoLink: "#", // ajoute un lien de démo si disponible
    repoLink: "https://github.com/Berlin-40/Api-Employee",
    image: springcrud
},

{
    id: 17,
    title: "Word Counter",
    description: "A React + TypeScript web app to count words in real time, track word frequency, sort occurrences, and clear text with a modern TailwindCSS/DaisyUI interface.",
    technologies: ["React", "TypeScript", "TailwindCSS", "DaisyUI", "JavaScript", "HTML", "CSS"],
    demoLink: "#", // ajoute le lien si tu as une démo en ligne
    repoLink: "https://github.com/Berlin-40/wordcounting",
    image: wordCounter // ajoute ici l’image correspondante de ton projet
},
{
    id: 18,
    title: "CRUD Person API",
    description: "A Spring Boot application providing a full CRUD system to manage people (name, city, phoneNumber). Built with Spring Boot, Spring Data JPA, and MySQL, it exposes clean REST endpoints for creating, reading, updating, and deleting records.",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "SqlLite", "REST API"],
    demoLink: "#",
    repoLink: "https://github.com/Berlin-40/crud-springboot",
    image: springcrud // ajoute une image du projet si possible
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