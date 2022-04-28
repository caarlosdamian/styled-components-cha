import React from 'react'
import { CardProps } from '../../interfaces/interfaces'
import { StyledCard } from '../styles/Card.styled'

export const Card = ({ item: { id, title, body, image } }: CardProps) => {
    return (
        <StyledCard layout={id % 2 ===0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={image} alt={image} />
            </div>
        </StyledCard>
    )
}
