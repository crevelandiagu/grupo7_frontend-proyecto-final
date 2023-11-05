import { useCompanyStore } from '../../hooks';
import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, CreateEmployeeAccount, CreateInterview, Project, Search } from '../views';

export const Company = () => {

 const { view } = useCompanyStore();

  return (
    
    <CompanyLayout>
      <CompanyDashboard/>
    </CompanyLayout>
  )
}