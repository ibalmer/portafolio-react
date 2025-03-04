
import './Proyectos.css';
import { Proyecto } from '../Proyecto/proyecto';
import { useState, useEffect } from 'react';

export function Proyectos({ newProyect }) {
    let preProyectos = [
        {
            imgPrincipal: '/sdungeon.png',
            titulo: 'Skull Dungeon',
            descripcion: 'Skull Dungeon es una marca dedicada al diseño y desarrollo de videojuegos con un enfoque en crear experienciainmersivas y visualmente impactantes. La web servirá como una plataforma para mostrar su portafolio, atraer nuevos clientes y ofrecerecursos a la comunidad de desarrolladores.',
            imgCliente: '/avatar.jpg',
            cliente: 'Skull Dungeons Games',
            tipo: 'Empresa',
        },
        {
            imgPrincipal: '/modal.png',
            titulo: 'Practica Modal',
            descripcion: 'Practicando JavaScript hice este modal con imagenes, en el q se puede elegir la foto que queremos agrandar e irecorriendo la lista por medio de las flechas, hacer zoom en ellas y cerrar el modal en caso de querer ver la cuadricula con el restde imagenes.',
            imgCliente: '/avatar.jpg',
            cliente: 'Ivan Balmer',
            tipo: 'Estudiante',
        }
    ];

    const [proyectos, setProyectos] = useState(preProyectos);

    useEffect(() => {
        if (newProyect && Object.keys(newProyect).length > 0) {
            setProyectos([...proyectos, newProyect]);
        }
    }, [newProyect]);

    return (
        <>
            <h3 className='select m-4 justify-self-center'>Proyectos</h3>
            <section className='grid col-2 flex-center width-50 justify-self-center gap-4 m-bottom-6'>
                {proyectos.map(pro => (
                    <Proyecto
                        imgPrincipal={pro.imgPrincipal}
                        titulo={pro.titulo}
                        descripcion={pro.descripcion}
                        imgCliente={pro.imgCliente}
                        cliente={pro.cliente}
                        tipo={pro.tipo}
                    />
                ))}
            </section>
        </>
    );
}
        