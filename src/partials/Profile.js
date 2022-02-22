import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import imgMain from '../img/imgMain.jpg'

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Styled from 'styled-components'

const Span = Styled.span`
  font-weight: bold;
`

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Nickolas Eduardo L. Oliveira"
        subheader="Web Developer Front-end Jr | React.js"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgMain}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <LinkedInIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Buscando alcançar meus objetivos e melhorar a cada dia. Como desenvolvedor web, minha stack atualmente consiste em <Span>React.js, Javascript, HTML e CSS</Span>, também já tive contado com Node.js e Express.js, mas hoje estou <Span>focado no frontend.</Span>
          </Typography>
          <Typography paragraph>
          Como desenvolvedor Junior, o meu objetivo inicial é <Span>aprender e agregar</Span>, pelo fato de ser iniciante eu não posso ignorar a questão de que existem muitas coisas das quais eu não sei, como processos de desenvolvimento, boas práticas, programação funcional e saber escrever um código limpo de verdade. Essas são habilidades que eu quero evoluir no meu dia a dia como desenvolvedor, ao mesmo tempo em que <Span>busco demostrar o meu valor, para ajudar a equipe e apresentar resultados.</Span>
          </Typography>
          <Typography paragraph>
          Estudar programação não só me ensinou sobre código, como me ensinou a <Span>estudar com consistência, persistência e paciência. Além da minha facilidade com o inglês ter me ajudado muito nesse processo,</Span> e agora eu criei o hábito de não só praticar o código mas também a língua inglesa toda a semana. Acredito que o adjetivo desenvolvedor para mim, se aplica no geral, pois para aprender a desenvolver sistemas, primeiro eu tive que aprender a me desenvolver, como alguém que tem a <Span>ambição de sempre buscar aprender e melhorar, todos os dias.</Span>
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
