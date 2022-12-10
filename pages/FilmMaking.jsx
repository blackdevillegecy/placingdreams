import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function FilmMaking() {
  return (
    <div className='overall'>
      <div style={{display: 'flex'}}>
    <Link href="\Course"><ArrowBackIcon style={{marginTop: '2vh', marginLeft: '2vh', color: 'white'}} /></Link>
    <div className="course_nav">
      <Link href="\Acting"><div className="courses_btn">Acting</div></Link>
      <Link href="\Writing"><div className="courses_btn">Writing</div></Link>
      <Link href="\Editing"><div className="courses_btn">Video Editing</div></Link>
      <Link href="\Direction"><div className="courses_btn">Direction</div></Link>
      <Link href="\FilmMaking"><div className="courses_btn">Film Making</div></Link>
    </div>
    </div>
       <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Film Making<br/><br/></h1>
      <br/><br/>
      <h4> A Peek into the Film Making Course</h4>
      <p>Film Making is a perfect soup which has the flavor of all other courses in the right amount. Students are taught about acting and all the technicalities related to the art, Then the course also focuses on the way of direction and the study of the job in detail
        The course will also take a dive in the fields of writing and editing, hence, covering all the ingredients required to create the next masterpiece for the world to see. By taking this course a student can expect to be well versed in the ins and outs of the industry and along with the knowledge
        they will also be gaining practical knowledge through different on-site internships focusing on the actual workflow and the way tasks are handeled on the ground level.
      </p>
       <Image src="/features/direction.jpeg" alt="" width="700" height="350" />
                                   
    </div>
  );
}

export default FilmMaking;
