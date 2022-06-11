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


      <SectionWrapper
        
        title="Smart User Interface Marketplace"
        
        description="Experience a battery UI of ProNef NFT Marketplace.
        Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
}

export default App;
