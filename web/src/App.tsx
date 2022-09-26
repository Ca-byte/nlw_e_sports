import './styles/main.css'
import logoImg from "./assets/logo-nlw-esports.svg"


export function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />
      <h1 className='text-6xl text-white font-black mt-20'>Your perfect <span className='bg-nlw-gradient'>duo</span> is here</h1>
    </div>
      
  )
}


