import { useDispatch, useSelector } from 'react-redux';
import { candidateApi }  from '../api';
import { checking, signup, signin, logout, /*clearErrorMessages*/ } from '../store/auth/authSlice';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startSignIn = async({ email, password }) => {
        dispatch(checking());
        try {
            const { data } = await candidateApi.post('/login',{ email, password }); 
            console.log(data);
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( signin({ name: data.name, id: data.id }) );
            
        } catch (error) {
            console.log('error', error);
            dispatch( logout('Credenciales incorrectas') );
            // setTimeout(() => {
            //     dispatch( clearErrorMessages() );
            // }, 10);
        }
    }

    const startSignUp = async({ email, password, name }) => {
        dispatch( checking() );
        try {
            const { data } = await candidateApi.post('/signup',{ email, password, name });
            console.log(data, data.id, data.email);
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( signup({ id:data.id, email:data.email }) );
            // dispatch( signup({ name: data.name, id: data.id }) );
            
        } catch (error) {
            console.log('error', error.response?.data?.message);
            dispatch( logout( error.response?.data?.message || 'Service under maintenance, please try again later.' ) );
            // setTimeout(() => {
            //     dispatch( clearErrorMessages() );
            // }, 10);
        }
    }


    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( logout() );

        // try {
        //     const { data } = await candidateApi.get('auth/renew');
        //     localStorage.setItem('token', data.token );
        //     localStorage.setItem('token-init-date', new Date().getTime() );
        //     dispatch( onLogin({ name: data.name, uid: data.uid }) );
        // } catch (error) {
        //     localStorage.clear();
        //     dispatch( onLogout() );
        // }
    }

    // const startLogout = () => {
    //     localStorage.clear();
    //     dispatch( onLogoutCalendar() );
    //     dispatch( onLogout() );
    // }



    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        
        startSignUp,
        startSignIn,
        checkAuthToken,
        // startLogout,
    }

}