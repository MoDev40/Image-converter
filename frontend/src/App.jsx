import MainPage from "./pages/MainPage"
function App() {
  return (
    <div className="w-full lg:max-w-screen-lg lg:mx-auto">
        <div className='flex flex-row justify-between px-8 cursor-pointer'>
            <h1 className="text-2xl font-extrabold">ImageForce-Hub</h1>
            <h4 className="text-xl font-normal">Github</h4>
        </div>
        <MainPage/>
    </div>
  )
}

export default App
