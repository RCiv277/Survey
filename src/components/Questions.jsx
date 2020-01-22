import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import formService from '../utils/formService'


class Questions extends Component {
    state = {
        question: 1,
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
        retArry.push(newAnswer)
        this.setState({answerChange : retArry})
    }
    handleQuestBttn(val){

    }
    handleSubmit(val){

    }
    async componentDidMount(){
        const form = await formService.details()
        this.setState({ form })
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


