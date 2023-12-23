import '../projects.css'
import netflix from '../assets/netflix.png';
import news from '../assets/news.png'
import musicPLayer from '../assets/music.png'
import bank from '../assets/bank.png'

const Projects = () => {
    return (
        <div className="box">
            <h1 className="headpro">
                Projects
            </h1>
            <div className="projects">

                <a className="project" href='https://github.com/dhruvjaink07/netflix-clone-react'>
                    <div className="display-project-data">
                        <img src={netflix} alt="" />
                        <p className='title'>Netflix clone</p>
                    </div>
                </a>
                <a className="project bgWhite" href='https://github.com/dhruvjaink07/news_app-react'>
                    <div className="display-project-data">
                        <img src={news} alt="" />
                        <p className='title'>NewsMonkey - ReactJS</p>
                    </div>
                </a>
                <a className="project" href='https://github.com/dhruvjaink07/android-MusicPlayer'>
                    <div className="display-project-data">
                        <img src={musicPLayer} alt="" />
                        <p className='title'>Music Player</p>
                    </div>
                </a>
                <a className="project bgWhite" href='https://github.com/dhruvjaink07/Bank-Project-C-'>
                    <div className="display-project-data">
                        <img src={bank} alt=""  />
                        <p className='title'>Bank Operation</p>
                    </div>
                </a>

            </div>
        </div>

    )
}

export default Projects;
