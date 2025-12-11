import { Github, Linkedin, Twitter,Youtube }  from "lucide-react"; 

export function SocialIcons(){
return(
<div className="flex gap-4 md:justify-center mt-4 order-4">
  <a
    href="https://github.com/Ama-Nkansah"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className=" w-5 h-5 md:w-6 md:h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition" />
  </a>
  <a
    href="https://linkedin.com/in/ama-nkansah-akuoko"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5 md:w-6 md:h-6  text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300  transition" />
  </a>
 < a
    href="https://x.com/ama_techgirl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition" />
  </a>
  < a
    href="https://www.youtube.com/@techbants"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition" />
  </a>
</div>
)};