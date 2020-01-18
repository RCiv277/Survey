import React , {Component} from 'react'
import { Link } from 'react-router-dom'


class Questions extends Component {
    state = {
        timeStarted: new Date(),
        questChange: [],
        answerChange: [],
        answer: null,
    }
    handleAnswerBttn(val) {
        let retArry = this.state.answerChange
        let newAnswer = {
            oldLet: this.state.answer,
            newLet: val,
            timeChanged: new Date()
        }
        arry.push(newAnswer)
        this.setState({answerChange : retArry})
    }
    handleQuestBttn(val){

    }
    handleSubmit(val){

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Questions


// timeByChange: [{ 
//     oldLet: '',
//     newLet: '',
//     timeChanged: new Date()
// }],
// QuestionChangedTo: [{ 
//     oldQuest: '',
//     newQuest: '',
//     timeChanged: new Date()
// }],


