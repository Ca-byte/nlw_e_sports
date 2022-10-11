import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react'
import { Input } from '../form/Input'
import { useEffect, useState, FormEvent } from 'react'

interface Game {
    id: string;
    title: string;
  }


export function CreateAdModal(){
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays ] = useState<string[]>([])
  const [ useVoiceChannel, setUseVoiceChannel ] = useState(false)


  useEffect(()=> {
    fetch('http://localhost:3333/games')
    .then(Response => Response.json()
    .then(data => {
      setGames(data)
    }))
  },[])

  function handleCreateAd(event:FormEvent){
    event.preventDefault()
    
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)
    console.log(useVoiceChannel)
   
  }



  return(
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25" >
        <Dialog.Title className='text-3xl font-black'>Publish an Ad</Dialog.Title>
          <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">Which game?</label>
              <select
                name="game"
                id="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                defaultValue=""
              >
                <option disabled value="">Select your favorite game...</option>

                {games.map(game => {
                return <option key={game.id} value={game.id}>{game.title}</option>
                })}
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name">How can I call you?</label>
              <Input id="name" name="name" type="text" placeholder='Name or nickname be my guest!' />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying">Years playing it?</label>
                <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder='It is ok to be zero!' />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='flex flex-col gap-2' htmlFor="discord">Discord user, please?</label>
                <Input name="discord" id="discord" type="text" placeholder='User#0000' />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekDays">Better day to play?</label>
                    <ToggleGroup.Root 
                        type='multiple' 
                        className='grid grid-cols-4 gap-1'
                        value={weekDays}
                        onValueChange={setWeekDays}
                    >
                        <ToggleGroup.Item
                            value="0"
                            title='Sunday'
                            className={`w-8 h-8 rounded ${weekDays.includes('0')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >S
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="1"
                            title='Monday'
                            className={`w-8 h-8 rounded ${weekDays.includes('1')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >M
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="2"
                            title='Tuesday'
                            className={`w-8 h-8 rounded ${weekDays.includes('2')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >T
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="3"
                            title='Wednesday'
                            className={`w-8 h-8 rounded ${weekDays.includes('3')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >W
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="4"
                            title='Thursday'
                            className={`w-8 h-8 rounded ${weekDays.includes('4')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >T
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="5"
                            title='Friday'
                            className={`w-8 h-8 rounded ${weekDays.includes('5')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >F
                        </ToggleGroup.Item>
                        <ToggleGroup.Item
                            value="6"
                            title='Saturday'
                            className={`w-8 h-8 rounded ${weekDays.includes('6')? 'bg-violet-500' : ' bg-zinc-900' }`}
                            >S
                        </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart">Available time?</label>
                <div className='grid grid-cols-2 gap-2'>
                    <Input name="hourStart"  id="hourStart" type='time' placeholder='Start' />
                    <Input name="hourEnd" id="hourEnd" type='time' placeholder='Over' />
                </div>
              </div>
            </div>

            <label className='mt-2 flex gap-2 text-sm items-center'>
            <Checkbox.Root
            checked={useVoiceChannel}
            onCheckedChange={(checked) => {
              if(checked === true) {
                setUseVoiceChannel(true)
              } else {
                setUseVoiceChannel(false)
              }
            }} 
            className='w-6 h-6 p-1 rounded bg-zinc-900'
            >
              <Checkbox.Indicator>
                <Check className='h-4 w-4 text-emerald-400'/>
              </Checkbox.Indicator>
            </Checkbox.Root>
              Hey you, voice chat?
            </label>

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
  )
}