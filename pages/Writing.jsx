import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function Writing() {
  return (<div className='body2'>
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
    <div className='overall'>
    <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Writing<br/></h1>
    <p>A writer creates material for visual media. For television, advertisements, video games, feature films, short films, and other media, they compose screenplays. A script`&apos;`s dialogue, characters, and plot are created by them.</p>
    <h4>Career in Writing</h4>
    <p>Screenwriting is one of the most lucrative career in the recent times and hence the film city is seeing a rapid growth in the number of people trying to get a grasp in this field. Screenwriting is an art which requires imagination, every decision made by them can completely
      change how the audience feel the emotions and how they interpret it. Students at Placing Dreams get to make short films international festivals and from students get to learn a lot and experiment with their skills, which also helps themi dentify what they are good at. The mind 
      of a writer should be able to imagine and process the sweet-n-sour juices of our daily life on all the levels, that's why the students are provided with the right exercises to develop the skill of imagination. They are taught how they can use their creativity to convert the 
      beautiful and colorful cloud of ideas in their head into a well structured masterpiece. 
       The syllabus followed at the institute is handcrafted by the experts in the industry and tries to shed light on all the dark corners which might be left in the courses by other institutions.</p>
      <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Syllabus<br/><br/></h1>
    <Image src="/features/writing.jpg" alt="" width="700" height="350" />
    <p><br/>- WHAT IS A SCREENPLAY?<br/><br/>
- AN OVERVIEW OF CREATIVE WRITING
PROCESS<br/><br/>
- THREE ACT STORY STRUCTURE<br/><br/>
- THE PREMISE, SYNOPSIS, SCRIPT, SHOOTING
SCRIPT,STORYBOARD<br/><br/>
- DRAMA & DRAMATIC SITUATION<br/><br/>
- UNDERSTANDING CHARACTER & CHARACTER’S ARC<br/><br/>
- A CHARACTER’S BACKSTORY<br/><br/>
- THE HERO’S JOURNEY<br/><br/>
- WRITING A SCENE<br/><br/>
- GENRE IN FILMS<br/><br/>
- THE STORY MAP<br/><br/>
- THE SCREENPLAY `BEAT SHEET’<br/><br/>
- EXPOSITION<br/><br/>
- PLOTS and SUBPLOTS<br/><br/>
- FEATURE FILM STRUCTURE<br/><br/>
-WRITING FOR TV, FILM, WEB<br/><br/>
-WRITING DAILOUGES<br/><br/>
- SCRIPT EDITING: THE SCENE-BY-SCENE 
SCRIPTANALYSIS<br/><br/>
-UNDERSTANDING FILM CREW & COMPLETE
FILMPROCESS<br/><br/>
-WRITING FOR LOW BUDGET MOVIE<br/><br/>
- SCREENWRITING SOFTWARE<br/><br/>
- PITCHING YOUR SCRIPT<br/><br/></p>
</div>
</div>
  )
}

export default Writing