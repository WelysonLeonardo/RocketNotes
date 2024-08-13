import { Container, Form, Background } from './styles';

import { Input } from '../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export function SignIn() {

    const data = useAuth();
    console.log("MEU CONTEXTO =>", data);

    return (
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus itens úteis</p>
                <h2>Faça seu login</h2>    

                <Input
                 placeholder="E-mail"
                 type="email"
                 icon={FiMail}
                 />

                <Input
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}
                 />
                 
                <Button title="Entrar" />
                
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    );
}