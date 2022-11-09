import Image from 'next/image'

function FilmMaking() {
  return (
    <div className='overall'>
       <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Film Making<br/><br/></h1>
       <Image src="/features/direction.jpeg" alt="" width="700" height="350" />
                                   
    </div>
  );
}

export default FilmMaking;
