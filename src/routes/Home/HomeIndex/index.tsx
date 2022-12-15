import CardHome from '../../../components/CardHome';
import './styles.css';

export default function HomeIndex() {
  return (
    <main>
      <section className='card-home-index-content'>
        <div className='container'>
          <CardHome title="Desafio GitHub" subtitle="DevSuperior - Escola de Programação" />
        </div>
      </section>
    </main>
  );
}