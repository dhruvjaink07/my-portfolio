import '../social.css'
import Gmail from '../assets/gmail.png'
import Linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import X from '../assets/twitter.png'
import Insta from '../assets/instagram.png'

const Social = ()=>{
    return(
        <div className='container2'>
            <h2 className='contact'>
                Contact Me
            </h2>
            <div className="row">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dhruvkishorjain2508@gmail.com" className='links'>
                <img src={Gmail} alt="" height={"50px"}/>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-jain-0ab564251/https://www.linkedin.com/in/dhruv-jain-0ab564251/" className='links'>
                <img src={Linkedin} alt="" height={"50px"}/>
            </a>
            <a href="https://github.com/dhruvjaink07" className='links'>
                <img src={github} alt="" height={"50px"}/>
            </a>
            <a href="https://twitter.com/djain007" className='links'>
                <img src={X} alt="" height={"50px"}/>
            </a>
            <a href="https://www.instagram.com/dhruvjaink/" className='links'>
                <img src={Insta} alt="" height={"50px"}/>
            </a>
            </div>
        </div>
    );
}

export default Social;