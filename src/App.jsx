import { SpeedInsights } from "@vercel/speed-insights/next"
import Todo from "./Todo"

function App() {

  return (
    <>
      <Todo />
      <SpeedInsights/>
    </>
  )
}

export default App
