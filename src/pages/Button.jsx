import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid lightblue;
border-color:${props => props.cart ? "#8B8000" :"lightblue"};
border-radius:0.5rem;
color:${props => props.cart ? "#8B8000" : "lightblue"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? "#8B8000" : "lightblue"};
    color: blue;
}
:focus{
    outline:none;
}
`; 