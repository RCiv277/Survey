import React , {Component} from 'react'
import { Link } from 'react-router-dom'


class Questions extends Component {
    state = {
        timeStarted:0,
        questChange: [],
        timeByChange: [],
        answer: null,
    }
    handleAnswerBttn(val) {
        let retAnswer = []
        if(typeof this.state.answer == 'string'){

        }
        else{
            
        }

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


