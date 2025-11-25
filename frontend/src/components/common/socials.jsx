import { Github, Linkedin, Twitter,Youtube }  from "lucide-react"; 

export function SocialIcons(){
return(
<div className="flex gap-4 -translate-x-46 translate-y-14  md:-translate-x-1 md:-translate-y-80 md:justify-center mt-4 order-4">
  <a
    href="https://github.com/Ama-Nkansah"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className=" w-5 h-5 md:w-6 md:h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition -translate-y-54 translate-x-80" />
  </a>
  <a
    href="https://www.linkedin.com/in/ama-nkansah/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5 md:w-6 md:h-6  text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300  transition -translate-y-54 translate-x-80" />
  </a>
 < a
    href="https://twitter.com/AmaNkansah"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition -translate-y-54 translate-x-80" />
  </a>
  < a
    href="https://www.youtube.com/@techbants"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition -translate-y-54 translate-x-80" />
  </a>
</div>
)};