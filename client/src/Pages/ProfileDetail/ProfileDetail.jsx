import './Index.css'
const ProfileDetail=()=>{
    return(
        <div className="detail-wrapper">
            <div className="developer-profile">
                <div className="image-wrapper">
                    <img src="/assets/profile1.jpg"/>
                </div>
                <h1>Brad Traversy</h1>
                <p>Instructor at Traversy Media</p>
                <span>Buston, MA</span>
            </div>
            <div className='bio-skills'>
                <div className='section1'>
                <h2 className='headings'>Brads Bio</h2>
                <p>I a senior developer and instructor for traverys media</p>
                </div>
                <div className='section2'>
                    <h2 className='headings'>Skill Set</h2>
                    <div className='skilset'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                    <span>PHP</span>
                    <span>Ruby</span>
                    </div>
                </div>
                
            </div>


            <div className='exp-edu'>
                <div className='experience'>
                    <div className='exp'>
                        <h2 className='headings'>Experience</h2>
                        <h3>Tech Guy Web Solutions</h3>
                        <span>01/2/24</span> <span>- 09/02/26</span>
                        <span>Position: Web Developer</span>
                        <span>Description: Full Stack Developer</span>
                    </div>
                    <div className='exp'>
                        <h2 className='headings'>Experience</h2>
                        <h3>Tech Guy Web Solutions</h3>
                        <span>01/2/24</span> <span>- 09/02/26</span>
                        <span>Position: Web Developer</span>
                        <span>Description: Full Stack Developer</span>
                    </div>
                </div>
                <div className='education'>
                    <div className='edu'>
                    <h2 className='headings'>Education</h2>
                        <h3>Tech Guy Web Solutions</h3>
                        <span>01/2/24</span> <span>- 09/02/26</span>
                        <span>Position: Web Developer</span>
                        <span>Description: Full Stack Developer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail