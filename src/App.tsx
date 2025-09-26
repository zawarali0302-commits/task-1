
import './App.css'
import Flag from './components/Flag';
export type FlagType = {
  name: string;
  color1: string;
  color2: string;
  color3: string;
  horizontal: boolean;
}

function App() {
const flag1: FlagType= {
  name : "France",
  color1: "bg-[#002550]",
  color2: "bg-[#f7f7f7]",
  color3: "bg-[#c81026]",
  horizontal: true,
}
const flag2: FlagType= {
  name : "Italy",
  color1: "bg-[#008d44]",
  color2: "bg-[#f7f7f7]",
  color3: "bg-[#c82a35]",
  horizontal: true,
}
const flag3: FlagType= {
  name : "Russia",
  color2: "bg-[#f7f7f7]",
  color1: "bg-[#0037A1]",
  color3: "bg-[#ce2a1d]",
  horizontal: false,
}
const flag4: FlagType= {
  name : "Germany",
  color2: "bg-[#000000]",
  color1: "bg-[#f70000]",
  color3: "bg-[#f7c900]",
  horizontal: false,
}
  return (
    <>
     <div className='w-full flex justify-center items-center gap-2'>
      <Flag flag={flag1}/>
      <Flag flag={flag2}/>
      <Flag flag={flag3}/>
      <Flag flag={flag4}/>
     </div>
    </>
  )
}

export default App
