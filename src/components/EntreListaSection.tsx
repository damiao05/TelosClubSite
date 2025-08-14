export default function EntreListaSection() {
    return (
        <section className="entre-lista">
            <div className="container">
                <h2 className="text-center">Entre na lista</h2>
                <p className="sub font-s-18 text-center">Receba materiais gratuitos, bastidores e convites para encontros.</p>
                <div>
                    <div style={{display:'flex', gap:'.8rem', marginTop:'18px', flexWrap:'wrap', justifyContent: 'center'}}>
                        <input className="input-email" type="text" name="recebe-email" id="recebe-email" placeholder="Seu melhor e-mail" />
                        <button className="btn">Assinar</button>
                    </div>
                </div>
                <p className="sub font-s-12 text-center">Sem spam. Você pode sair quando quiser.</p>
            </div>
        </section>
    )
}