import Card from '@/components/PomoCard'
import Tasks from '@/components/Tasks'

const Home = () => {
  return (
    <main className="px-[10%] xl:px-[20%]">
      <div className="container mx-auto">
        {/* card component here */}
        <div className="flex items-center flex-col">
          <Card />
          <Tasks />
        </div>
      </div>
    </main>
  )
}

export default Home