import React from 'react';
import './css/cadastro.css'
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import history from '../components/auth/history';
import { baseURL } from '../service/apiBack'


// axios.get('http://localhost:3333/doadores').then(function(data){
//     console.log(data)
// })

const cadastroD = () => {
    const handleSubmit = values => {
        axios.post(`${baseURL}/signupd`, values)
        .then(resp => {
            history.push('/meus_dados_d')

        })
    }
    const validations = Yup.object().shape({
        cpf: Yup.string()
        .min(14, 'CPF inválido, digite com pontos e traço')
        .max(14, 'CPF inválido, digite com pontos e traço')
        .required('O CPF é Obrigatório'),
        nome: Yup.string().required('O Nome é Obrigatório'),
        email: Yup.string().email('Digite um email válido').required('O Email é Obrigatório'),
        data_nascimento: Yup.string().required('A Data de Nascimento é Obrigatória'),
        senha: Yup.string().min(8, 'Digite no minimo 8 caracteres').required('A Senha é Obrigatória'),
        confirmaSenha: Yup.string()
        .oneOf([Yup.ref('senha'), null],'As senhas não coincidem')
        .required('Confirmar a Senha é Obrigatório')
        
    })
    return (
        <>
        <center>
        <div className='cadastro'>
        <h1>Cadastro</h1>
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form>
                <div className='form'>
                <p className='center_D'>CPF</p>
                <Field name='cpf'/>
                <ErrorMessage component='span' name='cpf'/>
                <br></br>

                <p className='center_D'>Nome</p>
                <Field name='nome'/>
                <ErrorMessage component='span' name='nome'/>
                <br></br>

                <p className='center_D'>Email</p>
                <Field name='email'/>
                <ErrorMessage component='span' name='email'/>
                <br></br>
                
                <p>Data Nascimento</p>
                <Field type='date' name='data_nascimento'/>
                <ErrorMessage component='span' name='data_nascimento'/>
                <br></br>
                
                <p>Senha</p>
                <Field type='password' name='senha'/>
                <ErrorMessage component='span' name='senha'/>
                <br></br>
                
                <p>Repita a Senha</p>
                <Field type='password' name='confirmaSenha'/>
                <ErrorMessage component='span' name='confirmaSenha'/>
                <br></br>
                
                <button type='submit'>fazer cadastro</button>

                </div>
            </Form>
        </Formik>
        <br></br>
        <Link to='/cadastro_h' className='links'>
        <p className='trocalogin'> Cliquei aqui para fazer cadastro como Hemocentro </p>
        </Link>
        </div>
        </center>
        </>
    )
}

export default cadastroD;