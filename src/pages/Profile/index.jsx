import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img 
                    src="https://github.com/WelysonLeonardo.png" 
                    alt="Foto do Usuário" 
                    />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input 
                        id="avatar"
                        type="file"
                    />
                </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="name"
                    autoComplete="user-name"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    autoComplete="current-password"
                    icon={FiLock}
                />

                 <Input 
                    placeholder="Nova Senha"
                    type="password"
                    autoComplete="new-password"
                    icon={FiLock}
                />

                <Button title="Salvar" />

            </Form>
        
        </Container>
    );
}