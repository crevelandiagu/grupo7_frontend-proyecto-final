import { CompanyLayout } from '../layout/CompanyLayout';
import { CompanyDashboard, Project } from '../views';

export const Company = () => {
  return (
    <CompanyLayout>
      <CompanyDashboard/>
      <Project />
    </CompanyLayout>
  )
}