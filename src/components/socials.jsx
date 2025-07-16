import { Github, Linkedin, Twitter }  from "lucide-react"; 

export function SocialIcons(){
return(
<div className="flex gap-4 justify-center mt-4 ">
  <a
    href="https://github.com/Ama-Nkansah"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-6 h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition -translate-y-45 translate-x-85" />
  </a>
  <a
    href="https://www.linkedin.com/in/ama-nkansah/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-6 h-6  text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300  transition -translate-y-45 translate-x-85" />
  </a>
 < a
    href="https://twitter.com/AmaNkansah"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-6 h-6 text-black dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition -translate-y-45 translate-x-85" />
  </a>
</div>
)};