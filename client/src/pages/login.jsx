import styled from "styled-components"
import React from 'react'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
`
const Title = styled.h1`
`
const Form = styled.form`
    display: flex;
    flex-direction: column
`
const Input = styled.input`
    padding: 10px;
    maring: 10px 0 
`

const Button = styled.button``

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
