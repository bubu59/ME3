import styled from "styled-components"
import React from 'react'
import Navbar from "../components/Navbar"

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const second = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default second