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
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default QuestionForm