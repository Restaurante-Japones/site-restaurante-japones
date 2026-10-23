import { Home, BookOpen } from 'lucide-react'
import {Link} from 'react-router-dom'
 
const NavBar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10 bg-zinc-800 text-white rounded-b-2xl">
      <h1 className="text-xl font-bold">Restaurante <span className='text-red-600'>Japonês</span></h1>
      <nav>
        <ul className='flex list-none items-center gap-4'>
          <li><Link to="/" className="flex gap-2 items-center bg-zinc-700 px-4 py-2 transition-colors duration-300 rounded-xl hover:-translate-y-1 hover:bg-red-600"><Home size={18}/> Início</Link></li>
          <li><Link to="/cardapio" className="flex gap-2 items-center bg-zinc-700 px-4 py-2 transition-colors duration-300 rounded-xl hover:-translate-y-1 hover:bg-red-600"><BookOpen size={18}/> Cardápio</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar