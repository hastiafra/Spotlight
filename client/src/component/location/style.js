import styled from "styled-components";



export const Img = styled.img`
width: 60px;
position:fixed;
display:inline-block;
right: 50px;
top: 50px;
z-index:10px;

transition: 300ms ease;

&:hover {
width:70px;
}


`

export const Sidebar = styled.button`
background:none;
border:none;
cursor:pointer;
@media (min-width: 780px) {

    display:none;
    
}

`