import React from 'react'
import {Carousel} from 'react-bootstrap'
import useFirestore from '../hooks/useFirestore';
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function CarouselX   () {  
    const { docs } = useFirestore('gallery');
    const { height, width } = useWindowDimensions();

    return (
        <Carousel>
        {docs && docs.map(doc => (
            <Carousel.Item interval={2500}>
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
