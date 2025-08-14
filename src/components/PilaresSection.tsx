export default function PilaresSection() {
    return (
        <section id="pilares">
            <div className="container">
                <h2>Pilares</h2>
                <p className="sub font-s-18">Cada conteúdo toca, pelo menos, um destes pilares centrais.</p>
                <div className="three" style={{marginTop: "18px"}}>
                    <div className="tile"><h4 style={{margin: "0 0 6px"}}>🏋️ Corpo</h4><div className="muted">Treino, nutrição e rotina para energia estável.</div></div>
                    <div className="tile"><h4 style={{margin: "0 0 6px"}}>💚 Alma</h4><div className="muted">Mentalidade, emoções e caráter em formação.</div></div>
                    <div className="tile"><h4 style={{margin: "0 0 6px"}}>📖 Espírito</h4><div className="muted">Disciplinas espirituais, Bíblia e prática da fé.</div></div>
                </div>
            </div>
        </section>
    );
}