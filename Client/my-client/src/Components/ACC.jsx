import Accordion from 'react-bootstrap/Accordion';
import './ACC.css'
function ACC() {
  return (
    
   <>
   <br /><br />
   <h3 style={{color:"whitesmoke"}}>Frequently Asked question</h3><br />
    <Accordion >
      <Accordion.Item eventKey="0" id='ACC-A'>
        <Accordion.Header >How do i get started with Codify ?</Accordion.Header>
        <Accordion.Body style={{color:"whitesmoke"}}>
          It’s easy. Sign up for a free account, explore our Courses, Practice problems, and Contests, and begin with a beginner-friendly challenge. Our community and AI Mentor are here to help along the way.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Whats difference between paid and free Course</Accordion.Header>
        <Accordion.Body style={{color:"whitesmoke"}}>
         Free courses give you essential lessons, practice problems, and community support. Premium courses offer advanced tutorials, real-time AI doubt resolution, personalized learning paths, and projects to help prepare you for in-demand industry roles.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do i Code in the Codify?</Accordion.Header>
        <Accordion.Body style={{color:"whitesmoke"}}>
         By clicking on Code option in the above given section of the Website.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   </>
  );
}

export default ACC;