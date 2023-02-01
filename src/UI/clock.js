import React,{useEffect,useState} from 'react'

const Clock = () => {

    const[days,setDay] = useState('')
    const[hours,setHours] = useState('')
    const[minutes,setMinutes] = useState('')
    const[seconds,setSeconds] = useState('')
    let interval;

  /*    const countDown =()=>{
        const destination = new Date('Feb 1, 2023').getTime();

        interval = setInterval(() => {
          const now = new Date.getTime()
        const different = destination - now
        const days = Math.floor(different/(1000*60*60*24));
        const hours = Math.floor(different % (100 * 60 * 60 * 24)/ (1000*60*60))
        const minutes = Math.floor(different % (100 * 60 * 60)/ (1000*60))
        const Seconds = Math.floor(different % ( 100 * 60) / 1000)
        if(destination < 0) {
          clearInterval(interval.current)
        }
        else{
          setDay(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(Seconds);
        }
        },1000);
        
        
      }
      */
  
  return (
    <div className='clock__wrapper d-flex align-item-center gap-3'>
    <div className='clock__data  d-flex align-item-center gap-3'>
    <div className='text-center'>
    <h1 className='text-white fs-3 mb-2'>10</h1> 
    <h3 className='text-white fs-6'>days</h3>
    </div>
    <span className='text-white fs-3'>:</span>
    </div>
    <div className='clock__data  d-flex align-item-center gap-3'>
    <div className='text-center'>
    <h1 className='text-white fs-3 mb-2'>20</h1> 
    <h3 className='text-white fs-6'>Hours</h3>
    </div>
    <span className='text-white fs-3'>:</span>
    </div>
    <div className='clock__data  d-flex align-item-center gap-3'>
    <div className='text-center'>
    <h1 className='text-white fs-3 mb-2'>30</h1> 
    <h3 className='text-white fs-6'>Minutes</h3>
    </div>
    <span className='text-white fs-3'>:</span>
    </div>
    <div className='clock__data  d-flex align-item-center gap-3'>
    <div className='text-center'>
    <h1 className='text-white fs-3 mb-2'>10</h1> 
    <h3 className='text-white fs-6'>Seconds</h3>
    </div>
    </div>
    </div>
  )
}

export default Clock