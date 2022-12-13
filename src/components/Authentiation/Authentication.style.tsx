import Styled from "styled-components";
import { Button } from "@mui/material";
export const CustomeButton = Styled(Button)`
background: #212B36 !important;
border-radius: 8px !important;
height: 40px !important;
width: 92px !important;
border-radius: 8px !important;
font-style: normal !important;
font-weight: 400 !important;
font-size: 14px !important;
color: #FFFFFF !important;
text-transform: capitalize !important;

`;
interface propsButton{
    isDisabled: boolean
}
export const CustomeButton2 = Styled(Button)<propsButton>`
background:${(props)=>props.isDisabled?'grey !important;':'#212B36 !important;'} 
border-radius: 8px !important;
height: 40px !important;
width: 92px !important;
border-radius: 8px !important;
font-style: normal !important;
font-weight: 400 !important;
font-size: 14px !important;
color: #FFFFFF !important;
text-transform: capitalize !important;


`;
export const Wrapper = Styled.div`
display:flex;
align-items: center;
height: 100vh !important;
justify-content: center;
`;
export const ModalWrapper = Styled.div`
height: 100%;
    padding: 25px;
`;
export const CloseIconWrapper = Styled.div`
display:flex;
justify-content: end;
:hover{
    cursor: pointer;
}
`;
export const HeaderFont = Styled.div`
font-style: normal;
font-weight: 400;
font-size: 32px;
text-align: center;
color: #212121;
margin-bottom:6.5rem;
margin-top:2rem;
`;
export const MainWrapper = Styled.div`
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    row-gap:34px;
`;
export const SignUpButton = Styled(Button)`
height: 48px !important;
width: 200px !important;
border-radius: 8px !important;
border: 1px solid #212121 !important;
border-radius: 8px !important;
font-weight: 400 !important;
font-size: 14px !important;
line-height: 20px !important;
color: #212121 !important;
text-transform:capitalize !important;
display: flex !important;
    align-items: center !important;
    column-gap: 10px !important;

`;
export const ButtonWrapper = Styled.div`
 display:flex;
 flex-direction: column;
 row-gap: 1rem;
justify-content:center;
width: 100%;
align-items: center;
`;
export const TextDiv = Styled.div`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
display: flex;
column-gap: 2px;
text-align: center;
margin-bottom: 4rem;
color: #212121;
`;
export const BoldText = Styled.div`
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
/* identical to box height */

text-align: center;

color: #1A8917;
:hover{
    cursor:pointer;
}
`;

export const TermsText = Styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;
display: flex;
column-gap: 5px;
color: #757575;

`;
export const UndlerLine = Styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;

color: #757575;
text-decoration: underline;
`;
interface isProps {
  isError: boolean;
}
export const EmailInput = Styled.input<isProps>`
font-family: "Montserrat", sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1em;
    box-sizing: border-box;
    padding-bottom: 5px;
    border-bottom: ${(props) =>
      props.isError ? "2px solid #FF5630;" : "2px solid #797979;"}
    text-align: center;
    width: 352px;
`;
export const EmailForm = Styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    
`;
export const FeeBackText = Styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

text-align: center;

/* Error/Main */
margin-top:5px;
color: #FF5630;
`;
export const BootomNavigation = Styled.div`
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */

text-align: center;

color: #1A8917;
display:flex;
align-items: center;
column-gap:10px;
margin-top:1rem;
:hover{
    cursor:pointer;
}
`;

export const FinalMessage = Styled.div`

font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
width:8rem;
text-align: center;
margin-bottom: 4rem;
color: #212121;
width:18rem;
`;
