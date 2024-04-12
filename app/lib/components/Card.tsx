'use client'

import { useState } from 'react';
import CardFooterInfos from './CardFooterInfos';
import CardHiddenInfos from './CardHiddenInfos';

interface CardProps { 
    name: string;
    imageSrc: string;
    artist: string;
    position: number;
    duration: number;
    previewUrl: string;
    danceability: number;
    energy: number;
    tempo: number;
}

export default function Card({position, name, imageSrc, artist, duration, previewUrl, danceability, energy, tempo}: CardProps) {

    const [isActive, setIsActive] = useState(true);

    return (
        <article 
            className='w-full pt-[100%] mb-2 relative rounded-md'
            style={{backgroundImage: `url(${imageSrc})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
            onClick={() => setIsActive(!isActive)}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <CardFooterInfos position={position} name={name} artist={artist} />
            {isActive && 
                <CardHiddenInfos
                    duration={duration}
                    previewUrl={previewUrl}
                    danceability={danceability}
                    energy={energy}
                    tempo={tempo}     
                />
            }
        </article>
    )
}