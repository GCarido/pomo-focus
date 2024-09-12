import Card from '@/components/PomoCard'

const Home = () => {
  return (
    <main className="px-[10%] xl:px-[20%]">
      <div className="container mx-auto">
        {/* card component here */}
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Home