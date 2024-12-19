import React from 'react';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLinkedin, faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icon to the library
library.add(faLinkedin, faGithub, faReadme);

interface ButtonProps {
    label: string;
    tooltipText: string;
    icon: IconName;
    onClick?: () => void;
}

const TooltipButton: React.FC<ButtonProps> = ({label, tooltipText, icon, onClick}) => {
    return (
        <OverlayTrigger
            placement="top" // Positions the tooltip above the button
            overlay={
                <Tooltip id="button-tooltip">
                    {tooltipText}
                </Tooltip>
            }
        >
            <Button className="mx-2" variant="primary" onClick={onClick || (() => console.log("Navigating to Example.com"))}
                    href="https://www.linkedin.com" target="_blank">
                <FontAwesomeIcon icon={["fab", icon]} className="" />

            </Button>
        </OverlayTrigger>
    );
};


export default TooltipButton;