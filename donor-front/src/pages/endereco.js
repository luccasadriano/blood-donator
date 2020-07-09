import React from 'react';
// import { Link } from 'react-router-dom';
import './css/agendamento.css';
import { ErrorMessage, Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import history from '../components/auth/history';

axios.get('http://localhost:3333/endereco').then(function(data){
    console.log(data)
})

const endereco = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:3333/endereco', values)
        .then(resp => { //console.log(resp)
            const { data } = resp
            if(data){
                localStorage.setItem('token', data)
                history.push('/meus_dados_d')
             }
        })
    }
    const validations = Yup.object().shape({
        cep: Yup.string()
        .required('Este campo é Obrigatório'),
        logradouro: Yup.string()
        .required('Este campo é Obrigatório'),
        numero: Yup.string()
        .required('Este campo é Obrigatório'),
        complemento: Yup.string()
        .notRequired(),
    })
    return (
        <>
        <center>
        <div className='agendamento'>
        <h1>Cadastro de Endereço</h1>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form>
                <p>CEP</p>
                <Field name='cep'/>
                <ErrorMessage component='span' name='cep'/>
                <br></br>

                <p>Endereço</p>
                <Field name='logradouro'/>
                <ErrorMessage component='span' name='logradouro'/>
                <br></br>

                <p>Número</p>
                <Field name='numero' type='number'/>
                <ErrorMessage component='span' name='numero'/>
                <br></br>

                <p>Complemento</p>
                <Field name='complemento'/>
                <ErrorMessage component='span' name='complemento'/>
                <br></br>

                {/* <p>Bairro</p>
                <Field name='bairro'/>
                <ErrorMessage component='span' name='bairro'/>
                <br></br>

                <p>Cidade</p>
                <Field name='cidade'/>
                <ErrorMessage component='span' name='cidade'/>
                <br></br>

                <p>Estado</p>
                <Field name='estado'/>
                <ErrorMessage component='span' name='estado'/>
                <br></br> */}
                
                {/* <Link to='/meus_dados_D' className='links'> */}
                <button type='submit'>Salvar Agendamento</button>
                {/* </Link> */}
            </Form>
        </Formik>
        </div>
        </center>
    </>
)
}

export default endereco;