import { ArrowBigRight, SquarePen } from "lucide-react"
import { Link } from "react-router-dom"
import restauranteImg from "../assets/Restaurante.webp"


const Home = () => {
  return (
    <main className="">
      <div className="flex justify-center flex-col items-center gap-4 mx-auto min-h-[calc(100vh-5.5rem)]">
        <h1 className="text-5xl font-bold text-white">Restaurante <span className="text-red-600">Japonês</span></h1>
        <p className="text-xl text-zinc-500 text-center max-w-2xl">Ingredientes selecionados diariamente, técnica milenar e uma experiência
          gastronômica inesquecível no conforto da sua mesa.</p>
        <div className="inline-flex gap-4 ">
          <Link to="/cardapio" className="flex items-center gap-2 px-12 py-4 font-bold bg-red-600 shadow-md text-white shadow-red-600 rounded-2xl hover:-translate-y-1">Ver Cardápio <ArrowBigRight size={18} fill="currentColor" /></Link>
          <button disabled className="flex items-center text-white bg-zinc-800 px-6 py-4 rounded-2xl gap-2 disabled:opacity-50 disabled:cursor-not-allowed"><span className="text-red-400"><SquarePen size={18} /></span> Reservar Mesa</button>
        </div>
      </div>

      <div className="px-10 py-16 flex flex-col md:flex-row gap-8 items-center justify-between bg-zinc-800/50 m-4 rounded-2xl">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-4xl">Venha nos conhecer</h1>
          <p className="text-zinc-400 text-lg">
            Estamos na <span className="text-white font-semibold">Avenida Paulista, 1106 – 4º andar</span>,
            <br />
            no coração de São Paulo.
            <br />
            Venha viver essa experiência de perto.
          </p>
        </div>
        <div className="w-87.5 shrink-0">
          <img src={restauranteImg} alt="Imagem do Restaurante" className="rounded-2xl" />
        </div>
      </div>
    </main>
  )
}

export default Home