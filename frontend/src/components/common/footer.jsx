
export const Footer = ({styles=""})=>{
  return(
  <div className={`text-sm text-black ${styles}`}>
    &copy; {new Date().getFullYear()} Ama Nkansah. All rights reserved.
  </div>
 );}
