import React ,{ReactNode,useState, useEffect}from "react";
// import { v4 as uuidv4 } from 'uuid';

interface Data{

    id:number,
    title:string,
    message:string
}

interface ValueData {
    datas:Data[],
    revision:Data[],
    agRevision:(id:number,title:string, menssage:string)=>void
}



const DataCon = React.createContext<ValueData>({datas:[{

    id:0,
    title:"",
    message:""
}],revision:[],agRevision(id,title,menssage) {
    
},});

const ContData = ({children}:{children:ReactNode}) => {

// const [post, setPost]=useState<[]>([]);

// useEffect(()=>{

//     const url:string = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo";
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data) => {
        
//         setPost(data);
//      }).catch((err) => {
//         console.log(err.message);
//      });

// },[]);

// console.log(post);

const datas:Data[] = [
    {
        id:1,
        title:"Appreciation",
        message:"Thank you for your hard work on this project."
    },
    {
        id:2,
        title:"Reminder",
        message:"Don't forget about the meeting at 3 PM tomorrow."
    },
    {
        id:3,
        title:"real fake",
        message:"Embrace each day with an open heart and mind. Remember, every challenge is an opportunity for growth. Stay positive!"
    },
    {
        id:4,
        title:"Greetings",
        message:"Hello! Hope you're having a great day."
    },
];

const [revision, setRevision]=useState<Data[]>([]);

const agRevision=(id:number,title:string, menssage:string)=>{

    
       const existe:boolean = revision.some(data => data.id === id);
       if(!existe){

       setRevision([
        ...revision,
        
       {
        id:id,
        title:title,
        message:menssage
       }
    ]);


       }else{
        setRevision(revision.filter(data => data.id !== id));

       }



    

  
   

console.log(revision)
    



};






    return ( 

        <DataCon.Provider value={{datas,revision,agRevision}}>
            {children}

        </DataCon.Provider>

     );
}




 
export {ContData, DataCon};