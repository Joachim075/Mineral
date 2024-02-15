import './HeroSection.css';
import { FaqWithHeader } from './home/FaqWithHeader';
import { HeroBullets } from './home/HeroBullets';
import { StatsGroup } from './home/StatsGroup';
import { StatsRing } from './home/StatsRing';
import { FeaturesGrid } from './home/FeaturesGrid';
import { FaqSimple } from './contact/FaqSimple';


function Herosection() {
    return (
        <>
        <HeroBullets/> 
        <FaqSimple/> 
        <FeaturesGrid/>
        <FaqWithHeader/>   
        <FeaturesGrid/> 
        <FaqWithHeader/>   
            <StatsRing/>
            <StatsGroup/>
                
            
           

        </>
    )
}


export default Herosection;