import { useContext } from "react";
import { DataCon } from "../data/data";
import { FaEdit } from 'react-icons/fa';

const Revision = () => {

    let {revision, chRevision}=useContext(DataCon);
    
   
    return ( 

        
          


        <div className="cont-data">

            <h1>You liked them </h1>
           
        {
           revision.length > 0?

           revision.map((data)=>{
            return (
              <div className="cont-all-one">
                <img src={data.caratula} alt="" />

{/* aqui va todo lo que tiene que ver con audio nombre etc */}


                <div className="cont-a" key={data.id}>
              
              <div className="cont-p-r">
               <h2>{data.title}</h2>

               <p>{data.message}</p>

              <audio controls>
                <source src={"/audio/"+data.video}/>
              </audio>

              </div>
                <FaEdit className="re-icon" onClick={()=>chRevision(data.id,data.title,data.message)}/>
               </div>
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