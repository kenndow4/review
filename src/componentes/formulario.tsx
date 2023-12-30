import {  useState,useContext, ReactElement ,useEffect} from "react";

import "../css/formulario.css"
import Datas from "./datas";
import { DataCon } from "../data/data";

interface Dat{
    id:number,
    title:string,
    message:string,
    review:boolean,
    actualizacion:string
}

const Buscador = ():ReactElement => {
    
    const {datas}=useContext(DataCon);
    
    
    const [value, setValue]=useState<string>("");
    const [data, setData]=useState<Dat[]>(datas);
    const [con, setCon]=useState<boolean>(true);
    const hand=(e:React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value);
    filtros(e.target.value);
    
    }


    useEffect(() => {
        setData(datas);
      }, [datas]);


    const filtros=(searchValue:string):void=>{
        let lowerCaseSearch = searchValue.toLowerCase();
        let searchNumber = parseInt(searchValue);
        let filt=datas.filter((data)=>{
            return data.message.toLowerCase().includes(lowerCaseSearch) ||
             data.title.toLowerCase().includes(lowerCaseSearch) ||
              data.id === searchNumber;
        });
      

        if(filt.length > 0){
            setData(filt);
            setCon(true)

        }else{
            setCon(false)
        }
    }


    return ( 
        <>
        <input type="search" onChange={(e)=>hand(e)} value={value} placeholder="Seach here" />

        {con?
        <Datas data={data}/>
        :
        <p className="p">~ Sorry but your search doesnt exist ~</p>
}
        
        </>
            
        
     );
}
 
export default Buscador;