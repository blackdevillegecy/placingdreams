import Image from 'next/image'

function Acting() {
  return (<div className='body2'>
    <div className='overall'>
      <p></p>
      <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Acting Syllabus<br/><br/></h1>
      <Image src="/features/acting.jpeg" alt ='' width="700" height="350" />
      <h4> Module 1</h4>
      <p>Awareness <br/><br/>
        Imagination<br/><br/>
        Sense Memory<br/><br/>
        Improvisation Basics<br/><br/>
        Relationship Building<br/><br/>
        Imagination Advance<br/><br/>
        Improvisation Advance<br/><br/></p>
        <h4> Module 2</h4>
      <p>Character Analysis<br/><br/>
          Performance Analysis<br/><br/>
          Play Back<br/><br/>
          Diction<br/><br/>
          Monolouge<br/><br/>
          Scene Work<br/><br/></p>
          <h4> Module 3</h4>
          <p>
          Camera Awarness<br/><br/>
Basic of Audition<br/><br/>
Audition Analysis<br/><br/>
Preparation Of Audition<br/><br/>
Audition Performance<br/><br/>
How to make Self test<br/><br/>
          </p>
    </div>
    </div>
  );
}

export default Acting;
