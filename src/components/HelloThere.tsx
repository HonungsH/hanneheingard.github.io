import {Container, Row, Col, Button, Tooltip, OverlayTrigger} from "react-bootstrap";
import styled from "styled-components";
import "./HelloThere.css"
import TooltipButton from "./TooltipButton";

// Style for Column
const HelloThereCol = styled(Col)<{}>`
    border-radius: 5px;
    
`;

const HelloThereRow = styled(Row)<{}>`
    padding: 20px;
    background-color: var(--secondary-bg-color);
`;
//${(props) => props.bgColor}
const Image = styled.img`
    width: 100%; // Makes the image responsive
    //max-width: 500px; // Limits the max size
    height: auto; // Maintains aspect ratio
    border-radius: 5px;
    padding: 2em;
`;

const HelloThere: React.FC = () => {
    return (
        <div id="aboutmediv">
        <Container>
            <HelloThereRow>
                <HelloThereCol md={6} xs={12}>
                    <Image
                        src=""  // image URL
                        alt="Hanne"
                    />
                </HelloThereCol>
                <HelloThereCol md={6} xs={12}>

                    <h1 style={{textAlign: "left"}}>Hej!</h1>
                    <p className="aboutmetext">My name is Hanne Heingård and I'm an experienced software developer with
                        an interest in web development and JavaScript.
                    </p>
                    <p className="aboutmetext">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p className="aboutmetext">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

        {/*            <div className="d-flex justify-content-start mt-4">
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="tooltip-button">Click to know more!</Tooltip>}
                        >
                            <Button variant="primary">More Info</Button>
                        </OverlayTrigger>
                    </div>*/}
                    <TooltipButton onClick={() => console.log("Navigating to Hanne")} label={"LinkedIn"} tooltipText={"Linkedin"} icon={"linkedin"} ></TooltipButton>
                    <TooltipButton label={"GitHub"} tooltipText={"GitHub"} icon={"github"}></TooltipButton>
                    <TooltipButton label={"CV"} tooltipText={"CV"} icon={"readme"}></TooltipButton>
                </HelloThereCol>
            </HelloThereRow>



        </Container>
        </div>
    );
};

export default HelloThere;