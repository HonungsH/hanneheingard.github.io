import React from 'react';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLinkedin, faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {LinksConfig} from "../LinksConfig";

// Add the icon to the library
library.add(faLinkedin, faGithub, faReadme);

interface ButtonProps {
    label: string;
    tooltipText: string;
    icon: IconName;
    hrefKey: keyof typeof LinksConfig;
    onClick?: () => void;
}

const TooltipButton: React.FC<ButtonProps> = ({label, tooltipText, icon, hrefKey, onClick}) => {
    const href = LinksConfig[hrefKey];

    return (
        <OverlayTrigger
            placement="bottom" // Positions the tooltip above the button
            overlay={
                <Tooltip id="button-tooltip" className="custom-tooltip">
                    {tooltipText}
                </Tooltip>
            }
        >
            <Button className="mx-2" variant="secondary" size="lg" onClick={onClick || (() => console.log(`Navigating to ${href}`))}
                    href={href} target="_blank">
                <FontAwesomeIcon icon={["fab", icon]} className="" size="2x"/>
            </Button>
        </OverlayTrigger>
    );
};


export default TooltipButton;