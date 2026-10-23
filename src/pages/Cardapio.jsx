import Cards from "../components/Cards"

const Cardapio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <Cards
        titulo="Sushi de Salmão"
        preco="R$ 42,90"
        imagem="images.jpg"
      />
      <Cards
        titulo="Temaki"
        preco="R$ 28,00"
        imagem="rolinho-temaki-salmao-fresco.webp"
      />
      <Cards
        titulo="Yakisoba"
        preco="R$ 36,50"
        imagem="images (1).jpg"
      />
    </div>
  )
}

export default Cardapio