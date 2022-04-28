import React from 'react'
import { Image, Logo, Nav, StyledHeader } from '../styles/Header.styled'
import { Container } from '../styles/Container.styled'
import { Button } from '../styles/Button.styled'
import { Flex } from '../styles/Flex.styled'
import logoImg from '../../images/logo.svg'
import Img from '../../images/illustration-mockups.svg'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src={logoImg} alt='logo' />
                    <Button >Try it Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>
                    </div>
                    <Button bg='#ff0099' color='#fff'>
                        Get Started For Free
                    </Button>
                </Flex>
                <Image src={Img} alt='image'/>
            </Container>

        </StyledHeader>
    )
}
