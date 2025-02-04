import "./App.css"
import { Person } from "./Person"

const App = () => {

  return (
    <div className="flex flex-col gap-4 bg-zinc-500 w-[20rem] h-auto py-3">
      <Person name={"Noel"} age={19} isAdmin={true} />
      <Person name={"Alex"} age={23} isAdmin={false} />
    </div>
  )
}

export default App