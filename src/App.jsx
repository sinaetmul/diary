import { useState } from "react";
import Container from './components/Container'

const App = () => {
  const today = new Date()
  const [year,setYear] = useState(today.getFullYear())
  const [month,setMonth] = useState(today.getMonth())
  const onGoToday = () => {
    setYear(today.getFullYear())
    setMonth(today.getMonth() + 1)
  }

  return (
    <Container>

    </Container>
  )
}

export default App
