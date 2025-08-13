export default function Footer() {
  return (
    <footer>
      <div className="container footergrid">
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <span className="leaf"></span>
          <div>
            <div style={{ fontWeight: '700' }}>Telos Club</div>
            <div className="small">Corpo • Alma • Espírito</div>
          </div>
        </div>
      </div>
      <div className="container small">© {new Date().getFullYear()} Telos Club. Todos os direitos reservados.</div>
    </footer>
  )
}
