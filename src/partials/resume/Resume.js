import styled from 'styled-components'
import Resumestyle from './Resumestyle'

const Span = styled.span`
  font-weight: bold;
`

const Typo = styled.p`
    margin: 0.2em auto;
`

const Default = styled.body`
    background-color: #C5C6C7;
`

export default function Resume() {
    return(
        <Default>
        <Resumestyle>

            <Typo>
                Buscando alcançar meus objetivos e melhorar a cada dia. Como desenvolvedor web, minha stack atualmente consiste em <Span>React.js, Javascript, HTML e CSS</Span>, também já tive contado com Node.js e Express.js, mas hoje estou <Span>focado no frontend.</Span>
            </Typo>

            <Typo>
                Como desenvolvedor Junior, o meu objetivo inicial é <Span>aprender e agregar</Span>, pelo fato de ser iniciante eu não posso ignorar a questão de que existem muitas coisas das quais eu não sei, como processos de desenvolvimento, boas práticas, programação funcional e saber escrever um código limpo de verdade. Essas são habilidades que eu quero evoluir no meu dia a dia como desenvolvedor, ao mesmo tempo em que <Span>busco demostrar o meu valor, para ajudar a equipe e apresentar resultados.</Span>
            </Typo>

            <Typo>
                Estudar programação não só me ensinou sobre código, como me ensinou a <Span>estudar com consistência, persistência e paciência. Além da minha facilidade com o inglês ter me ajudado muito nesse processo,</Span> e agora eu criei o hábito de não só praticar o código mas também a língua inglesa toda a semana. Acredito que o adjetivo desenvolvedor para mim, se aplica no geral, pois para aprender a desenvolver sistemas, primeiro eu tive que aprender a me desenvolver, como alguém que tem a <Span>ambição de sempre     buscar aprender e melhorar, todos os dias.</Span>
            </Typo>

            <Typo>
                Eu também tenho total disponibilidade de me realocar (seja de cidade, município ou até de estado) desde que, de alguma forma seja necessário para o meu crescimento profissional.
            </Typo>
        </Resumestyle>
        </Default>
    )
}