import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
   <>
    <div className='home' id="home">
        <main>
            <h1>Arijit</h1>
            <p>Solution For All Your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non 
            quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit 
            optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who We Are?</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non 
            quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit 
            optio amet ab temporibus asperiores quasi cupiditate. Voluptatum 
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div
                    style={{
                        animationDelay : "0.5s",
                    }}
                >
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div
                    style={{
                        animationDelay : "0.5s",
                    }}
                >
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div
                    style={{
                        animationDelay : "0.7s",
                    }}
                >
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div
                    style={{
                        animationDelay : "1s",
                    }}
                >
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>

            </article>
        </div>
    </div>


   </>
  )
}

export default Home