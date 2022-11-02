import styled from "styled-components"
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

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

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("/auth/signup", inputs)
            navigate("/login")
        } catch (err) {
            setError(err.response.data)
        }
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN UP</Title>
                <Form>
                    <Input required type="text" placeholder="username" name="username" onChange={handleChange} />
                    <Input required type="password" placeholder="password" name="password" onChange={handleChange} />
                    <Button onClick={handleSubmit}>REGISTER</Button>
                    {err && <p>{err}</p>}
                    <span>
                        Do you have an account?
                    </span>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register