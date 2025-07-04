

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* About Content */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-neon-orange">
            Sobre nós
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
            <p className="text-center">
              A WAi Sports nasceu da paixão pelo esporte e pelo poder da tecnologia em transformar vidas. 
              Sabemos que cada pessoa é única — por isso, nossa missão é entregar planos de treino personalizados, 
              feitos sob medida para o seu momento e objetivo.
            </p>
            
            <p className="text-center">
              Aqui, você não está sozinho. Nossa inteligência artificial aprende com seu desempenho e 
              adapta cada treino para você evoluir no seu ritmo, com acompanhamento humano e suporte de verdade.
            </p>
            
            <p className="text-center">
              Acreditamos em um caminho sem atalhos, com foco no progresso e no bem-estar.
            </p>
            
            <p className="text-center">
              Nosso propósito é fazer com que você se sinta motivado, acompanhado e capaz de superar limites 
              — seja para completar sua primeira prova, conquistar seu recorde pessoal ou simplesmente viver 
              com mais saúde e alegria.
            </p>
            
            <p className="text-center font-semibold text-white">
              <span className="text-neon-orange">WAi Sports</span>: a plataforma onde tecnologia e cuidado andam juntos 
              para você chegar mais longe, de um jeito leve e eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}