export default function HeroSection() {
    return (
        <main id="home" className="hero">
            <div className="container grid">
                <div>
                    <div className="chip">🌿 Crescimento integral • Corpo, Alma e Espírito</div>
                    <h1>Organização que transforma <span className="text-primary">de dentro para fora</span></h1>
                    <p className="lead">O Telos Club é uma comunidade de desenvolvimento pessoal e espiritual. Unimos disciplina, sabedoria prática e princípios cristãos para levar pessoas à plenitude.</p>
                    <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}>
                        <button className="btn">Começar agora →</button>
                        <button className="btn outline">Ver manifesto →</button>
                    </div>
                    <div className="kpis">
                        <div className="kcard"><div className="kkey">+15</div><div className="muted">Recursos prontos</div></div>
                        <div className="kcard"><div className="kkey">+3</div><div className="muted">Pilares práticos</div></div>
                        <div className="kcard"><div className="kkey">24/7</div><div className="muted">Comunidade ativa</div></div>
                    </div>
                </div>
                <div className="panel">
                    <div className="box">
                        <div className="cards">
                            <div className="card"><h4>🏋️ Corpo</h4><p className="muted">Rotinas, hábitos e energia para sustentar sua missão.</p></div>
                            <div className="card"><h4>💚 Alma</h4><p className="muted">Mente, emoções e propósito alinhados ao seu telos.</p></div>
                            <div className="card"><h4>📖 Espírito</h4><p className="muted">Princípios bíblicos aplicados ao cotidiano, com profundidade.</p></div>
                            <div className="card"><h4>🎯 Execução</h4><p className="muted">Planejamento simples, métricas e ritmo para avançar.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}