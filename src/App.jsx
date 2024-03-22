import { useState } from 'react'
import { personalData } from './components/data/personalData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-6 text-white' >
{
  personalData.name
}
    </div>
    </>
  )
}

export default App
