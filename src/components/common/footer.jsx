
export const Footer = ({styles=""})=>{
  return(
  <div className={`text-xs text-gray-500 ${styles}`}>
    &copy; {new Date().getFullYear()} Ama Nkansah. All rights reserved.
  </div>
 );}
