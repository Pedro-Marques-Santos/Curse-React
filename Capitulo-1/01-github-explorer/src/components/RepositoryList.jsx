import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]); //coloco no useState a o resultado inicial da variavel q vai adicionar, q no caso é um array vazio

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data)) 
    }, []); //toda vez q a variavel repositories mudar essa função vai executar
 
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository =>{
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    );
}