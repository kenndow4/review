import { useContext } from "react";
import { DataCon } from "../data/data";
import { FaEdit } from 'react-icons/fa';

const Revision = () => {

    let {revision, chRevision}=useContext(DataCon);
    
    
    return ( 

        
        <div className="cont-data">

            <h1>In review </h1>
           
        {
           revision.length > 0?

           revision.map((data)=>{
            return (
                <div className="cont-a" key={data.id}>
              
              <div className="cont-p-r">
               <h2>{data.title}</h2>

               <p>{data.message}</p>
              </div>
                <FaEdit className="re-icon" onClick={()=>chRevision(data.id,data.title,data.message)}/>
               </div>

            )
        })

           :
           <p className="p">~ There is nothing to review ~</p>
        }
    </div>

       
     );
}
 
export default Revision;