export default function Header() {
  return (
    <header>
      <div className="container nav">
        <a className="brand" href="#home">
          <span className="leaf"></span> Telos Club
        </a>
        <nav className="navlinks">
          <a href="#sobre">Sobre</a>
          <a href="#pilares">Pilares</a>
          <a href="#produtos">Produtos</a>
          <a href="#comunidade">Comunidade</a>
          <a href="#conteudos">Conteúdos</a>
        </nav>
        <div className="navcta">
          <button className="btn">Entrar na lista</button>
        </div>
      </div>
    </header>
  )
}