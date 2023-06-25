import Layout from '../components/Layout'
// import Banner from '@/components/Banner';
// import About from '@/components/About';
// import Services from '@/components/Services';
import homeData from '../static-data/home';
import { Blocks } from '@/components/Blocks';

function Home() {
  const blocks = homeData.blocks;
  return (
    <Layout>
      <main>
        <Blocks blocks={blocks} />
        {/* <Banner />
        <About />
        <Services /> */}
      </main>
    </Layout>
  )
}

export default Home