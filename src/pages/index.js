import Layout from '../components/Layout'
import homeData from '../static-data/home';
import { Blocks } from '@/components/Blocks';

function Home() {
  const blocks = homeData.blocks;
  return (
    <Layout>
      <main>
        <Blocks blocks={blocks} />
      </main>
    </Layout>
  )
}

export default Home