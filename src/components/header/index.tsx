import React from 'react'
import logo from '../../assets/logo-dio.svg'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import {
    Container,
    BuscarInputContainer,
    Input,
    Column,
    Row,
    UserPicture,
    Menu,
    MenuRight,
    Wrapper
} from './style'
import { IHeader } from './types'

const Header = ({ autenticado, onClick }: IHeader) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" onClick={handleClickHome} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://github.com/pedrwsxd.png' />
                    ) : (
                        <>
                            <MenuRight onClick={handleClickHome}>Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickSignIn} />
                            <Button title="Cadastrar" onClick={handleClickRegister} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }