import {InputText} from 'primereact/inputtext';
import {IconField} from 'primereact/iconfield';
import {InputIcon} from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-blue/theme.css";
import { useState } from 'react';


const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    return ( 
        <>
            <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3'>
                <form className='surface-0 p-3 border-round-md col-12 md:col-3'>
                    <h3 className='text-center text-4xl'>Seja bem-vindo</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1' >Email</label>
                    <InputText 
                        placeholder='email@email.com'
                        className='mb-3 w-full'
                    />
                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'  >Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon className={`pi ${mostrarSenha? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                            ></InputIcon>
                            <InputText
                                id='senha'
                                type={mostrarSenha? 'text': 'password'}
                                placeholder='********'
                                className='w-full'
                            />
                        </IconField>
                    </div>
                    <Button label="Enviar" type='submit' className='w-full' />

                </form>
            </div>
        </>
     );
}
 
export default Login;