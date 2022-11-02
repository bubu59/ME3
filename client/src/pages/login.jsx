import styled from "styled-components"
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice.js'

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

const Error = styled.p`
    color: red;
    text-align:center
`

const Login = () => {

    const [inputs, setInputs] = useState({
        name: "",
        password: ""
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch(loginStart)

        const res = await axios.post("/auth/signin", inputs)
        console.log(res)
        dispatch(loginSuccess(res.data))
        navigate("/")

    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input required type="text" placeholder="username" name="name" onChange={handleChange} />
                    <Input required type="password" placeholder="password" name="password" onChange={handleChange} />
                    <Button onClick={handleSubmit}>LOGIN</Button>
                    {err && <Error>{err}</Error>}
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
