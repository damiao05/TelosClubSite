export default function SobreSection() {
    return(
        <section id="sobre">
            <div className="container" style={{display: "grid", gap: "24px", gridTemplateColumns: "1.4fr .8fr", alignItems: "start"}}>
                <div>
                    <h2>O que é o <span className="text-primary">Telos Club</span>?</h2>
                    <p className="sub font-s-18">Somos uma comunidade que acredita que a vida floresce quando raiz e fruto crescem juntos. Unimos hábitos, estudo e espiritualidade em um caminho prático de formação.</p>
                    <div className="three" style={{marginTop: "16px"}}>
                    <div className="tile"><div className="text-primary font-w-600">Planejamento</div><div className="muted">Do zero ao consistente, com apoio e clareza.</div></div>
                    <div className="tile"><div className="text-primary font-w-600">Formação</div><div className="muted">Conteúdo aplicável e com profundidade.</div></div>
                    <div className="tile"><div className="text-primary font-w-600">Comunidade</div><div className="muted">Acompanhamento e encorajamento.</div></div>
                    </div>
                </div>
                <div className="panel">
                    <h3 style={{margin: "0"}}>Manifesto</h3>
                    <p className="muted" style={{margin: "8px 0 0"}}>Crescer é ordenar o caos com sabedoria, cultivar virtudes e servir pessoas. Nosso telos é Plenitude em Cristo — com pés na terra e olhos no eterno.</p>
                    <button className="btn" style={{marginTop: "12px"}}>Ler completo</button>
                </div>
            </div>
        </section>
    );
}