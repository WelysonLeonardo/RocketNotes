import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';

import { useAuth } from '../../hooks/auth';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate(){
    const user ={
        name,
        email,
        password: passwordNew,
        old_password: passwordOld,
        }
        await updateProfile({ user });
    }

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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    autoComplete="current-password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                 <Input 
                    placeholder="Nova Senha"
                    type="password"
                    autoComplete="new-password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />

            </Form>
        
        </Container>
    );
}