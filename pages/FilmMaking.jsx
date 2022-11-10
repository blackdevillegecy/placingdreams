import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function FilmMaking() {
  return (
    <div className='overall'>
      <Link href="/"><ArrowBackIcon style={{marginTop: '2vh', marginLeft: '2vh', color: 'white'}} /></Link>
       <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Film Making<br/><br/></h1>
       <Image src="/features/direction.jpeg" alt="" width="700" height="350" />
                                   
    </div>
  );
}

export default FilmMaking;
