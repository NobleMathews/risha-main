import React from 'react'
import {Carousel} from 'react-bootstrap'
import useFirestore from '../hooks/useFirestore';
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function CarouselX   () {  
    const { docs } = useFirestore('gallery');
    const { height, width } = useWindowDimensions();

    return (
        <Carousel>
        {docs && docs.map((doc,i) => (
            <Carousel.Item interval={2500} key={i} style={{cursor:"pointer"}} onClick={(e)=>{e.preventDefault(); window.location.href='/gallery';}}>
            <img
            className="rounded mx-auto d-block"
            height={height/2.2}
            src={doc.url}
            alt="#WeAreRisha"
            />
            <Carousel.Caption>
            <p>{doc.caption}</p>
            </Carousel.Caption>
            </Carousel.Item>
        ))}
      </Carousel>
    )
}
