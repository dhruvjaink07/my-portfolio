/* eslint-disable jsx-a11y/anchor-is-valid */
import '../social.css'
import Gmail from '../assets/gmail.svg'
import Linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import X from '../assets/twitter.svg'
import Insta from '../assets/instagram.svg'

const Social = ()=>{
    return(
        <div className='container2'>
            <h2 className='contact'>
                Contact Me
            </h2>
            <div class="card">
  <span>Social</span>
  <a class="social-link" href="https://www.linkedin.com/in/dhruv-jain-0ab564251/https://www.linkedin.com/in/dhruv-jain-0ab564251/">
    <img src={Linkedin} alt=""/>
  </a>
  <a class="social-link" href="https://github.com/dhruvjaink07">
   <img src={github} alt="" />
  </a>
  <a class="social-link" href="https://twitter.com/djain007">
    <img src={X} alt="" />
  </a>
  <a class="social-link" href="https://www.instagram.com/dhruvjaink/">
    <img src={Insta} alt="" />
  </a>
  <a class="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dhruvkishorjain2508@gmail.com">
    <img src={Gmail} alt="" />
  </a>
</div>
        </div>
    );
}

export default Social;