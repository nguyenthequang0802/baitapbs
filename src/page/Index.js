import { Header } from './Header';
import { HeaderBt } from './HeaderBt';
import {Slider} from './Carousel';
import { Content } from './Content';
import { News } from './News';
import { DaoTao } from './Daotao';
import { CuuSv } from './CuuSv';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Talk } from './Talk';
import { Contact } from './Contact';
import { Video } from './Video';

function Home(){
    return(
        <>
        <Header />
      <HeaderBt/>
      <Slider/>
      <Content/>
      <News/>
      <DaoTao/>
      <Banner/>
      <CuuSv/>
      <Talk />
      <Contact/>
      <Video />
      <Footer/>
        </>
    )
}
export default Home;