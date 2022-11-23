import React from "react";
import styled from "styled-components"

const Img = styled.img`
width: 10em;
object-fit: cover;
margin:15px;
border-radius: 0.5em;
border: 0.2em solid #AA05;
padding: 0.1em;
&:hover {
   border: 0.2em solid #AA0;
 }
`
const Div = styled.div`
 border: 0.2em solid #055;
 box-sizing: border-box;
 border-radius: 1em;
 padding: 1em;
 width: 15em;
 background: #5AA;
`
export default function Card(props) {
   return (
      <Div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <Img  src={props.image} alt="image not found" />
      </Div>
   );
}
