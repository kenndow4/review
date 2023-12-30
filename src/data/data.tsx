import React ,{ReactNode,useState, useEffect}from "react";

 let horario:Date= new Date();
 

interface Data{

    id:number,
    title:string,
    message:string,
    review:boolean,
    actualizacion:string
  
    
}

interface ValueData {
    datas:Data[],
    revision:Data[],
    agRevision:(id:number,title:string, menssage:string)=>void,
    chRevision:(id:number,title:string, menssage:string)=>void,
    
}


const DataCon = React.createContext<ValueData>({datas:[{

    id:0,
    title:"",
    message:"",
    review:false,
    actualizacion:""
}],revision:[],agRevision(id,title,menssage) {
    
},
chRevision(id,title,mensaje){}


});




const ContData = ({children}:{children:ReactNode}) => {



const datass:Data[] = [
    {
        id:1,
        title:"Appreciation",
        message:"Thank you for your hard work on this project.",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`
    },
    {
        id:2,
        title:"Reminder",
        message:"Don't forget about the meeting at 3 PM tomorrow.",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`
    },
    {
        id:3,
        title:"real fake",
        message:"Embrace each day with an open heart and mind. Remember, every challenge is an opportunity for growth. Stay positive!",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`
    },
    {
        id:4,
        title:"Greetings",
        message:"Hello! Hope you're having a great day.",
        review:false,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`
    },
];

const [revision, setRevision]=useState<Data[]>([]);
const [datas, setData]=useState<Data[]>(datass);
const [cuId, setCuId]=useState<number | null>(null);

const agRevision=(id:number,title:string, menssage:string)=>{

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

     setData(newData);
     

       const existe:boolean = revision.some(data => data.id === id);
       if(!existe){


       setRevision([
        ...revision,
        
       {
        id:id,
        title:title,
        message:menssage,
        review:true,
        actualizacion:`${new Date().getHours()}/${new Date().getMinutes()}`
       }
    ]);


       }else{
        setRevision(revision.filter(data => data.id !== id));

       }

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
   console.log(revision);




 

}


// actualizo el estado de datas

useEffect(()=>{



    const newDatas = datas.map(data =>{
  
      if(data.id === cuId){
          const revData =revision.find(rev=>rev.id === cuId);
         
         console.log(revData)
          return revData? revData : data;
  
      }else{
          return data;
      }
     
     
  
    });

    setData(newDatas)
},[revision,cuId]);





    return ( 

        <DataCon.Provider value={{datas,revision,agRevision,chRevision}}>
            {children}

        </DataCon.Provider>

     );
}




 
export {ContData, DataCon};