import './styles.css'; 

type Props = {
  titleBtn: string;
}

export default function ButtonCard({ titleBtn }: Props) {
  return (
    <div className='btn'>
      {titleBtn}
    </div>
  ); 
}