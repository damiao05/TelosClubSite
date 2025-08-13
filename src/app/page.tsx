import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telos Club — Preview</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main id="home" className="hero">
        <div className="container grid">
          <div>
            <div className="chip">🌿 Crescimento integral • Corpo, Alma e Espírito</div>
            <h1>Organização que transforma <span style={{color: "var(--primary)"}}>de dentro para fora</span></h1>
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

      <section id="sobre">
        <div className="container" style={{display: "grid", gap: "24px", gridTemplateColumns: "1.4fr .8fr", alignItems: "start"}}>
          <div>
            <h2>O que é o <span style={{color: "var(--primary)"}}>Telos Club</span>?</h2>
            <p className="sub" style={{fontSize: "18px"}}>Somos uma comunidade que acredita que a vida floresce quando raiz e fruto crescem juntos. Unimos hábitos, estudo e espiritualidade em um caminho prático de formação.</p>
            <div className="three" style={{marginTop: "16px"}}>
              <div className="tile"><div style={{color: "var(--primary)", fontWeight: "600"}}>Planejamento</div><div className="muted">Do zero ao consistente, com apoio e clareza.</div></div>
              <div className="tile"><div style={{color: "var(--primary)", fontWeight: "600"}}>Formação</div><div className="muted">Conteúdo aplicável e com profundidade.</div></div>
              <div className="tile"><div style={{color: "var(--primary)", fontWeight: "600"}}>Comunidade</div><div className="muted">Acompanhamento e encorajamento.</div></div>
            </div>
          </div>
          <div className="manifest">
            <h3 style={{margin: "0"}}>Manifesto</h3>
            <p className="muted" style={{margin: "8px 0 0"}}>Crescer é ordenar o caos com sabedoria, cultivar virtudes e servir pessoas. Nosso telos é Plenitude em Cristo — com pés na terra e olhos no eterno.</p>
            <button className="btn" style={{marginTop: "12px"}}>Ler completo</button>
          </div>
        </div>
      </section>

      <section id="pilares">
        <div className="container">
          <h2>Pilares</h2>
          <p className="sub">Cada conteúdo toca, pelo menos, um destes pilares centrais.</p>
          <div className="three" style={{marginTop: "18px"}}>
            <div className="tile"><h4 style={{margin: "0 0 6px"}}>🏋️ Corpo</h4><div className="muted">Treino, nutrição e rotina para energia estável.</div></div>
            <div className="tile"><h4 style={{margin: "0 0 6px"}}>💚 Alma</h4><div className="muted">Mentalidade, emoções e caráter em formação.</div></div>
            <div className="tile"><h4 style={{margin: "0 0 6px"}}>📖 Espírito</h4><div className="muted">Disciplinas espirituais, Bíblia e prática da fé.</div></div>
          </div>
        </div>
      </section>
    </>
  )
}

