import { Col, Container, Image, Row } from "react-bootstrap";
import mainimage from '../images/bg9.5.jpg';
import Header from "./header";
import '../css/profile.css';
import { useLocation, useNavigate } from "react-router-dom";
import { SiHackster } from "react-icons/si";

function Profile(){
    const username=sessionStorage.getItem('username');
    const navigate=useNavigate();
    function handleClick(){
        navigate("/about")
    }
    function clickIn(){
        navigate("/contact")
    }
    return(
        <>
        <div className="main_icon">
        <Header />
        </div>
        <Container fluid>
            <Row className="main_section">
                <Col lg={5}>
                    <div className="first_section">
                    <h6 style={{marginTop:"15px",fontWeight:"bold"}}><SiHackster className="hackers"/>acking</h6>
                    <h4 style={{marginTop:"200px",marginLeft:"90px"}}>Hi I'am {username}</h4>
                    <div className="typing-slider">
                    <h5>Ethical Hac</h5>
                    <h5>Zsociety Founder & President</h5>
                    <h5>Technologist</h5>
                    </div>
                    <p style={{marginTop:"40px",marginLeft:"90px"}}>Dedicated technology enthusiast with an curiosity for unraveling the complexities of our digital world</p>
                    <div>
                    <button class="glow-on-hover" type="button" style={{marginTop:"10px",marginLeft:"90px"}}>Projects</button>
                    <button class="glow-on-hover" type="button" style={{marginLeft:"10px"}} onClick={handleClick}>About Me</button>
                    <button class="glow-on-hover" type="button" style={{marginLeft:"10px"}} onClick={clickIn}>Contact Me</button>
                    </div>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="img_section">
                    <Image src={mainimage} className="w-100" style={{marginLeft:"11px"}} />
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Profile;