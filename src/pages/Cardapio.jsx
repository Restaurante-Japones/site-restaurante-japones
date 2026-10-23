import Cards from "../components/Cards"
import ImagemSushi from "../assets/images.jpg"
import ImagemTemaki from "../assets/rolinho-temaki-salmao-fresco.webp"
import ImagemYakisoba from "../assets/images (1).jpg"

const Cardapio = () => {

  const pratos = [
    { id: 1, titulo: "Sushi de Salmão", preco: "R$ 42,90", imagem: ImagemSushi },
    { id: 2, titulo: "Temaki", preco: "R$ 28,00", imagem: ImagemTemaki },
    { id: 3, titulo: "Yakisoba", preco: "R$ 36,50", imagem: ImagemYakisoba },
  ]

  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Cardápio</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {pratos.map((prato) => (
          <Cards
            key={prato.id}
            titulo={prato.titulo}
            preco={prato.preco}
            imagem={prato.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Cardapio