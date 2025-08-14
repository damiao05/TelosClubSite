export default function ConteudoSection() {
    return (
        <section id="conteudos">
            <div className="container">
                <h2>Conteúdos</h2>
                <p className="sub font-s-18">Posts, devocionais e vídeos rápidos.</p>
                <div className="three" style={{marginTop: "18px"}}>
                    <div className="tile">
                        <h4 style={{margin: "0 0 6px"}}>Guia rápido #1: Hábito que fica</h4>
                        <p className="sub">Passo-a-passo prático para construir hábitos sustentáveis.</p>
                        <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}>
                            <button className="btn outline">Ler</button>
                        </div>
                    </div>
                    <div className="tile">
                        <h4 style={{margin: "0 0 6px"}}>Guia rápido #2: Manhã com propósito</h4>
                        <p className="sub">Rotinas simples para começar bem o dia.</p>
                        <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}>
                            <button className="btn outline">Ler</button>
                        </div>
                    </div>
                    <div className="tile">
                        <h4 style={{margin: "0 0 6px"}}>Guia rápido #3: Treino sem fricção</h4>
                        <p className="sub">Como reduzir barreiras e manter consistência.</p>
                        <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}>
                            <button className="btn outline">Ler</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}