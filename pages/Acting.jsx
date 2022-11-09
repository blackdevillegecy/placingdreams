import Image from 'next/image'

function Acting() {
  return (<div className='body2'>
    <div className='overall'>
    <h1 className="main" style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Acting<br/><br/></h1>
      <p>An Actor`&apos;`s job is to convey a feeling from the screen to the audience in a way that the audience feel a sense of connection with the character, be it positive or negative. To perfect their craft an actor requires the knowledge of human psychology, physiology and emotions.</p><br/><br/>

      <h4>Career in Acting</h4>
      <p>Most of the people who come to the city of mumbai initially start with acting. Acting is a highly competative field and hence, the stakes are high, but, one should not get disheartned by this as with the exponential growth of the film industry 
      there are new opportunities bubbling up everywhere. There auditions going everywhere in the city, so, the real job for an actor is to be best version of themselves and there success will be inevitable. To perfect their art, an actor need to put a lot
      of sweat and hours, thats where the difference can be observed between the people who `&apos;`WANT`&apos;` it and the ones who `&quot;`GET`&quot;` it.

      Students of Placing Dreams get the best possible training from the best people in the field. Nearly every student from the institute get to start with a project from recognsed media houses. The opportunities are plenty, all one need is dedication and hard work.
      </p>
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
