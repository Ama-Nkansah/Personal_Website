import { ArrowRight, Code, Heart, Lightbulb } from "lucide-react"; // Make sure you have lucide-react or use text
import myImg from "../../assets/my-img.jpg";
import { useNavigate } from 'react-router-dom';
import { ApproachCard } from "./approachCard";
import Button from "../common/button"; // Assuming you have this

export default function AboutTeaser() {
  const navigate = useNavigate();

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* --- PART 1: The Intro (Split Screen) --- */}
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-sm font-bold tracking-widest text-fuchsia-600 dark:text-fuchsia-400 uppercase mb-2">
              About Me
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Building smart products out of <span className="text-fuchsia-500 italic">raw ideas.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey into tech started in Level 100 with data analysis, but I needed more creativity. 
              Since transitioning to software engineering, I’ve been obsessed with turning ideas into code that solves real problems.
              Behind the code, I’m all about systems thinking and building things that scale.
            </p>
            
            <button 
              onClick={() => navigate('/about', { state: { scrollToFull: true } })}
              className="group flex items-center gap-2 text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-all mt-4"
            >
              Read full story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>

          {/* Image Side */}
          <div className="relative order-1 md:order-2 flex justify-center">
            {/* Decorative Square Behind */}
            <div className="absolute top-4 right-4 md:right-10 w-full h-full border-2 border-fuchsia-200 dark:border-fuchsia-900 rounded-3xl -z-10" />
            
            <img 
              src={myImg}
              alt="Ama Nkansah"
              className="w-full max-w-sm rounded-3xl shadow-2xl object-cover aspect-[4/5] z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* --- PART 2: The Approach (Cards) --- */}
      <div className="bg-gray-50 dark:bg-[#21292c] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I believe in testing ideas early, building smart MVPs, and improving as we go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ApproachCard 
              icon={<Code size={32} />}
              title="Clean Architecture"
              text="I build full-stack using React, Node.js, and Cloud tools, ensuring code is scalable and maintainable."
            />
            <ApproachCard 
              icon={<Lightbulb size={32} />}
              title="Systems Thinking"
              text="I don't just write code. I look at the big picture to create products that actually grow and function."
            />
            <ApproachCard 
              icon={<Heart size={32} />}
              title="Mentorship"
              text="I love sharing what I know. Making tech feel simple and exciting for beginners is my passion."
            />
          </div>
        </div>
      </div>
    </section>
  );
}