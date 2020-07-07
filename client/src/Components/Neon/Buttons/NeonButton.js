import React from 'react'
import {Button} from "react-bootstrap"

const styles = {
  fontFamily: 'Merienda One, cursive',
  border: 'none',
  padding: '0',
  margin: '0',
  fontSize: '2rem',
  lineHeight: '1',
  color: '#c6e2ff',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  textDecoration: 'none',
  animation: 'neon .1s ease-in-out infinite alternate',
  cursor: 'pointer'
}

function NeonButton(props) {
  return (
    <Button style={styles} type={props.type}>
      {props.text}
    </Button>
  )
}

export default NeonButton