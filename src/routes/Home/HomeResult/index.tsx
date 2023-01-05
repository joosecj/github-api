import { useState } from 'react';
import ButtonCard from '../../../components/ButtonCard';
import './styles.css';

type FormData = {
  firstDate: string;
}

export default function HomeResult() {
  const [formData, setFormData] = useState<FormData>({
    firstDate: '',
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFormData(formData);
    console.log(formData);
  }

  return (
    <>
      <section className='container-buscar-section'>
        <div className='container-card mr-top-card'>
          <h2 className='mr-bottom'>Encontre um perfil Github</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input id='inpt'
                name="firstDate"
                value={formData.firstDate}
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div className='btn-container mr-top'>
              <ButtonCard titleBtn='Encontrar' />
            </div>
          </form>

        </div>
      </section>
    </>
  );
}