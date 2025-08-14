export default function RecursoSection() {
    return (
        <section id="recursos">
            <div className="container">
                <h2>Produtos & Recursos</h2>
                <p className="sub font-s-18">Cada conteúdo toca pelo menos um destes pilares centrais.</p>
                <div className="three" style={{marginTop: "18px"}}>
                    <div className="tile">
                        <h4 style={{margin: "0 0 6px"}}>Planner Notion (Gratuito)</h4>
                        <div className="muted">Organização 360°: metas, hábitos, devocional e treino.</div>
                        <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}></div>
                        <button className="btn">Baixar agora</button>
                    </div>
                    <div className="tile">
                        <h4 style={{margin: "0 0 6px"}}>Kit Canva (Social)</h4>
                        <div className="muted">Pacote minimalista: posts, stories e mockups.</div>
                        <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}></div>
                        <button className="btn">Ver kit</button>
                    </div>
                    <div className="tile">
                        <h4 style={{margin: "0 0 6px"}}>Planilha Financeira</h4>
                        <div className="muted">Controle simples para orçamento e reservas.</div>
                        <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}></div>
                        <button className="btn">Acessar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}