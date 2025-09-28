 
export const Card = ({styling,children}) =>{
return (
  <div className={` p-6 rounded-2xl backdrop-blur-md border-black/20 bg-black/20 dark:bg-black/50 border dark:border-white/20 shadow-md my-5 ${styling}`}>
      {children}
  </div>
)};