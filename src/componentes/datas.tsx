import { ReactElement, useContext,useEffect } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { DataCon } from "../data/data";
import "../css/data.css"



interface Data{
    id:number,
    title:string,
    message:string,
    review:boolean,
    actualizacion:string

}
interface DataProps{
    data:Data[]
}

const Datas = ({data}:DataProps) :ReactElement=> {
    
const {agRevision,revision}=useContext(DataCon);
   
  
    
    return ( 

        <div className="cont-data">
            
           
            {
                data.map((data)=>{
                    // console.log(data);
                    
                    return (
                        <div className="cont-a" key={data.id}>
                      
                      <div className="cont-p-r">
                       <h2>{data.title}</h2>

                       <p>{data.message}</p>
                       <p className="actua">Last update {data.actualizacion.toString()}</p>
                       
                       
                       
                      
                      </div>

                      {
                        data.review?
                        <FaEyeSlash className="re-icon" onClick={()=>agRevision(data.id,data.title,data.message)}/>
                        :
                        <FaEye className="re-icon" onClick={()=>agRevision(data.id,data.title,data.message)}/>

                      }
                        
                        
                       </div>

                    )
                })
            }
        </div>

     );
}
 
export default Datas;