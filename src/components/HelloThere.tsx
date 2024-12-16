import {Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";
import "./HelloThere.css"

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
                        src="page_hanne.jpg"  // image URL
                        alt="Hanne"
                    />
                </HelloThereCol>
                <HelloThereCol md={6} xs={12}>

                    <h1 style={{textAlign:"left"}}>Hej!</h1>
                    <p className="aboutmetext">My name is Hanne Heingård and I'm an experienced software developer with an interest in web development and JavaScript.
                    </p>
                    <p className="aboutmetext">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p className="aboutmetext">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </HelloThereCol>
            </HelloThereRow>
        </Container>
        </div>
    );
};

export default HelloThere;