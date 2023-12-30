import { ReactElement, useContext } from "react";
import { FaEye } from 'react-icons/fa';
import { DataCon } from "../data/data";
import "../css/data.css"

interface Data{
    id:number,
    title:string,
    message:string

}
interface DataProps{
    data:Data[]
}

const Datas = ({data}:DataProps) :ReactElement=> {
    
const {agRevision}=useContext(DataCon);
   
    
    
    return ( 

        <div className="cont-data">
            
           
            {
                data.map((data)=>{
                    return (
                        <div className="cont-a" key={data.id}>
                      
                      <div className="cont-p-r">
                       <h2>{data.title}</h2>

                       <p>{data.message}</p>
                      </div>
                        <FaEye className="re-icon" onClick={()=>agRevision(data.id,data.title,data.message)}/>
                       </div>

                    )
                })
            }
        </div>

     );
}
 
export default Datas;