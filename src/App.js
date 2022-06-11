import {SectionWrapper} from './components';//Download,Features,
import assets from './assets';

const App = ()=> {
  return (
    <>
      <SectionWrapper
        
        title="Your Own Store of Nifty NFTs.
        Start Selling & Growing"
        
        description="Buy, store, collect NFTs, exchange & earn crypto. 
        Join 25+ million people using ProNef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />
    </>
  );
}

export default App;
