import Title from "./Title"
import cancerRun from '../assets/activities/activite.jpg'
import bateauCarton from '../assets/activities/bateauCarton.jpeg'
import skate from '../assets/activities/skate.jpg'
import { Activity } from "lucide-react" // tu peux choisir une icône adaptée

const activities = [
    {
        id: 1,
        title: "Course pour le cancer du Saint à Caen",
        description:
            "J'ai soutenu, avec mes amis, une course solidaire afin de récolter des fonds pour la lutte contre le cancer. Une expérience enrichissante et pleine de solidarité.",
        image: cancerRun,
    },
    {
        id: 2,
        title: "Construction d'un bateau en carton à l'ENSICAEN",
        description:
            "Participation à la conception et à la construction d'un bateau en carton pour un challenge étudiant. Travail en équipe, créativité et fun garantis !",
        image: bateauCarton,
    },
    {
        id: 3,
        title: "Passion pour le skate",
        description:
            "Je suis passionné de skate depuis plusieurs années. J'adore pratiquer, découvrir de nouvelles figures et partager cette passion avec mes amis.",
        image: skate,
    }
];

const Activities = () => {
  return (
    <div className="mt-10" id="Activities">
        <Title title="Mes Activités"/>
        <div className="grid md:grid-cols-3 gap-4">
            {activities.map((activity) => (
                <div key={activity.id} className="bg-base-300 p-3 h-fit rounded-xl shadow-lg">
                    <img src={activity.image} alt={activity.title} className="w-full rounded-xl h-56 object-cover"/>
                    <div>
                        <h1 className="my-2 font-bold">{activity.title}</h1>
                        <p className="text-sm">{activity.description}</p>
                    </div>
                    <div className="flex mt-3">
                        <a className="btn btn-natural" href="#">
                            <Activity className="w-4 mr-1"/> Plus d'infos
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Activities
