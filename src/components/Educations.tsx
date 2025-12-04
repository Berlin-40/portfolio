import Title from "./Title"
import imgHTML from '../assets/techno/html.png'
import imgCSS from '../assets/techno/css.png'
import imgJS from '../assets/techno/js.png'
import ensicaen from '../assets/companies/ensicaen.jpg'
import unicaen from '../assets/companies/unicaen.jpeg'
import supmanagement from '../assets/companies/supmanagement.jpeg'
import imgREACT from '../assets/techno/react.png'
import imgTAILWIND from '../assets/techno/tailwind.png'
import imgPython from '../assets/techno/python.jpeg'
import imgVUE from '../assets/techno/vue.png'
import imgHASKEL from '../assets/techno/Haskell.jpeg'
import imgKOTLIN from '../assets/techno/kotlin.png'
import imgC from '../assets/techno/c.png'
import imgCSharp from '../assets/techno/cShap.jpeg'
import imgPHP from '../assets/techno/php.png'
import imgMySQL from '../assets/techno/mySQL.jpeg'
import imgJAVA from '../assets/techno/java.png'
import imgPowerBi from '../assets/techno/powerbi.png' // Make sure the path and filename are correct
import imgLaravel from '../assets/techno/laravel.png'
import imgTypeScript from '../assets/techno/typescript.svg'
import imgSpringBoot from '../assets/techno/springio-icon.svg'
import imgSqlLite from '../assets/techno/sqlite-icon.svg'

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT  },
    { id: 14, name: "Java", image: imgJAVA },
    { id: 5, name: "Python", image: imgPython },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "Vue.js", image: imgVUE },
    { id: 8, name: "Haskel", image: imgHASKEL },
    { id: 9, name: "Kotlin", image: imgKOTLIN },
    { id: 10, name: "C", image: imgC },
    { id: 11, name: "C#", image: imgCSharp},
    { id: 12, name: "PHP", image: imgPHP},
    { id: 13, name: "MySQL", image: imgMySQL},
    { id: 15, name: "Power", image: imgPowerBi},
    { id: 16, name: "Laravel", image: imgLaravel},
    { id: 17, name: "TypeScript", image: imgTypeScript},
    { id: 18, name: "Spring Boot", image: imgSpringBoot},
    { id: 19, name: "SqlLite", image: imgSqlLite},
];
const education = [
    {
        id: 1,
        degree: "Cycle Ingénieur en Informatique - Génie Logiciel",
        school: "ENSICAEN",
        period: "2025 - 2028",
        description: [
            "Formation en alternance axée sur le développement logiciel, l’architecture applicative et les systèmes distribués.",
            "Approfondissement des compétences en Java, Python, C, PHP, React, Vue.js et gestion de bases de données.",
        ],
        image: ensicaen, 
    },
    {
        id: 2,
        degree: "Licence 2 en Informatique",
        school: "Université de Caen Normandie",
        period: "2024 - 2025",
        description: [
            "Études en algorithmique, structures de données, programmation orientée objet et développement web.",
            "Réalisation de projets en équipe avec intégration de bases de données MySQL et interfaces en PHP/JS.",
        ],
        image: unicaen, // logo Université de Caen
    },
    {
        id: 3,
        degree: "Classes Préparatoires MPSI-MP",
        school: "Sup’Management – Gabon",
        period: "2022 - 2024",
        description: [
            "Formation scientifique intensive en mathématiques, physique et informatique.",
            "Développement d’une rigueur méthodologique et d’une forte capacité d’analyse.",
        ],
        image: supmanagement, // logo Sup’Management
    },
];

const Educations = () => {
  return (
    <div id="Experiences">
        <Title title="Educations"/>
        <div className="flex flex-col-reverse md:flex-row justify-center">
            <div className="flex flex-wrap gap-4 justify-center items-center md:w-l/3 mt-4  md:mt-0">
                {skills.map((skill)=>(

                    <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 borber-accent">
                                <img src={skill.image} alt="" 
                                className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                    </div>
                ))
                }
            </div>
            <div className="md:ml-4 flex-col space-y-4">
                {
                    education.map((etude)=>(
                        <div key={etude.id} className="flex flex-col space-y-4">
                            <div className="flex items-center gap-4 bg-base-200 p-3 rounded-xl shadow-sm hover:shadow-md transition">
                                <img
                                    src={etude.image}
                                    alt={etude.school}
                                    className="object-contain h-10 w-10 rounded-xl"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {etude.degree} , {etude.school}
                                    </h1>
                                    <span className="text-sm">{etude.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {
                                    etude.description.map((desc, index)=>(
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Educations