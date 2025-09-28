import { Card } from "../common/card";

export const Projects = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-rows-1 gap-5">

        <div className="grid grid-cols-1 grid-rows-4 gap-1 -ml-100 m-10">
          <h3 className="text-3xl  text-fuchsia-700 dark:text-fuchsia-300 ml-170 my-5 delius-regular">Projects</h3>
          <Card styling ="md:mx-105 md:w-150 h-auto">

          </Card>
          <Card styling ="md:mx-105 md:w-150 h-auto">
            
          </Card>
          <Card styling ="md:mx-105 md:w-150 h-auto">
            
          </Card>
          <Card styling ="md:mx-105 md:w-150 h-auto">
            
          </Card>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-1 -ml-100 m-10">
          <h3 className="text-3xl text-fuchsia-700 dark:text-fuchsia-300 ml-130 my-5 delius-regular">Professional Experience</h3>
          <Card styling ="md:mx-100 md:w-150 h-auto"> 

          </Card>
          <Card styling ="md:mx-100 md:w-150 h-auto"> 
            
          </Card>
          <Card styling ="md:mx-100 md:w-150 h-auto"> 
            
          </Card>
          <Card styling ="md:mx-100 md:w-150 h-auto"> 
            
          </Card>
        </div>
      </div>
    </div>
)};