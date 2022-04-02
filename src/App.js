import './App.css';
import {useState} from 'react';
import questions_json from './vprasanja.json'
import autizm_svg from './autizm.svg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function BasicCard(props) {
 
  const [answered, SetAnswered] = useState(false);
  const show_answer = () => {
    SetAnswered(true);
  }

  return (
    <Card sx={{ minWidth: 150}} style={{ backgroundColor: 'rgba(255, 215, 0, 0.5)'  }}> 
      <CardContent >
        <Typography variant="h4" component="div">
          <strong>
          {answered && props.anwser}
          {!answered && props.question}
          </strong>
        </Typography>
      </CardContent>
      {!answered &&
          (
            <CardActions>
              <Button size="small" color="error" onClick={show_answer}><strong>prikaži odgovor</strong></Button>
            </CardActions>
          )
      }
    </Card>
  );
}

function App() {
  const renderQuestions = questions_json.map(({id, question, anwser}) =>{
    return (
      <Grid item xs={6} md={3} key={id}>
        <BasicCard key={id} question={question} anwser={anwser} />
      </Grid>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={autizm_svg} alt="avtizem"/>
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
