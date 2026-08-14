import Body from './Contents/Body.jsx'
import About from './Contents/About.jsx'

export default function Home() {
  return (
    <div className="Home bg-black h-full min-w-full px-10 flex flex-col border border-cyan-500">
      <Body/>
      <About/>
    </div>
  );
}
