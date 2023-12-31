import { ReactElement, useContext,useEffect } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { DataCon } from "../data/data";
import "../css/data.css"



interface Data{
    id:number,
    title:string,
    message:string,
    video:string,
    review:boolean,
    actualizacion:string,
    caducacion:number,
    vCadu:boolean

}
interface DataProps{
    data:Data[]
}



const Datas = ({data}:DataProps) => {
    
const {agRevision}=useContext(DataCon);

    
    
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
                       
                       
                       {
                        data.vCadu ?
                        <p className="caducacion">You should update your list, your last updated were at {data.actualizacion.toString()}</p>
                        :
                        <p className="actua">Last update {data.actualizacion.toString()}</p>

                       }
                       
                       {/* <iframe   src={data.video} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
                       <audio controls>
        <source src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg" />
        
      </audio>

                      </div>
                      
                        
                      {
                        data.review?
                        <FaEyeSlash className="re-icon" onClick={()=>agRevision(data.id,data.title,data.message,data.video)}/>
                        :
                        <FaEye className="re-icon" onClick={()=>agRevision(data.id,data.title,data.message,data.video)}/>

                      }
                        
                        
                       </div>

                    )
                })
            }
        </div>

     );
}
 
export default Datas;