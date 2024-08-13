import {RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/WelysonLeonardo.png" 
          alt="Foto do usuario" 
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Welyson Leonardo</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}