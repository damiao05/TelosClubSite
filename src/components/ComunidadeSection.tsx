export default function ComunidadeSection() {
    return (
        <section id="comunidade">
            <div className="container grid">
                <div>
                    <h2>Comunidade</h2>
                    <p className="sub font-s-18">Entrar é ter gente caminhando junto: accountability, desafios semanais e encontros online.</p>
                    <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap'}}>
                        <button className="btn">Entrar no grupo</button>
                        <button className="btn outline">Falar com a equipe</button>
                    </div>
                </div>
                <div className="tile">
                    <div className="box cards-3">
                        <div className="card">
                            <div className="panel">
                                <h4 className="text-primary">Desafios 21 dias</h4>
                                <p className="sub">Apoio e prática em ritmo leve.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="panel">
                                <h4 className="text-primary">Meet quinzenal</h4>
                                <p className="sub">Encontros e estudos guiados.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="panel">
                                <h4 className="text-primary">Canal de estudos</h4>
                                <p className="sub">Materiais e trilhas temáticas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}