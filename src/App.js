import React, {useState} from 'react';
import logo from './sviet.png'
import tu from './theuniquesCommunity.png'
import edu from './education.png'
import elevate from './elevate-logo.png'
function App() {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    // Trigger bounce animation
    setIsBouncing(true);
    
    // Remove bounce animation after 500ms
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };
  
  return (

    <div className="h-screen bg-gradient-to-b from-[#125655] to-black">
      <div className='h-[80px] bg-white/50  flex justify-between shadow-lg rounded-b-3xl p-4'>
        <div className='w-[70px] h-full'>
          <img src={logo} alt='' className='object-contain mx-auto'/>
        </div>
        <div className='h-full'>
          <img src={tu} alt='' className='w-[120px] h-full object-contain mx-auto me-3 inline-block'/>
          <img src={edu} alt='' className='w-[120px] h-full object-contain mx-auto ms-2 inline-block'/>
        </div>
      </div>
      <div>
        <img src={elevate} alt='' className='w-3/4 mx-auto h-[50vh] object-contain'/>
      </div>
      <div className='my-9'>
        <button  onClick={handleClick}
        className={`block h-[20vh] hover:bg-white/60 duration-150 hover:shadow-md text-5xl text-white font-bold w-[40%] rounded-full mx-auto bg-white/50 ${
          isBouncing ? 'animate-bounce' : ''
        }`}>
          Inuagurate
        </button>
      </div>
    </div>
  );
}

export default App;
