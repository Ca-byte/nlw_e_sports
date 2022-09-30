import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import logoImg from "./assets/logo-nlw-esports.svg"
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import './styles/main.css'
import { Input } from './components/form/Input'

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
       <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25" >
            <Dialog.Title className='text-3xl font-black'>Publish an Ad</Dialog.Title>
              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>What is game's name?</label>
                   <Input 
                      id="game" 
                      placeholder='Yo, Select the game you wish to play'
                   />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="name">How can I call you?</label>
                  <Input id="name" type="text" placeholder='Name or nickname be my guest!' />
                </div>

                <div className='grid grid-cols-2 gap-6'>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying">Years playing it?</label>
                    <Input id="yearsPlaying" type="number" placeholder='It is ok to be zero!' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='flex flex-col gap-2' htmlFor="discord">Discord user, please?</label>
                    <Input id="discord" type="text" placeholder='User#0000' />
                  </div>
                </div>
                <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Better day to play?</label>
                  <div className='grid grid-cols-4 gap-1'>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Sunday'>S</button>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Monday'>M</button>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Tuesday'>T</button>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Wednesday'>W</button>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Thursday'>T</button>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Friday'>F</button>
                  <button
                  className='w-8 h-8 rounded bg-zinc-900' 
                  title='Saturday'>S</button>
                  </div>
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart">Available time?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input id="hourStart" type='time' placeholder='Start' />
                    <Input id="hourEnd" type='time' placeholder='Over' />
                  </div>
                </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox" />
                  Hey you, can connect with at the my voice chat.
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close
                    type='button'
                    className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                      Cancel
                  </Dialog.Close>
                  <button 
                    type='submit'
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  >
                    <GameController  className='w-6 h-6'/>
                    Find Duo
                  </button>
                </footer>

              </form>
          </Dialog.Content>
       </Dialog.Portal>
      </Dialog.Root>
    </div>
      
  )
}


