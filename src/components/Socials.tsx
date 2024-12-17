
import { SiGithub, SiHuggingface, SiKaggle } from "react-icons/si";
interface Social {
    name: string;
    link: string;
    icon: React.ReactNode;
}

export const socials: Social[] = [
    {
        name: "GitHub",
        link: "https://github.com/alpharomercoma",
        icon: <SiGithub className="h-6 w-6" />,
    },
    {
        name: "Hugging Face",
        link: "https://play.google.com/store/apps/developer?id=Alpha+Romer+Coma",
        icon: <SiHuggingface className="h-6 w-6" />,
    },
    {
        name: "Kaggle",
        link: "https://www.linkedin.com/in/alpharomercoma/",
        icon: <SiKaggle className="h-6 w-6" />,
    },
];