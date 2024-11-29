import './App.css'
import ExitAndEnterAnimation from './components/ExitAndEnterAnimation'
import ProgressBar from './components/ProgressBar'

function App() {

  return (
    <div className="p-10 flex flex-col bg-black w-full h-screen text-white">
      <h1 className="text-center text-4xl font-semibold">
        Framer motion components
      </h1>
      <div className="grid grid-cols-2 mt-2 gap-10 p-10">
        <div className="w-full h-auto text-center pt-10">
          <h3 className="text-xl">Progress Bar</h3>
          <ProgressBar />
        </div>

        <div className="w-full h-auto text-center">
          <h3 className="text-xl">Exit and Enter Animation</h3>
          <ExitAndEnterAnimation />
        </div>
      </div>
    </div>
  )
}

export default App
