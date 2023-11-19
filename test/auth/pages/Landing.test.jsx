import { render } from "@testing-library/react";
import { Landing } from "../../../src/auth/pages/Landing";
import { getEnvCandidate, getEnvCompany, getEnvProjects } from '../../../src/helpers/getEnvVaribles';

describe('Landing', () => {
  test('should render', () => {
    const { container } = render(<Landing />)
    expect(container).toMatchSnapshot();
  })

  test('Debe mostrar la imagen con el URL y el ALT indicado', ()=>{
    render(<Landing />)
    const { alt } = screen.getByRole('img');
    expect(alt).toBe("");
    
  });
})




















