import styled from "styled-components"
import React from 'react'

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px
`

const User = styled.div`
    display:flex;
    align-items:center;
    font-size: 40px
`


const Navbar = () => {
    return (
        <Container>
            <User>
                User
            </User>
            <User>
                password
            </User>
        </Container>
    )
}

export default Navbar
