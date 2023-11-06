import { useDispatch, useSelector } from 'react-redux';
import { candidateApi }  from '../api';
import { showView, saveProfile, updateProfile } from '../store/candidate/candidateSlice';


export const useCandidateStore = () => {

    const { status, view, candidates, errorMessage } = useSelector( state => state.candidate );
    const dispatch = useDispatch();

    const startActiveView = (currentView) => {
        dispatch( showView({view:currentView}) );
    }

    const startSaveProfile = async (profile) => {
        // try {
        //     const { data } = await candidateApi.post(`/profile/basicinfo/${profile.id}`, profile);
        // } catch (error) {
        //     console.log('error', error);
        // }
        
        
        const existingCandidate = candidates.find(
            (candidate) => candidate.id === profile.id
        );

           
        if (existingCandidate) {
            const updateCandidate = candidates.map((candidate) => {
                if (candidate.id === profile.id) {
                    return {
                        ...candidate,
                        ...profile,
                    };
                }
            });
        
        } else {
            dispatch( saveProfile({candidate:profile}) );
        }
    }

    return {
        //* Propiedades
        errorMessage,
        status, 
        view,
        candidates, 

        //* Métodos
        startActiveView,
        startSaveProfile,
    }

}