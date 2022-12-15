import ButtonCard from '../../../components/ButtonCard';
import CardHome from '../../../components/CardHome';
import './styles.css';

export default function HomeIndex() {
  return (
    <main>
      <section className='card-home-index-content'>
        <div className='container'>
          <CardHome title="Desafio GitHub" subtitle="DevSuperior - Escola de Programação" />
        </div>
        <div className='container btn-container'>
          <ButtonCard titleBtn='Começar' />
        </div>

      </section>
    </main>
  );
}