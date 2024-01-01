import {  useState,useContext, ReactElement ,useEffect} from "react";

import "../css/formulario.css"
import Datas from "./datas";
import { DataCon } from "../data/data";

interface Dat{
    id:number,
    title:string,
    message:string,
    caratula:string
    video:string,
    review:boolean,
    actualizacion:string,
    caducacion:number,
    vCadu:boolean
}

const Buscador = ():ReactElement => {
    
    const {datas}=useContext(DataCon);
    
    
    const [value, setValue]=useState<string>("");
    const [data, setData]=useState<Dat[]>(datas);
    // const [con, setCon]=useState<boolean>(true);
    const hand=(e:React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value);
    const filteredData = filtros(e.target.value);
        setData(filteredData);
    
    }


    useEffect(() => {
        setData(datas);
      }, [datas]);


    const filtros=(searchValue:string):Dat[]=>{
        let lowerCaseSearch = searchValue.toLowerCase();
        let searchNumber = parseInt(searchValue);
        let filt=datas.filter((data)=>{
            return data.message.toLowerCase().includes(lowerCaseSearch) ||
             data.title.toLowerCase().includes(lowerCaseSearch) ||
              data.id === searchNumber;
        });
        return filt;

        // if(filt.length > 0){
        //     setData(filt);
        //     setCon(true)

        // }else{
        //     setCon(false)
        // }
    }


    return ( 
        <>
        <input type="search" onChange={(e)=>hand(e)} value={value} placeholder="Seach here, music, artist" />

        {data.length > 0?
        <Datas data={data}/>
        :
        <p className="p">~ Sorry but your search doesnt exist ~</p>
}
        
        </>
            
        
     );
}
 
export default Buscador;