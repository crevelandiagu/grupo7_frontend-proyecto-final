import { useDispatch, useSelector } from 'react-redux';
import { candidateApi, companyApi }  from '../api';
import { checking, signup, signin, logout, setProfile /*clearErrorMessages*/ } from '../store/auth/authSlice';


export const useAuthStore = () => {

    const { status, id,  profile, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startSetProfile = (profile) => {
        dispatch( setProfile(profile) );
    }

    const startSignIn = async({ email, password }) => {
        dispatch(checking());
        try {
            if(profile === 'candidate') {
                const { data } =  await candidateApi.post('/login',{ email, password });
                // console.log(data);
                localStorage.setItem('token', data.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                dispatch( signin({ name: data.name, id: data.id }) );
            } else if(profile === 'company') {
                const { data } = await companyApi.post('/login',{ email, password });
                // console.log(data);
                localStorage.setItem('token', data.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                dispatch( signin({ name: data.name, id: data.id }) );
            }
            
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
            if(profile === 'candidate') {
                const { data } = await candidateApi.post('/signup',{ email, password });
                // console.log(data, data.id, data.email);
                localStorage.setItem('token', data.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                dispatch( signup({ id:data.id, email:data.email }) );
            } else if(profile === 'company') {
                const { data } = await companyApi.post('/signup',{ email, password, name });
                // console.log(data, data.id, data.email);
                localStorage.setItem('token', data.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                dispatch( signup({ id:data.id, email:data.email }) );
            }

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

    const startLogout = () => {
        localStorage.clear();
        // dispatch( onLogoutCalendar() );
        dispatch( logout() );
    }





    return {
        //* Propiedades
        errorMessage,
        status, 
        user,
        profile,
        id,  

        //* Métodos
        startSignUp,
        startSignIn,
        checkAuthToken,
        startLogout,
        startSetProfile
    }

}