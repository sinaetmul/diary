import { useState } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import styled from 'styled-components'
import './App.css'

const Description = styled.p`
  font-size : 20px;
  color : #888;
  background : red;
`

function Logo(props) {
  const style = {
    fontSize : '30px',
    color : props.color
  }

  return (
      <div>
      <h1 style={style}>{props.title}</h1>
      </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo title="변경 확인" color="black"/>
      <Logo title="확인 완료" color="blue"/>
      <h1>Vite + React</h1>
      <div>
        <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      <Description>
        Click on the Vite and React logos to learn more
      </Description>
    </>
  )
}

export default App
