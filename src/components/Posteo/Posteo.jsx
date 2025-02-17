import { useState } from 'react';
import './Posteo.css'
import { useForm } from 'react-hook-form';


export function Posteo({onSubmit}){

    const {register,handleSubmit} = useForm();
    
    

    return(
        <form className='flex felx-center align-center column width-50 justify-self-center border-2 bc-2 radius-2 p-3 gap-3 m-bottom-6' onSubmit={ handleSubmit(onSubmit) }>
            <h2 className='select'>Crear post</h2>
            <div className='flex felx-center align-center column width-100 gap-2'>
                <label className='size-2 select'>Imagen del proyecto</label>
                <input className='post-input width-75 size-1 bg-3 white p-1 radius-1' type="text" placeholder='/modal.png' autoFocus {...register("imgPrincipal")}/>
            </div>
            <div className='flex felx-center align-center column width-100 gap-2'>
                <label className='size-2 select'>Titulo</label>
                <input className='post-input width-75 size-1 bg-3 white p-1 radius-1' type="text" {...register("titulo")}/>
            </div>
            <div className='flex felx-center align-center column width-100 gap-2'>
                <label className='size-2 select'>Descripcion</label>
                <textarea className='post-input post-area width-75 size-1 bg-3 white p-1 radius-1' {...register("descripcion")}></textarea>
            </div>
            <div className='flex felx-center align-center column width-100 gap-2'>
                <label className='size-2 select'>Imagen del cliente</label>
                <input className='post-input width-75 size-1 bg-3 white p-1 radius-1' type="text" placeholder='/avatar.jpg' {...register("imgCliente")}/>
            </div>
            <div className='flex felx-center align-center column width-100 gap-2'>
                <label className='size-2 select'>Cliente</label>
                <input className='post-input width-75 size-1 bg-3 white p-1 radius-1' type="text" {...register("cliente")}/>
            </div>
            <div className='flex felx-center align-center column width-100 gap-2'>
                <label className='size-2 select'>Tipo de cliente</label>
                <input className='post-input width-75 size-1 bg-3 white p-1 radius-1' type="text" {...register("tipo")}/>
            </div>
            <input type="submit" className="button size-2 bg-3 white p-1 radius-1 select pointer" value="Postear"/>
        </form>
    )
}

