import { useDispatch, useSelector } from 'react-redux';
import {
  showView,
  selectCandidate /*clearErrorMessages*/,
} from '../store/company/companySlice';

export const useCompanyStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  const startActiveView = (newView) => {
    dispatch(showView({ view: newView }));
  };

  const startSelectCandidate = (idCandidate) => {
    dispatch(selectCandidate({ idCandidate }));
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    startActiveView,
    startSelectCandidate,
  };
};
