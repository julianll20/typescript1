import { Autor } from "./entities/Autor"
import { Biblioteca } from "./entities/Biblioteca"
import { LibroImpreso } from "./entities/LibroImpreso"

const Tolkien = new Autor("J. R. R. ","Tolkien")
const Priestley = new Autor("Rick ","Priestley")
const Martin = new Autor("George" ,"Martin")
const Oda = new Autor( "Eiichirō","Oda")

const libro1 = new LibroImpreso("The Lord Of The Rings", Tolkien, 1392)
const libro2 = new LibroImpreso("WARHAMMER40K", Priestley, 3000)
const libro3 = new LibroImpreso("Game Of Thrones",Martin, 832 )
const libro4 = new LibroImpreso("One Piece",Oda, 1101)


const biblioteca = new Biblioteca()
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)
biblioteca.agregarLibro(libro3)
biblioteca.agregarLibro(libro4)


biblioteca.mostrarCatalogo()




