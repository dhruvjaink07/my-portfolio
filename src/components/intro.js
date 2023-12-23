import '../intro.css';
import image from '../assets/dhruv7.jpg';
function Intro() {
  return (
    <div className='container'>
      <div className="profile">
        <div className="outline1">
            <div className="outline2">
            <img src={image} alt="" className='profile' />
            </div>
        </div>
      </div>
      <div className="intro">
        <h1 className=''>Hey! This is Dhruv Jain</h1>
        <h2>Frontend Developer..</h2>
        {/* <h3>Final Year CS Diploma Student</h3> */}

      </div>
    </div>
  );
}

export default Intro;
