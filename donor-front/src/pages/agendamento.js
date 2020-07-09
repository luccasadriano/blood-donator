import React from 'react';
// import { Link } from 'react-router-dom';
import './css/agendamento.css';
import { ErrorMessage, Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import history from '../components/auth/history';

// axios.get('http://localhost:3333/agendamentos').then(function(data){
//     console.log(data)
// })

const agendamento = () => {

    const handleSubmit = values => {
        axios.post('http://localhost:3333/agendamentos', values)
        .then(resp => { //console.log(resp)
            // const { data } = resp
            // if(data){
                history.push('/endereco')
            //  }
        })
    }
    const validations = Yup.object().shape({
        peso: Yup.number('Digite um Peso válido (ex:50.00)')
        .required('Digite um Peso válido (ex:50.00)'),
        tipo_sanguineo: Yup.string()
        .required('Este campo é Obrigatório'),
        sexo: Yup.string()
        .required('Este campo é Obrigatório'),
        bebidas_alcoolicas: Yup.string()
        .required('Este campo é Obrigatório'),
        usuario_tabaco: Yup.string()
        .required('Este campo é Obrigatório'),
        drogas_ilicitas: Yup.string()
        .required('Este campo é Obrigatório'),
        doenca_infecciosas: Yup.string()
        .required('Este campo é Obrigatório'),
        data_agendamento: Yup.string()
        .required('Este campo é Obrigatório'),
        horas_doacao: Yup.string()
        .required('Este campo é Obrigatório'),
        
        
    })
    return (
        <>
        <center>
        <div className='agendamento'>
        <h1>Agendamento</h1>
            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form>
                <div className='form'>

                <p>Peso</p>
                <Field name='peso'type="number" placeholder="0.0" min="0" max="100"/>
                <ErrorMessage component='span' name='peso'/>
                <br></br>

                <p>Tipo Sanguíneo</p>
                <Field name='tipo_sanguineo' as="select">
                <option value="A+"> A+ </option> 
                <option value="A-"> A- </option>
                <option value="B+"> B+ </option>
                <option value="B-"> B- </option> 
                <option value="AB+"> AB- </option>
                <option value="AB-"> AB+ </option>
                <option value="O+"> O+ </option> 
                <option value="O-"> O- </option>
                </Field>
                <ErrorMessage component='span' name='tipo_sanguineo'/>
                <br></br>
                
                <p> Sexo </p>
                <Field name='sexo' as='select'>
                <option value="true"> Masculino </option>
                <option value="false"> Feminino </option>
                </Field>
                <ErrorMessage component='span' name='sexo'/>
                <br></br>

                <p>Consumo de bebidas Alcoólicas?</p>
                <Field name='bebidas_alcoolicas' as='select'>
                <option value="true"> Sim </option>
                <option value="false"> Não </option>
                </Field>
                <ErrorMessage component='span' name='bebidas_alcoolicas'/>
                <br></br>
                
                <p> Consome tabaco? </p>
                <Field name='usuario_tabaco' as='select'>
                <option value="true"> Sim </option>
                <option value="false"> Não </option>
                </Field>
                <ErrorMessage component='span' name='usuario_tabaco'/>
                <br></br>
                
                <p> É usuário de drogas ilícitas? </p>
                <Field name='drogas_ilicitas' as='select'>
                <option value="true"> Sim </option>
                <option value="false"> Não </option>
                </Field>
                <ErrorMessage component='span' name='drogas_ilicitas'/>
                <br></br>
                
                <p> Possui Doenças Infecciosas? </p>
                <Field name='doenca_infecciosas'  as='select'>
                <option value="true"> Sim </option>
                <option value="false"> Não </option>
                </Field>
                <ErrorMessage component='span' name='doenca_infecciosas'/>
                <br></br>

                <p>Data que pretende o sangue</p>
                <Field type='date' name='data_agendamento'/>
                <ErrorMessage component='span' name='data_agendamento'/>
                <br></br>

                <p>Horário de disponibilidade para doação</p>
                <Field type='time' name='horas_doacao'/>
                <ErrorMessage component='span' name='horas_doacao'/>
                <br></br>

                {/* //<Field type='number' name='id_doadores'>`${id}`</Field>/> */}

                <br></br>
                <br></br>
                <p className='trocalogin'> Você precisa cadastrar seu endereço antes de finalizar o Agendamento</p>

                {/* <Link to='/meus_dados_D' className='links'> */}
                <button type='submit'> Cadastrar meu Endereço!</button>
                {/* </Link> */}
            </div>
            </Form>
        </Formik>
        <br></br>
        </div>
        </center>
    </>
)
}

export default agendamento;