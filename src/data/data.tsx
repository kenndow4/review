import React ,{ReactNode,useState}from "react";

 let horario:Date= new Date();
 

interface Data{

    id:number,
    title:string,
    message:string,
    video:string
    review:boolean,
    actualizacion:string,
    caducacion:number,
    vCadu:boolean
  
    
}

interface ValueData {
    datas:Data[],
    revision:Data[],
    agRevision:(id:number,title:string, menssage:string,video:string)=>void,
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
    vCadu:false
}],revision:[],agRevision() {
    
},
chRevision(id,title,mensaje){}


});




const ContData = ({children}:{children:ReactNode}) => {



const datass:Data[] = [
    {
        id:1,
        title:"Appreciation",
        message:"Thank you for your hard work on this project.",
        video:"https://www.youtube.com/embed/mPVOZx9AbvQ?si=O5gMmKC0CgYE31TI",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
    {
        id:2,
        title:"Reminder",
        message:"Don't forget about the meeting at 3 PM tomorrow.",
        video:"https://www.youtube.com/embed/8qzCUHpLFW8?si=srwtYxJT5iTRKihH",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
    {
        id:3,
        title:"real fake",
        message:"Embrace each day with an open heart and mind. Remember, every challenge is an opportunity for growth. Stay positive!",
        video:"https://www.youtube.com/embed/dEtmusAb4v0?si=BMsDaqv-AM4hi12U",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`,
        caducacion:new Date().getMinutes() + 1,
        vCadu:false
    },
    {
        id:4,
        title:"Greetings",
        message:"Hello! Hope you're having a great day.",
        video:"https://www.youtube.com/embed/k9FyfRT9Fng?si=QuXY9sfV00h5rYSq",
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

const agRevision=(id:number,title:string, menssage:string,video:string)=>{

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