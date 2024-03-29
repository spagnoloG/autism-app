import './App.css';
import { useState, useEffect } from 'react';
import questions_json from './vprasanja.json'
import autizm_svg from './autizm.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const BasicCard = (props) => {

  const [answered, SetAnswered] = useState(false);
  const [question, SetQuestion] = useState('prikaži vprašanje');
  const [anwser, SetAnswer] = useState('prikaži odgovor');
  const [showAutismHomepage, SetShowAutismHomepage] = useState(false);

  const button_click = () => {
    if (answered)
      SetAnswered(false);
    else
      SetAnswered(true);
  }

  useEffect(() => {
    if (props.id === 15 || props.id === 14) {
      SetAnswer('prikaži nadaljevanje');
      SetQuestion('prikaži začetek');
    }

    if (props.id === 16) {
      SetShowAutismHomepage(true);
    }
  }, [])

  return (
    <Card sx={{ minWidth: 150 }} style={{ backgroundColor: 'rgba(255, 215, 0, 0.75)' }} className="fade-in-card">
      <CardContent >
        <Typography variant="h4" component="div" >
          <strong>
            {answered ? props.anwser : props.question}
          </strong>
          {answered && showAutismHomepage ?
            <a href="https://www.zveza-avtizem.eu/">stran</a> : ''
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={button_click} ><strong>{answered ? question : anwser}</strong></Button>
      </CardActions>
    </Card>
  );
}

const App = () => {
  const renderQuestions = questions_json.map(({ id, question, anwser }) => {
    return (
      <Grid item xs={6} md={3} key={id}>
        <BasicCard key={id} question={question} anwser={anwser} id={id} />
      </Grid>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={autizm_svg} alt="avtizem" className='fade-in-card' />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {renderQuestions}
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
