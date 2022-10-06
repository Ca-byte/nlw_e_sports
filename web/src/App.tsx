import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from "./assets/logo-nlw-esports.svg"
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import './styles/main.css'
import { CreateAdModal } from './components/CreateAdModal'


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}
export function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(()=> {
    fetch('http://localhost:3333/games')
    .then(Response => Response.json()
    .then(data => {
      setGames(data)
    }))
  },[])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />
      <h1 className='text-6xl text-white font-black mt-20'>Your perfect <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> is here</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {
          games.map(game => {
           return (
           <GameBanner
              key={game.id} 
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads}
            />
          )

          })
        }
      </div>
      <Dialog.Root>
       <CreateAdBanner />
       <CreateAdModal />
    
      </Dialog.Root>
    </div>
      
  )
}


