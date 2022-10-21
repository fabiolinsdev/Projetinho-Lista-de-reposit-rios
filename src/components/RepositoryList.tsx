import '../styles/repositories.scss'
import '../styles/global.scss'

export function RepositoryList() {
  

  return (
    <section className="Repository-List">
      <h1>Lista de repositórios</h1>

      <ul>
        
        <li>
          <strong>Projetinho Bancario</strong>
          <p>forms is react</p>
          <a href="https://github.com/fabiolinsdev/openbanking">
            "Openbanking"</a>
        </li>

        <li>
          <strong>Primeiro projeto com JS</strong>
          <p>forms is react</p>
          <a href="https://github.com/fabiolinsdev/primeiros-passos-com-js">
            "Primeiros passos com js"</a>
        </li>

        <li>
          <strong>NLW 5 partindo para o proximo nvl</strong>
          <p>forms is react</p>
          <a href="https://github.com/fabiolinsdev/-NLW-5-Trilha-React--Podcast-tsx-scss-">
            "NLW 5 Trilha React Podcast Tsx, Scss"</a>
        </li>

        <li>
          <strong>Projeto rapido e simples</strong>
          <p>forms is react</p>
          <a href="https://github.com/fabiolinsdev/praticando-Js-sem-foro">
            "Praticando Js semáforo"</a>
        </li>
      
      </ul>
    </section>
  );
}