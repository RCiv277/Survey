import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import formService from '../utils/formService'


class Questions extends Component {
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
        answer: ['a','a','a','a','a','a','a','a','a','a']
        // answer: [false,false,false,false,false,false,false,false,false,false],
    }
    handleAnswerBttn = (val) => {
        let retArry = this.state.answerChange
        let newAnswer = {
            oldLet: this.state.answer[val.target.name[0]],
            newLet: val.target.name[1],
            timeChanged: new Date()
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
        let retArry = this.state.questChange
        let newQuest = {
            oldQuest: this.state.questIdx,
            newQuest: val.target.name[1],
            timeChanged: new Date()
        }
        let retQuest = val.target.name[1]
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
    render(){
        return(
            // null
            <div className='questCard'>
            <h5>Q{Number(this.state.questIdx) + 1}</h5>
            <h5 className='quest'>{this.state.question[this.state.questIdx]}</h5>
            <input type='radio' onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'a'} name={`${this.state.questIdx}a`}/> <label>{this.state.answerA[this.state.questIdx]}</label>
            <input type='radio' onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'b'} name={`${this.state.questIdx}b`}/> <label>{this.state.answerB[this.state.questIdx]}</label>
            <input type='radio' onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'c'} name={`${this.state.questIdx}c`}/> <label>{this.state.answerC[this.state.questIdx]}</label>
            <input type='radio' onChange={this.handleAnswerBttn} checked={this.state.answer[this.state.questIdx] === 'd'} name={`${this.state.questIdx}d`}/> <label>{this.state.answerD[this.state.questIdx]}</label>
            { this.state.answer.every(e => e) ?
            <button onClick={this.handleSubmit}>{' Submit Survey '}</button>
            :
            <button name={`${this.state.questIdx}` + `${ Number(this.state.questIdx) + 1}` } onClick={this.handleQuestBttn} >{' Next Question -> '}</button>
            }
            <button name={`${this.state.questIdx}0`} onClick={this.handleQuestBttn} className={this.state.questIdx === 0? 'ActiveQuest':'InactiveQuest'}>1</button>
            <button name={`${this.state.questIdx}1`} onClick={this.handleQuestBttn} className={this.state.questIdx === 1? 'ActiveQuest':'InactiveQuest'}>2</button>
            <button name={`${this.state.questIdx}2`} onClick={this.handleQuestBttn} className={this.state.questIdx === 2? 'ActiveQuest':'InactiveQuest'}>3</button>
            <button name={`${this.state.questIdx}3`} onClick={this.handleQuestBttn} className={this.state.questIdx === 3? 'ActiveQuest':'InactiveQuest'}>4</button>
            <button name={`${this.state.questIdx}4`} onClick={this.handleQuestBttn} className={this.state.questIdx === 4? 'ActiveQuest':'InactiveQuest'}>5</button>
            <button name={`${this.state.questIdx}5`} onClick={this.handleQuestBttn} className={this.state.questIdx === 5? 'ActiveQuest':'InactiveQuest'}>6</button>
            <button name={`${this.state.questIdx}6`} onClick={this.handleQuestBttn} className={this.state.questIdx === 6? 'ActiveQuest':'InactiveQuest'}>7</button>
            <button name={`${this.state.questIdx}7`} onClick={this.handleQuestBttn} className={this.state.questIdx === 7? 'ActiveQuest':'InactiveQuest'}>8</button>
            <button name={`${this.state.questIdx}8`} onClick={this.handleQuestBttn} className={this.state.questIdx === 8? 'ActiveQuest':'InactiveQuest'}>9</button>
            <button name={`${this.state.questIdx}9`} onClick={this.handleQuestBttn} className={this.state.questIdx === 9? 'ActiveQuest':'InactiveQuest'}>10</button>
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


