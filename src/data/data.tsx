import React ,{ReactNode,useState}from "react";


 

interface Data{

    id:number,
    title:string,
    message:string,
    caratula:string
    video:string
    review:boolean,
    actualizacion:string,
    caducacion:number,
    vCadu:boolean
  
    
}

interface ValueData {
    datas:Data[],
    revision:Data[],
    agRevision:(id:number,title:string, menssage:string,video:string,caratula:string)=>void,
    chRevision:(id:number,title:string, menssage:string)=>void,
    
}


const DataCon = React.createContext<ValueData>({datas:[{

    id:0,
    title:"",
    message:"",
    video:"",
    review:false,
    actualizacion:"",
    caducacion:0,
    vCadu:false,
    caratula:""
}],revision:[],agRevision() {
    
},
chRevision(id,title,mensaje){}


});




const ContData = ({children}:{children:ReactNode}) => {



const datass:Data[] = [
    {
        id:1,
        title:"Pero Ya No",
        message:"Written By: Phantom (Producer) · Dez Wright · Freddy “El Syntethyzer” · Bad Bunny · Llanos Gonzalez",
        video:"yano.mp3",
        caratula:"https://th.bing.com/th/id/OIP.BwUNIL6yK9lEpCDYr44g6AHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
    {
        id:2,
        title:"Yamê - Bécane",
        message:"A COLORS SHOW",
        video:"yam.mp3",
        caratula:"https://th.bing.com/th/id/OIP.1dd_Qyr35rftsFso8Tt9tQAAAA?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
    {
        id:3,
        title:"BAD BUNNY - MONACO",
        message:"album : nadie sabe lo que va a pasar mañana",
        video:"monaco.mp3",
        caratula:"https://th.bing.com/th/id/OIF.v0sh6SyOub18J7jA8Hwx7w?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
    {
        id:4,
        title:"Post Malone, Swae Lee - Sunflower",
        message:"Sunflower (Spider-Man: Into the Spider-Verse) Post Malone",
        video:"spiderman.mp3",
        caratula:"https://th.bing.com/th/id/OIP.HNa3cNHnrD27a_laZaopNAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
];

const [revision, setRevision]=useState<Data[]>([]);
const [datas, setData]=useState<Data[]>(datass);
const [cuId, setCuId]=useState<number | null>(null);
const [vCaducion, setVCaducion] = useState<boolean>(false); 

const agRevision=(id:number,title:string, menssage:string,video:string,caratula:string)=>{

    console.log(datas);

      const newData= datas.map((data)=>{

        if(data.id === id){

            
          
            
            return{
                ...data,
                review:!data.review
            }
            
        }else{
            return data
        }


       });

    //  setData(newData);
     

       const existe:boolean = revision.some(data => data.id === id);
       if(!existe){


       setRevision([
        ...revision,
        
       {
        id:id,
        title:title,
        message:menssage,
        video:video,
        caratula:caratula,
        review:true,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
       }
    ]);


       }else{
        setRevision(revision.filter(data => data.id !== id));

       }

       const validacionCadu =newData.map(dat=>{
        if(new Date().getMinutes() >= dat.caducacion){
           
           
           return{
              ...dat,
              vCadu:true
            }
           
        }else{
         return dat;
        }
     
     });
    
      setData(validacionCadu);

};





const chRevision=(id:number,title:string,message:string)=>{
   const titlee = prompt("Write the title");
   const messag = prompt("Write the message");

   

   const actual = revision.map(news =>{

    if(news.id === id){

        return{
            ...news,
            title:titlee !== null && titlee !== ""? titlee:title,
            message:messag !== null && messag !== ""? messag:message,
            actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`

            
        }

    }else{
        return news;
    }
       

   });
   setRevision(actual)
   // Actualizamos el id actual
   setCuId(id);
   

   const newDatas = datas.map(data =>{
  
    if(data.id === id){
        const revData =actual.find(rev=>rev.id === id);
       
       
        return revData? revData : data;

    }else{
        return data;
    }
   
   

  });

  setData(newDatas)

 
 

}


// actualizo el estado de datas










    return ( 

        <DataCon.Provider value={{datas,revision,agRevision,chRevision}}>
            {children}

        </DataCon.Provider>

     );
}




 
export {ContData, DataCon};