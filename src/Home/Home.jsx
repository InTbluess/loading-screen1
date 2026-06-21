import Header from './Contents/Header.jsx'
// import Header from '../LoadingScreen/Header.jsx'
import Body from './Contents/Body.jsx'

export default function Home() {
  return (
    <div className="Home bg-black h-dvh min-w-full px-10 py-5 flex flex-col">
      <Header/>
      <Body/>
      
    </div>
  );
}
