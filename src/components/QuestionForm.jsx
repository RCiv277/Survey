import React , {Component} from 'react'
import { Link , Redirect , withRouter} from 'react-router-dom'
import formService from '../utils/formService' 
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { sizing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid'

let cardStyle = {
    margin:'20px 20%',
    width: '60%',
}

class QuestionForm extends Component {
    state = {
        name: '',
        question: ['Question One', 'Question Two', 'Question Three', 'Question Four', 'Question Five',
        'Question Six', 'Question Seven', 'Question Eight', 'Question Nine', 'Question Ten'],
        answerA:[null,null,null,null,null,null,null,null,null,null],
        answerB:[null,null,null,null,null,null,null,null,null,null],
        answerC:[null,null,null,null,null,null,null,null,null,null],
        answerD:[null,null,null,null,null,null,null,null,null,null],
    }


    handleQuestion = (e) => {
        let targ = Number(e.target.name[1]) 
        let newQuestionForm = this.state.question
        newQuestionForm[targ] = e.target.value
        this.setState({
            question : newQuestionForm
        })
    }
    handleAnswer= (e) => {
        let targ = Number(e.target.name[1]) 
        
        
        
        if (e.target.name[2] === 'a'){
            let newAnswerForm = this.state.answerA
            newAnswerForm[targ] = e.target.value
            this.setState({
                answerA: newAnswerForm
            })  
        }
        else if(e.target.name[2] === 'b'){
            let newAnswerForm = this.state.answerB
            newAnswerForm[targ] = e.target.value
            this.setState({
                answerB: newAnswerForm
            })
        }
        else if(e.target.name[2] === 'c'){
            let newAnswerForm = this.state.answerC
            newAnswerForm[targ] = e.target.value
            this.setState({
                answerC : newAnswerForm
            })
        }
        else if(e.target.name[2] === 'd'){
            let newAnswerForm = this.state.answerD
            newAnswerForm[targ] = e.target.value
            this.setState({
                answerD : newAnswerForm
            })
        }
        else{
            console.log('Something has gone terribly wrong')
        }
    }


    handleName = (e) => {
        this.setState({ name: e.target.value})
    }
    handleSubmit = async (e) => {       
            await formService.create(this.state)
            this.props.history.push('/')                    
    }


    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <Card style={cardStyle}><CardContent>
                <Input placeholder='Name' inputProps={{ 'aria-label': 'description' }} onChange={this.handleName} />
                </CardContent></Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q1</h5>
                        <Input placeholder='Question' name='q0' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q0a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q0b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q0c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q0d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q2</h5>
                        <Input placeholder='Question' name='q1' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q1a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q1b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q1c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q1d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q3</h5>
                        <Input placeholder='Question' name='q2' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q2a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q2b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q2c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q2d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q4</h5>
                        <Input placeholder='Question' name='q3' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q3a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q3b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q3c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q3d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q5</h5>
                        <Input placeholder='Question' name='q4' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q4a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q4b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q4c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q4d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q6</h5>
                        <Input placeholder='Question' name='q5' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q5a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q5b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q5c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q5d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q7</h5>
                        <Input placeholder='Question' name='q6' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q6a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q6b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q6c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q6d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q8</h5>
                        <Input placeholder='Question' name='q7' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q7a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q7b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q7c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q7d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q9</h5>
                        <Input placeholder='Question' name='q8' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q8a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q8b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q8c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q8d' onChange={this.handleAnswer}/>
                  </CardContent>
                </Card>
                <Card style={cardStyle} varient='outlined'>
                  <CardContent style={{paddingRight: '400px'}}>
                        <h5>Q10</h5>
                        <Input placeholder='Question' name='q9' onChange={this.handleQuestion}/>
                        <Input placeholder='Answer 1' name='q9a' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 2' name='q9b' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 3' name='q9c' onChange={this.handleAnswer}/>
                        <Input placeholder='Answer 4' name='q9d' onChange={this.handleAnswer}/>
                        <Input type='submit' style={{marginTop:'10px',padding: '9px', border: '1px solid rgba(0, 0, 0, 0.23)',}} value='Submit Your Survey' />
                  </CardContent>
                </Card>
    
                </form>
            </div>
        )
    }
}

export default withRouter(QuestionForm)