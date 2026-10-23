const Cards = ({ titulo, preco, imagem }) => {
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-4 hover:border-red-600">

      <img src={imagem} alt={titulo} className="w-full h-65 object-cover" />
      <article className="p-4 text-center">
        <h2 className="text-xl text-red-600 uppercase mb-3 font-bold">{titulo}</h2>
        <p className="text-white text-2xl font-bold mb-4">{preco}</p>
        <button className="bg-red-600 w-[50%] py-4 rounded-2xl border-none cursor-pointer font-semibold text-white transition-all duration-300 hover:opacity-80">
           Pedir
        </button>
      </article>
    </div>
  )
}

export default Cards