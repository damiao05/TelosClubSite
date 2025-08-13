export default function HeroSection() {
    return (
        <section className="max-w-7x1 mx-auto p-8 md:flex md:gap-12">
            <div className="md:flex-1">
                <p className="text-sm text-green-700 font-semibold mb-2 flex items-center gap-2">
                    <span>🌿</span>
                    Crescimento Integral • Corpo, Alma e Espírito
                </p>

                <h1 className="text-4x1 font-extrabold leading-tight mb-4">
                    Organização que transforma{' '}
                    <span className="text-green-800">de dentro para fora</span>
                </h1>

                <p className="text-gray-700 mb-6 max-w-md">
                    O Telos Club é uma comunidade de desenvolvimento pessoal e espiritual.
                    Unimos disciplina, sabedoria prática e princípios cristãos para levar pessoas à plenitude.
                </p>

                <div className="flex gap-4 mb-8">
                    <button className="bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800 transition">
                        Começar agora →
                    </button>
                    <button className="border border-gray-300 px-5 py-2 rounded hover:bg-gray-100 transition">
                        Ver Manifesto →
                    </button>
                </div>

                <div className="flex gap-6">
                    <div className="text-center">
                        <p className="text-lg font-bold">+15</p>
                        <p className="text-gray-600">Recursos prontos</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold">+3</p>
                        <p className="text-gray-600">Pilares práticos</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold">24/7</p>
                        <p className="text-gray-600">Comunidade ativa</p>
                    </div>
                </div>
            </div>

            <div className="md:flex-1 mt-10 md:mt-0 bg-green-50 p-6 rounded-lg grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">Corpo</h3>
                    <p className="text-gray-700 text-sm">Rotinas, hábitos e energia para sustentar a missão.</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">Alma</h3>
                    <p className="text-gray-700 text-sm">Mente, emoções e propósito alinhados ao seu telos.</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">Espírito</h3>
                    <p className="text-gray-700 text-sm">Princípios bíblicos aplicados ao cotidiano, com profundidade.</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">Execução</h3>
                    <p className="text-gray-700 text-sm">Planejamento simples, métricas e ritmo para avançar.</p>
                </div>
            </div>
        </section>
    );
}