import { Container, Form, Background } from './styles';

import { Input } from '../components/Input';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { api } from "../../services/api";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        if (!name || !email || !password) {
            return alert("É necessário preencher todos os campos!");
        }

        api.post("/users", { name, email, password })
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus itens úteis</p>
                <h2>Crie sua conta</h2>    

                <Input
                 placeholder="Nome"
                 type="name"
                 icon={FiUser}
                 onChange={e => setName(e.target.value)}
                 />

                <Input
                 placeholder="E-mail"
                 type="email"
                 icon={FiMail}
                 onChange={e => setEmail(e.target.value)}    
                 />

                <Input
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}
                 onChange={e => setPassword(e.target.value)}
                 />
                 
                <Button title="Cadastrar" onClick={handleSignUp}/>
                
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    );
}