import Body from './Contents/Body.jsx'
import About from './Contents/About.jsx'
import GetStarted from './Contents/GetStarted.jsx';
import  Services from './Contents/Services.jsx'

export default function Home() {
  return (
    <div className="bg-black h-full min-w-full px-10 flex flex-col ">
      <Body/>
      <About/>
      <GetStarted/>
      <Services/>
    </div>
  );
}
