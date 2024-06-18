import React from 'react';

const HomeContent = () => {
  return (
    <div className="home-content">
      <h1>Bem-vindo ao Soft Health</h1>
      <p>
        A Soft Health tem como objetivo facilitar e agilizar o atendimento dos clientes, proporcionando uma experiência mais eficiente e tranquila. Utilizando tecnologia avançada e parcerias estratégicas, a Soft Health direciona os clientes para hospitais que estão menos movimentados, reduzindo o tempo de espera e melhorando a qualidade do atendimento. Dessa forma, os clientes podem receber os cuidados necessários de forma rápida e eficiente, sem enfrentar a frustração e o desconforto de ambientes hospitalares lotados.
      </p>

      <section>
        <h2>Serviços</h2>
        <ul>
          <li>Emergência Médica</li>
          <li>Agendamento de Consultas (em breve)</li>
          <li>Resultados de Exames (em breve)</li>
        </ul>
      </section>

      <section>
        <h2>Últimas Notícias</h2>
        <ul>
          <li>Nova UPA inaugurada no centro da cidade.</li>
          <li>Atualização do sistema de agendamento online.</li>
          <li>Campanha de vacinação contra a gripe começa em julho.</li>
        </ul>
      </section>

      <section>
        <h2>Depoimentos</h2>
        <blockquote>
          "O atendimento foi rápido e eficiente. Recomendo a todos!"
          <footer>- Maria Silva</footer>
        </blockquote>
        <blockquote>
          "A consulta online me ajudou muito em um momento difícil."
          <footer>- João Pereira</footer>
        </blockquote>
      </section>

      <section>
        <h2>Contato</h2>
        <div className="contact-info">
          Telefone: (41) 4002-8922<br />
          Email: contato@softhealth.com
        </div>
      </section>

      <section>
        <h2>Sobre Nós</h2>
        <p>
          A Soft Health visa facilitar e agilizar o atendimento dos clientes, direcionando-os para hospitais menos movimentados.
        </p>
      </section>
    </div>
  );
};

export default HomeContent;
