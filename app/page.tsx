import ThemeToggler from '@/components/toggle/ThemeToggler'

const Home = () => {
  return (
    <main className="px-[10%] xl:px-[20%]">
      <div className="container mx-auto">
        <h1 className="h1">Header 1</h1>
        <h2 className="h2">Header 2</h2>
        <h3 className="h3">Header 3</h3>
        <h4 className="h4">Header 4</h4>
        <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis odit nobis aperiam quo velit iusto obcaecati nostrum alias? Consectetur architecto sapiente debitis rerum corporis veniam harum quidem. Dolore, expedita quis!</p>
        <ThemeToggler />
      </div>
    </main>
  )
}

export default Home