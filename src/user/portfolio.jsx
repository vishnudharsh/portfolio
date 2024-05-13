import gallery1 from '../images/fireworks-1880045_1280.jpg';
import gallery2 from '../images/woman-8035746_1280.jpg';
import gallery3 from '../images/daughter-8318355_1280.jpg';
import gallery4 from '../images/bird-8336583_1280.jpg';
import gallery5 from '../images/cable-car-8357177_1280.jpg';
import gallery6 from '../images/christmas-8444992_1280.png';
import gallery7 from '../images/christmas-balls-8449616_1280.jpg';
import gallery8 from '../images/peacock-8440548_1280.jpg';
import gallery9 from '../images/eagle-8262555_1280.jpg';
import gallery10 from '../images/woman-8035746_1280.jpg';
import { SiHackster } from "react-icons/si";
import Header from './header';
import '../css/portfolio.css';

function Portfolio(){
    return(
        <>
        <Header />
        <h6 style={{marginTop:"15px",color:"#ffff",marginLeft:"10px",fontWeight:"bold"}}><SiHackster className='hackers' />acking</h6>
        <div class="grid-container" style={{marginTop:"90px"}}>
        <div>
            <img class='grid-item grid-item-1' src={gallery1} alt='' />
            <p>"I'm so happy today!"</p>
        </div>
        <div>
            <img class='grid-item grid-item-2' src={gallery2} alt='' />
            <p>"I see those nugs."</p>
        </div>
        <div>
            <img class='grid-item grid-item-3' src={gallery3} alt='' />
            <p>"I love you so much!"</p>
        </div>
        <div>
            <img class='grid-item grid-item-4' src={gallery4} alt='' />
            <p>"I'm the baby of the house!"</p>
        </div>
        <div>
            <img class='grid-item grid-item-5' src={gallery5} alt='' />
            <p>"Are you gunna throw the ball?"</p>
        </div>
        <div>
            <img class='grid-item grid-item-6' src={gallery6} alt='' />
            <p>"C'mon friend!"</p>
        </div>
        <div>
            <img class='grid-item grid-item-7' src={gallery7} alt='' />
            <p>"A rose for mommy!"</p>
        </div>
        <div>
            <img class='grid-item grid-item-8' src={gallery8} alt='' />
            <p>"You gunna finish that?"</p>
        </div>
        <div>
            <img class='grid-item grid-item-9' src={gallery9} alt='' />
            <p>"We can't afford a cat!"</p>
        </div>
        <div>
            <img class='grid-item grid-item-10' src={gallery10} alt='' />
            <p>"Dis my fren!"</p>
        </div>
        </div>
        </>
    )
}
export default Portfolio;