import React from 'react'
import logo from '../../assets/logo-dio.svg'
import { Button } from '../button'
import { Link, useNavigate } from 'react-router-dom'
import {
    Container,
    BuscarInputContainer,
    Input,
    Row,
    UserPicture,
    Menu,
    MenuRight,
    Wrapper,
    ButtonSingOut
} from './style'
import { IHeader } from './types'
import { AuthContext } from '../../context/auth'
import { useAuth } from '../../hooks/useAuth'


const Header = ({ onClick }: IHeader) => {

    const { user, handleSignOut } = useAuth();

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
                    {
                        user.id ? (
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
                    {
                        user.id ? (
                            <>
                            <UserPicture src='https://github.com/pedrwsxd.png' />
                            <ButtonSingOut to='/' onClick={ handleSignOut }>
                            Sair
                            </ButtonSingOut>
                            </>
                           
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