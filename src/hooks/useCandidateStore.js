import { useDispatch, useSelector } from 'react-redux';
// import { candidateApi }  from '../api';
import { showView } from '../store/candidate/candidateSlice';


export const useCandidateStore = () => {

    const { status, view, errorMessage } = useSelector( state => state.candidate );
    const dispatch = useDispatch();

    const startActiveView = (currentView) => {
        dispatch( showView({view:currentView}) );
    }

    return {
        //* Propiedades
        errorMessage,
        status, 
        view, 

        //* Métodos
        startActiveView,
    }

}