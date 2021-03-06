import React , {Component} from 'react'
import formService from '../utils/formService'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'



class Questions extends Component{
  state = {
    question: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
    questIdx: 0,
    timeStarted: new Date(),
    questChange: [],
    answerChange: [],
    answer: [false,false,false,false,false,false,false,false,false,false],
}
handleAnswerBttn = (val) => {
    let retArry = this.state.answerChange
    let newAnswer = {
        oldLet: this.state.answer[val.target.name[0]],
        newLet: val.target.name[1],
        timeChanged: (new Date() - this.state.timeStarted)/1000
    }
    let retAnswer = this.state.answer
    retAnswer[val.target.name[0]] = val.target.name[1]
    retArry.push(newAnswer)
    this.setState({
        answerChange : retArry,
        answer : retAnswer
    })
}
handleQuestBttn = (val) => {
    console.log(val)
    let retArry = this.state.questChange
    let newQuest = {
        oldQuest: this.state.questIdx,
        newQuest: Number(val[1]),
        timeChanged:  (new Date() - this.state.timeStarted)/1000
    }
    let retQuest = Number(val[1])
    retArry.push(newQuest)
    this.setState({
        questChange : retArry,
        questIdx : retQuest
    })
}

handleSubmit = async () => {
    let totalTime = (new Date() - this.state.timeStarted)/1000

    let entry = {
        timeFinished: totalTime ,
        changedAnswers: this.state.answerChange,
        changedQuestions: this.state.questChange,
        formId: this.state._id,
        answers: this.state.answer
    }
    await formService.createEntry(entry)
    this.props.history.push('/')
}


async componentDidMount(){
    const form = await formService.getForm()
    this.setState( form[0] )
}
render() {
  return (
      <div className='App'>
      <Card className={"MuiEngagementCard--01"}>
      <CardContent className={"MuiTypography--heading"}>
      <Typography
      className={"MuiTypography--subheading"}
      variant={"h6"}
      gutterBottom
      >
      {`${this.state.question[this.state.questIdx]}`}
      </Typography>
      <Typography
      className={"MuiTypography--heading"}
      variant={"h7"}
      gutterBottom
      >
      Q{this.state.questIdx + 1}
      </Typography>
      <FormControl component="fieldset">
      <RadioGroup aria-label="Quest" name="customized-radios">
      <FormControlLabel onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'a'} classes={'test'} name={`${this.state.questIdx}a`} value={this.state.answerA[this.state.questIdx]} control={<Radio color="primary" classes={{ checked: 'test' }}/>} label={this.state.answerA[this.state.questIdx]} />
      <FormControlLabel onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'b'} classes={'test'} name={`${this.state.questIdx}b`} value={this.state.answerB[this.state.questIdx]} control={<Radio color="primary" classes={{ checked: 'test' }}/>} label={this.state.answerB[this.state.questIdx]} />
      <FormControlLabel onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'c'} classes={'test'} name={`${this.state.questIdx}c`} value={this.state.answerC[this.state.questIdx]} control={<Radio color="primary" classes={{ checked: 'test' }}/>} label={this.state.answerC[this.state.questIdx]} />
      <FormControlLabel onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'd'} classes={'test'} name={`${this.state.questIdx}d`} value={this.state.answerD[this.state.questIdx]} control={<Radio color="primary" classes={{ checked: 'test' }}/>} label={this.state.answerD[this.state.questIdx]} />
      </RadioGroup>
      </FormControl>
      {this.state.answer.every(e => e) ?
      <Button onClick={this.handleSubmit}>Submit</Button>
      :
      ''
      }
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

      <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}0`)} color={this.state.questIdx === 0? 'primary':'secondary'}>1</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}1`)} color={this.state.questIdx === 1? 'primary':'secondary'}>2</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}2`)} color={this.state.questIdx === 2? 'primary':'secondary'}>3</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}3`)} color={this.state.questIdx === 3? 'primary':'secondary'}>4</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}4`)} color={this.state.questIdx === 4? 'primary':'secondary'}>5</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}5`)} color={this.state.questIdx === 5? 'primary':'secondary'}>6</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}6`)} color={this.state.questIdx === 6? 'primary':'secondary'}>7</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}7`)} color={this.state.questIdx === 7? 'primary':'secondary'}>8</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}8`)} color={this.state.questIdx === 8? 'primary':'secondary'}>9</Button>
            <Button onClick={this.handleQuestBttn.bind(this,`${this.state.questIdx}9`)} color={this.state.questIdx === 9? 'primary':'secondary'}>10</Button>
      </ButtonGroup>
      </Grid>
          {/* <button name={`${this.state.questIdx}` + `${ Number(this.state.questIdx) + 1}` } onClick={this.handleQuestBttn} >{' Next Question -> '}</button> */}
      
      </CardContent>
      </Card>
      </div>
      );
    }
  }


//   control={<RadioButton value="radioA" inputProps={{ 'aria-label': 'Radio A' }}/>}
// control={<RadioButton value="radioA" inputProps={{ 'aria-label': 'Radio A' }}/>}
// control={<RadioButton value="radioA" inputProps={{ 'aria-label': 'Radio A' }}/>}
// control={<RadioButton value="radioA" inputProps={{ 'aria-label': 'Radio A' }}/>}
    
  export default Questions