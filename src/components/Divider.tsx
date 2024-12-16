import styled from "styled-components";

const StyledDivider = styled.hr<{ borderColor: string, width: number }>`
    width: ${(props) => props.width}%;
    height: 2px;
    border-width: 2px;
    border-color: ${(props) => props.borderColor};
    margin: 10px auto;
    margin-bottom: 20px;
`;

export interface DividerProps {
    color?: string;
    width?: number;
}

const Divider: React.FC<DividerProps> = ({color= "white", width= 100}) => {
    return (
        <StyledDivider borderColor={color} width={width}/>
    );
};

export default Divider;