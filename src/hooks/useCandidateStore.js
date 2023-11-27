import { useDispatch, useSelector } from 'react-redux';
import { showView } from '../store/candidate/candidateSlice';


export const useCandidateStore = () => {

    const { status, view, candidates, errorMessage } = useSelector( state => state.candidate );
    const dispatch = useDispatch();

    const startActiveView = (currentView) => {
        dispatch( showView({view:currentView}) );
    }

    return {
        //* Propiedades
        errorMessage,
        status, 
        view,
        candidates, 

        //* Métodos
        startActiveView,
    }

}