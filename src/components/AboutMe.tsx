import {Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import Divider from "./Divider";

const Timeline = styled.div`
    position: relative;
    padding-left: 30px;
    margin-left: 20px;
    //border-left: 2px solid #fff; /* Vertical line */
`;

const TimelineItem = styled.div`
    position: relative;
    margin-bottom: 25px;
    padding-top: 10px;
`;

const Connector = styled.div`
  position: absolute;
  top: 25px; /* Starts below the dot */
  left: -5px; /* Aligns with the center of the dot */
  width: 2px; /* Thickness of the connector line */
  height: calc(100% - 2px); /* Dynamic height to connect to the next dot */
  background-color: #fff; /* Same color as the vertical line */
  z-index: 1; /* Places the connector below the dot */
`;

const Dot = styled.div<{ bgColor: string}>`
    position: absolute;
    top: 10px; /* Position relative to the TimelineItem */
    left: -12px; /* Aligns dot over the left line */
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-radius: 50%; /* Makes the dot circular */
    z-index: 2; /* Ensures dot is above the connector line */
    background-color: ${(props) => props.bgColor};
`;

const TimelineContent = styled.div`
  margin-left: 20px;
`;

export const FluidContainer = () => {
    return (
        <Container fluid>
        </Container>
    );
};

const AboutMe: React.FC = () => {
    return (
        <Container>
            <h1 className="" style={{marginBottom:"30px"}}>About Me</h1>
            <Divider/>
            <Row>
                <Col>
                    <h2 className="mb-4" style={{textAlign:"left"}}>Education</h2>
                </Col>
                <Col>
                    <h2 className="mb-4" style={{textAlign:"left"}}>Work experience</h2>
                    <Timeline>
                        {/* Timeline Item 1 */}
                        <TimelineItem>
                            <Dot bgColor=""/>
                            <Connector />
                            <TimelineContent>
                                <p><strong>Jan 2023 - Present</strong></p>
                                <p><strong>Netcompany A/S | Copenhagen, Denmark</strong></p>
                                <h5 className="jobTitle">Managing IT Consultant</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Timeline Item 2 */}
                        <TimelineItem>
                            <Dot bgColor="#fff"/>
                            <Connector />
                            <TimelineContent>
                                <p><strong>2021 - 2022</strong></p>
                                <p><strong>Netcompany A/S | Copenhagen, Denmark</strong></p>
                                <h5 className="jobTitle">Senior IT Consultant</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet.
                                </p>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Timeline Item 3 */}
                        <TimelineItem>
                            <Dot bgColor="#fff"/>
                            <Connector />
                            <TimelineContent>
                                <p><strong>2018 - 2020</strong></p>
                                <p><strong>Netcompany A/S | Copenhagen, Denmark</strong></p>
                                <h5 className="jobTitle">IT Consultant</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet.
                                </p>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;