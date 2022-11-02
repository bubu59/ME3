import styled from "styled-components"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/userSlice"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px
`

const User = styled.div`
    display:flex;
    align-items:center;
    font-size: 15px
`
const Logout = styled.button``



const Navbar = () => {

    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCLick = async (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate("/register")
    }

    return (
        <Container>
            {currentUser && <><User>
                {currentUser.name}
            </User>
                <User>
                    {currentUser.password}
                </User>
                <Logout onClick={handleCLick}>Logout</Logout>
            </>}
        </Container>
    )
}

export default Navbar
