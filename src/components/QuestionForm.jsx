import React , {Component} from 'react'
import { Link , Redirect , withRouter} from 'react-router-dom'
import formService from '../utils/formService' 


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
                    <label>Name</label>
                    <input type="text" onChange={this.handleName}/>
                <div className='Question Card'>
                    <ol>
                        <label> Question One </label>
                        <input type='text' name='q0' onChange={this.handleQuestion}/>
                        <input type='text' name='q0a' onChange={this.handleAnswer}/>
                        <input type='text' name='q0b' onChange={this.handleAnswer}/>
                        <input type='text' name='q0c' onChange={this.handleAnswer}/>
                        <input type='text' name='q0d' onChange={this.handleAnswer}/>
                    </ol>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Two </label>
                        <input type='text' name='q1' onChange={this.handleQuestion}/>
                        <input type='text' name='q1a' onChange={this.handleAnswer}/>
                        <input type='text' name='q1b' onChange={this.handleAnswer}/>
                        <input type='text' name='q1c' onChange={this.handleAnswer}/>
                        <input type='text' name='q1d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>
                        <label> Question Three </label>
                        <input type='text' name='q2' onChange={this.handleQuestion}/>
                        <input type='text' name='q2a' onChange={this.handleAnswer}/>
                        <input type='text' name='q2b' onChange={this.handleAnswer}/>
                        <input type='text' name='q2c' onChange={this.handleAnswer}/>
                        <input type='text' name='q2d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Four </label>
                        <input type='text' name='q3' onChange={this.handleQuestion}/>
                        <input type='text' name='q3a' onChange={this.handleAnswer}/>
                        <input type='text' name='q3b' onChange={this.handleAnswer}/>
                        <input type='text' name='q3c' onChange={this.handleAnswer}/>
                        <input type='text' name='q3d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Five </label>
                        <input type='text' name='q4' onChange={this.handleQuestion}/>
                        <input type='text' name='q4a' onChange={this.handleAnswer}/>
                        <input type='text' name='q4b' onChange={this.handleAnswer}/>
                        <input type='text' name='q4c' onChange={this.handleAnswer}/>
                        <input type='text' name='q4d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Six </label>
                        <input type='text' name='q5' onChange={this.handleQuestion}/>
                        <input type='text' name='q5a' onChange={this.handleAnswer}/>
                        <input type='text' name='q5b' onChange={this.handleAnswer}/>
                        <input type='text' name='q5c' onChange={this.handleAnswer}/>
                        <input type='text' name='q5d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Seven </label>
                        <input type='text' name='q6' onChange={this.handleQuestion}/>
                        <input type='text' name='q6a' onChange={this.handleAnswer}/>
                        <input type='text' name='q6b' onChange={this.handleAnswer}/>
                        <input type='text' name='q6c' onChange={this.handleAnswer}/>
                        <input type='text' name='q6d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Eight </label>
                        <input type='text' name='q7' onChange={this.handleQuestion}/>
                        <input type='text' name='q7a' onChange={this.handleAnswer}/>
                        <input type='text' name='q7b' onChange={this.handleAnswer}/>
                        <input type='text' name='q7c' onChange={this.handleAnswer}/>
                        <input type='text' name='q7d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Nine </label>
                        <input type='text' name='q8' onChange={this.handleQuestion}/>
                        <input type='text' name='q8a' onChange={this.handleAnswer}/>
                        <input type='text' name='q8b' onChange={this.handleAnswer}/>
                        <input type='text' name='q8c' onChange={this.handleAnswer}/>
                        <input type='text' name='q8d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> Question Ten </label>
                        <input type='text' name='q9' onChange={this.handleQuestion}/>
                        <input type='text' name='q9a' onChange={this.handleAnswer}/>
                        <input type='text' name='q9b' onChange={this.handleAnswer}/>
                        <input type='text' name='q9c' onChange={this.handleAnswer}/>
                        <input type='text' name='q9d' onChange={this.handleAnswer}/>
                    </ls>
                </div>
                    <input type='submit' value='Submit Your Survey'/>
                    <Link to='/survey/index'> Check List</Link>
                </form>
            </div>
        )
    }
}

export default withRouter(QuestionForm)