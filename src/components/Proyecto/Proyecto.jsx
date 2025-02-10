import './Proyecto.css'
import { FaPaperclip } from "react-icons/fa";

export function Proyecto ({imgPrincipal , titulo ,descripcion ,imgCliente ,cliente ,tipo}){
    return(
        <div className='proyect-div flex flex-between align-center column p-3 border-2 bc-2 radius-2 bg-3 pointer'>
            <div>
                <img className='width-100 radius-2' src={imgPrincipal} alt=""/>
                <h4 className='select m-bottom-2'>{titulo}</h4>
                <p className='white m-bottom-5'>{descripcion}</p>
            </div>
            <div className='flex width-100 flex-between'>
                <div className='hov-div flex align-center flex-center'>
                    <img className='client-img radius-3 m-right-2 pointer' src={imgCliente} alt="" />
                    <div className='visibility-div'>
                        <p className='white'>{cliente}</p>
                        <p className='tipo white op-5'>{tipo}</p>
                    </div>
                </div>
                <FaPaperclip className='aling-self-end m-2' size={20}/>
            </div>
        </div>
    )
    
}

