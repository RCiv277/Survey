import React , {Component} from 'react'
import { Link } from 'react-router-dom'


class QuestionForm extends Component {
    state = {
        questionsForm: ['Question One', 'Question Two', 'Question Three', 'Question Four', 'Question Five',
        'Question Six', 'Question Seven', 'Question Eight', 'Question Nine', 'Question Ten'],
        answerAForm:[null,null,null,null,null,null,null,null,null,null],
        answerBForm:[null,null,null,null,null,null,null,null,null,null],
        answerCForm:[null,null,null,null,null,null,null,null,null,null],
        answerDForm:[null,null,null,null,null,null,null,null,null,null],
    }


    qForm = () =>    {  
        
        for(let i = 1; i <= 10; i++){
            return(

                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[i - 1]} </label>
                        <input type='text' name={`q${i}`}/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
            )
        }
       
      
            
    }


    render(){

        return(
            <div>
                <form action="post">
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[0]} </label>
                        <input type='text' name='q1'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[1]} </label>
                        <input type='text' name='q2'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>
                        <label> {this.state.questionsForm[2]} </label>
                        <input type='text' name='q3'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[3]} </label>
                        <input type='text' name='q4'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[4]} </label>
                        <input type='text' name='q5'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[5]} </label>
                        <input type='text' name='q6'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[6]} </label>
                        <input type='text' name='q7'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[7]} </label>
                        <input type='text' name='q8'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[8]} </label>
                        <input type='text' name='q9'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                <div className='Question Card'>
                    <ls>

                        <label> {this.state.questionsForm[9]} </label>
                        <input type='text' name='q10'/>
                        <input type='text' name='a'/>
                        <input type='text' name='b'/>
                        <input type='text' name='c'/>
                        <input type='text' name='d'/>
                    </ls>
                </div>
                
                
                    <input type='submit' value='Submit Your Survey'/>
                </form>
            </div>
        )
    }
}

export default QuestionForm