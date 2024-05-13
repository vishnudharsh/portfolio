import { Col, Container, Row } from "react-bootstrap";
import Header from "./header";
import { SiHackster } from "react-icons/si";
import '../css/about.css';

function About(){
    return(
        <>
        <Header />
        <h6 style={{marginTop:"15px",color:"#ffff",fontWeight:"bold"}}><SiHackster className="hackers" />acking</h6>
        <Container style={{color:"#ffff"}}>
        <h2 style={{marginTop:"70px"}}>About Me</h2>
            <Row style={{marginTop:"90px"}}>
                <Col lg={5}>
                    <p>Who am I?</p>
                </Col>
                <Col lg={6}>
                    <p>A simple portfolio template for developer/designers built with React. A simple portfolio template for developer/designers built with React. A simple portfolio template for developer/designers built with React.</p>
                </Col>
            </Row>
            <Row style={{marginTop:"90px"}}>
                <Col lg={5}>
                    <p>Work Timeline</p>
                </Col>
                <Col lg={6}>
                    <table className="table">
                        <tr>
                            <td className="td">Example 1</td>
                            <td className="td">Meta</td>
                            <td className="td">2023</td>
                        </tr>
                        <tr>
                            <td className="td">Example 2</td>
                            <td className="td">Google</td>
                            <td className="td">2022</td>
                        </tr>
                        <tr>
                            <td className="td">Example 3</td>
                            <td className="td">Microsoft</td>
                            <td className="td">2021</td>
                        </tr>
                    </table>
                </Col>
            </Row>
            <Row style={{marginTop:"90px"}}>
                <Col lg={5}>
                    <p>Skills</p>
                </Col>
                <Col lg={6}>
                    <div style={{marginBottom:"70px"}}>
                    <div className="about_btn me-3">Python</div>
                    <div className="about_btn me-3">C</div>
                    <div className="about_btn me-3">Java</div>
                    <div className="about_btn me-3 mt-4">Bash</div>
                    <div className="about_btn me-3 mt-4">Powershell</div>
                    <div className="about_btn me-3 mt-4">Reverse Engineering</div>
                    <div className="about_btn me-3 mt-4">Web-Exploitation</div>
                    <div className="about_btn me-3 mt-4">Network Exploitation</div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default About;