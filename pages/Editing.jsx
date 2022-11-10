import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function Editing() {
  return (
    <div className='body2'>
      <Link href="/"><ArrowBackIcon style={{marginTop: '2vh', marginLeft: '2vh', color: 'white'}} /></Link>
    <div className='overall'>
    <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Film Editing<br/><br/></h1>
      <p>The person who brings a movie or television show to life is a film editor. The story, tone, and overall impact of a movie are all shaped by the editor just as much as they are by the director or author. Because of this, talented editors are in high demand in the movie business.</p>
      <h4>Career in Film Editing</h4>
      <p>The current focus on content creation have made the demand for video editors to be more than ever before. The job of an editor is complex and demanding. Despite the fierce competition, there are many chances in the area, particularly in India. In addition to production companies, news outlets, movie studios, and numerous businesses hire video editors. Strong abilities are necessary to survive the competition in a highly rewarding profession like video editing.
        At Placing Dreams, every student and nurtured to become the best version of themselves and are expected to become the best in the industry. Students get several opportunities to work as interns for big production houses and get a secure job in this field.
      </p>
      <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Syllabus<br/><br/></h1>
      <Image src="/features/editing.jpeg" alt="" width="700" height="350" />
      <p>1. WHAT ‘EDITING’ IS?<br/><br/>
2.HISTORY OF CINEMA & EDITING<br/><br/>
3. ROLE OF EDITOR IN A FILM CREW<br/><br/>
4. BASIC PRINCIPLES OF EDITING<br/><br/>
5. TYPES OF EDITING<br/><br/>
6.INTRODUCTION TO EDITING <br/><br/>
SOFTWARES -PREMIERE PRO, FCP,
AVID, RESOLVE
7.ORGANIZING PROJECTS, MEDIA MANAGEMENT<br/><br/>
8. BASICS OF TRANSITION & FILTERS<br/><br/>
9. BASICS OFKEY-FRAMING, TITLING & GRAPHICS<br/><br/>
10. WORKING WITH AUDIO<br/><br/>
11. BASICS OF COLOR CORRECTION<br/><br/>
12. EXPORTING PROJECT FOR THE FILM, TV, 
WEB &DVD<br/><br/>
13. COMPLETE DIGITAL WORKFLOW<br/><br/>
(POST-PRODUCTION)
14. GENRE EDITING SKILLS - ACTION, DIALOG, 
COMEDY& MUSIC<br/><br/>
15. EDITING FOR DOCUMENTARIES, AD-FILMS,CORPORATE VIDEOS ETC.<br/><br/>
16. ADAVNCED EDITING SKILLS.<br/><br/>
SHORT FILM – FINAL FILM<br/><br/>
Short Film will be a joint effort of all the 
students inguidance of a mentor.<br/><br/>
* EVALUATION (After Completing ‘SHORT
FILM’)</p>

    </div>
    </div>
  );
}

export default Editing;
