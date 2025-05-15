import { useState } from 'react'

import './App.css'

function App() {
  
const [color, setColor] = useState('black')
  return (
 
  
  <div className=' w-full h-screen duration-200' style={{backgroundColor:color}} >
    <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 shadow-amber-800 px-3 py-2 rounded-3xl'>
        <button 
        onClick={()=>setColor('red')}
        className='bg-green-500  hover:bg-green-800 font-bold py-2 px-4 rounded-full'>
          Green
        </button>
        <button 
        onClick={()=>setColor('blue')
          
        }
        className='bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded-full'>
          blue
        </button>
        <button 
        onClick={()=>setColor('yellow')}
        className='bg-yellow-500 hover:bg-yellow-800 font-bold py-2 px-4 rounded-full'>
        yellow
        </button>
        <button 
        onClick={()=>setColor('olive')}
        className='bg-olive-500 hover:bg-olive-800 font-bold py-2 px-4 rounded-full'>
          olive
        </button>
        
      </div>
    </div>
  </div>
 
 


  )
}

export default App
