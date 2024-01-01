import { ReactElement, useContext, useRef, useState } from "react";
import { FaHeart,FaPlay,FaPause , FaBackward,FaForward} from 'react-icons/fa';
import { DataCon } from "../data/data";
import "../css/data.css"

interface Data{
    id:number,
    title:string,
    message:string,
    video:string,
    caratula:string,
    review:boolean,
    actualizacion:string,
    caducacion:number,
    vCadu:boolean
}

interface DataProps{
    data:Data[]
}

interface CompanyProps {
    data: Data;
    agRevision: (id: number, title: string, message: string, video: string,caratula:string) => void;
}

const Company: React.FC<CompanyProps> = ({data, agRevision}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    

    const updateProgress = () => {
        const audio = audioRef.current;
        if (audio) {
            setProgress((audio.currentTime / audio.duration) * 100);
        }
    };

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const rewindAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 5;
        }
    };

    const fastForwardAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 5;
        }
    };

    return (
        <div className="cont-all-one">

          <img src={data.caratula} alt="" />

            {/* aqui va todo lo que tiene que ver con audio nombre etc */}
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
                <div className="cont-audio">
                    <div>
                    <audio ref={audioRef} src={"/audio/"+data.video} onTimeUpdate={updateProgress} />
                    <button className="ade" onClick={rewindAudio}><FaBackward /></button>
                    <button className="play" onClick={toggleAudio}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
                    <button className="ade" onClick={fastForwardAudio}><FaForward /></button>

                    </div>

                    <div className="progress">
                        <div style={{ background: '#FC642D', height: '100%', width: `${progress}%` }} />
                    </div>
                </div>
            </div>
            {
                data.review?
                <FaHeart className="re-icon" style={{ fill: '#FC642D' }} onClick={()=>agRevision(data.id,data.title,data.message,data.video,data.caratula)}/>
                :
                <FaHeart className="re-icon" onClick={()=>agRevision(data.id,data.title,data.message,data.video,data.caratula)}/>
            }
        </div>
        </div>
    );
}

const Datas: React.FC<DataProps> = ({data}):ReactElement => {
    const {agRevision}=useContext(DataCon);
    

    return (
        <div className="cont-data">
            <p>{data.length } songs founds</p>
            {data.map((data) => <Company data={data} agRevision={agRevision} />)}
        </div>
    );
}

export default Datas;
