import ButtonCard from '../../../components/ButtonCard';
import './styles.css';

export default function HomeResult() {
  return (
    <>
      <section className='container-buscar-section'>
        <div className='container-card mr-top-card'>
          <h2 className='mr-bottom'>Encontre um perfil Github</h2>
          <form action="">
            <div>
              <input type="text" />
            </div>

          </form>
          <div className='btn-container mr-top'>
            <ButtonCard titleBtn='Encontrar' />
          </div>
        </div>
      </section>
    </>
  );
}