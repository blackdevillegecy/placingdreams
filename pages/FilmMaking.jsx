import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function FilmMaking() {
  return (
    <div className='overall'>
      <div style={{display: 'flex'}}>
    <Link href="/"><ArrowBackIcon style={{marginTop: '2vh', marginLeft: '2vh', color: 'white'}} /></Link>
    <div className="course_nav">
      <Link href="\Acting"><div className="courses_btn">Acting</div></Link>
      <Link href="\Writing"><div className="courses_btn">Writing</div></Link>
      <Link href="\Editing"><div className="courses_btn">Video Editing</div></Link>
      <Link href="\Direction"><div className="courses_btn">Direction</div></Link>
      <Link href="\FilmMaking"><div className="courses_btn">Film Making</div></Link>
    </div>
    </div>
       <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Film Making<br/><br/></h1>
       <Image src="/features/direction.jpeg" alt="" width="700" height="350" />
                                   
    </div>
  );
}

export default FilmMaking;
