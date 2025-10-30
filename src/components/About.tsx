import Title from './Title'
import img from "../assets/img2.jpg"
import {  Code2,  Lightbulb, Palette } from 'lucide-react';

const aboutSections = [
    {
        id: 1,
        title: "Développeur Fullstack",
        description: "Étudiant ingénieur en informatique à l’ENSICAEN, je conçois aussi bien le front-end que le back-end d’applications web. J’aime donner vie à des projets complets, du design à la base de données.",
        icon: <Code2 className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Passionné de Technologies et d’Apprentissage",
        description: "Curieux et autodidacte, j’aime explorer de nouveaux langages et outils : Java, Python, PHP, Kotlin, Vue.js, React, et bien d’autres. Chaque projet est pour moi une occasion d’apprendre et de m’améliorer.",
        icon: <Lightbulb className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Créatif et Orienté Expérience Utilisateur",
        description: "Je conçois des interfaces web modernes et intuitives, en veillant à l’équilibre entre esthétique et ergonomie. J’accorde une attention particulière à l’expérience utilisateur et à la fluidité des interactions.",
        icon: <Palette className="text-accent scale-150" />,
    },
];

const About = () => {
  return (
    <div className='bg-base-300 p-10 mb-10 md:mb-32' id='About'>
        <Title title='À propos'/>
        <div className='md:h-screen flex justify-center items-center'>
            <div>
                <div className='hidden md:block'>
                <img src={img} alt="" className="w-96 object-cover shadow-xl rounded-xl"/>
                </div>
            </div>
            <div className='md:ml-4 space-y-4'>
                {
                    aboutSections.map((section)=>(
                        <div key={section.id} 
                        className='flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl'>
                            <div className='mb-2 md:mb-0'>
                                {section.icon}
                            </div>
                            <div className='md:ml-4 text-center md:text-left'>
                                <h2 className='text-xl font-bold mb-1'>
                                    {section.title}
                                </h2>
                                <p className='text-sm'>
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About