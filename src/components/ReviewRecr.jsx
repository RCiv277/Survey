import React , {Component} from 'react'
import ReactDOM from "react-dom";
import formService from '../utils/formService'
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'
import { render } from '@testing-library/react';
import ReviewCards from './ReviewCards'
import { Collection } from 'mongoose';


class ReviewRecr extends Component{
    state = {
        timeridx: 0,
        entry0QuestIdx: 0,
        entry1QuestIdx: 0,
        entry2QuestIdx: 0,
        entry3QuestIdx: 0,
        entry4QuestIdx: 0,
        entry5QuestIdx: 0,
        question: '',
        answerA: '' ,
        answerB: '',
        answerC: '',
        answerD: '',
        time: -3,
        answersEnt0:['','','','','','','','','','',''],
        answersEnt1:['','','','','','','','','','',''],
        answersEnt2:['','','','','','','','','','',''],
        answersEnt3:['','','','','','','','','','',''],
        answersEnt4:['','','','','','','','','','',''],
        answersEnt5:['','','','','','','','','','','']
    }
   
    async componentDidMount() {
        let id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
        const entry = await formService.getSixEntries(id)
        await this.setState( entry )
        this.timerID = setInterval(() => this.tick(),500);
    }
    
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        try{
            this.setState({time: this.state.time + 0.5})
            let entry = this.state.times
            if(this.state.time > entry[0].time.timeChanged){
                if(entry[0].time.type === 'a'){
                    if(entry[0].time.entry === 0){
                        let retAns = this.state.answersEnt0
                        retAns[this.state.entry0QuestIdx] = entry[0].time.newLet
                        this.setState({ answersEnt10 : retAns })
                    }
                    if(entry[0].time.entry === 1){
                        let retAns = this.state.answersEnt0
                        retAns[entry[0].time.entry] = entry[0].time.newLet
                        this.setState({ answersEnt1 : retAns })
                    }
                    if(entry[0].time.entry === 2){
                        let retAns = this.state.answersEnt0
                        retAns[entry[0].time.entry] = entry[0].time.newLet
                        this.setState({ answersEnt2 : retAns })
                    }
                    if(entry[0].time.entry === 3){
                        let retAns = this.state.answersEnt0
                        retAns[entry[0].time.entry] = entry[0].time.newLet
                        this.setState({ answersEnt3 : retAns })
                    }
                    if(entry[0].time.entry === 4){
                        let retAns = this.state.answersEnt0
                        retAns[entry[0].time.entry] = entry[0].time.newLet
                        this.setState({ answersEnt4 : retAns })
                    }
                    if(entry[0].time.entry === 5){
                        let retAns = this.state.answersEnt0
                        retAns[entry[0].time.entry] = entry[0].time.newLet
                        this.setState({ answersEnt5 : retAns })
                    }
                    entry.splice(0, 1)
                    this.setState({ times: entry})
                    console.log(this.state.times[0].time.timeChanged)
                }
                else{
                    this.setState({ [`entry${entry[0].time.entry}QuestIdx`]: entry[0].time.newQuest })
                    entry.splice(0, 1)
                    this.setState({ times: entry})
                    console.log(this.state.times[0].time.timeChanged)
                }
            }
        } catch{
            clearInterval(this.timerID)
            this.props.history.push('/')
        }
            
    
    }


    render(){
        return(
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
                <ReviewCards
                checked={this.state.answersEnt0[this.state.entry0QuestIdx]}
                question={this.state.question[this.state.entry0QuestIdx]}
                answerA={this.state.answerA[this.state.entry0QuestIdx]}
                answerB={this.state.answerB[this.state.entry0QuestIdx]}
                answerC={this.state.answerC[this.state.entry0QuestIdx]}
                answerD={this.state.answerD[this.state.entry0QuestIdx]}
                questIdx={this.state.entry0QuestIdx}
                />
                <ReviewCards
                checked={this.state.answersEnt1[this.state.entry1QuestIdx]}
                question={this.state.question[this.state.entry1QuestIdx]}
                answerA={this.state.answerA[this.state.entry1QuestIdx]}
                answerB={this.state.answerB[this.state.entry1QuestIdx]}
                answerC={this.state.answerC[this.state.entry1QuestIdx]}
                answerD={this.state.answerD[this.state.entry1QuestIdx]}
                questIdx={this.state.entry1QuestIdx}
                />
                <ReviewCards
                checked={this.state.answersEnt2[this.state.entry2QuestIdx]}
                question={this.state.question[this.state.entry2QuestIdx]}
                answerA={this.state.answerA[this.state.entry2QuestIdx]}
                answerB={this.state.answerB[this.state.entry2QuestIdx]}
                answerC={this.state.answerC[this.state.entry2QuestIdx]}
                answerD={this.state.answerD[this.state.entry2QuestIdx]}
                questIdx={this.state.entry2QuestIdx}
                />
                <ReviewCards
                checked={this.state.answersEnt3[this.state.entry3QuestIdx]}
                question={this.state.question[this.state.entry3QuestIdx]}
                answerA={this.state.answerA[this.state.entry3QuestIdx]}
                answerB={this.state.answerB[this.state.entry3QuestIdx]}
                answerC={this.state.answerC[this.state.entry3QuestIdx]}
                answerD={this.state.answerD[this.state.entry3QuestIdx]}
                questIdx={this.state.entry3QuestIdx}
                />
                <ReviewCards
                checked={this.state.answersEnt4[this.state.entry4QuestIdx]}
                question={this.state.question[this.state.entry4QuestIdx]}
                answerA={this.state.answerA[this.state.entry4QuestIdx]}
                answerB={this.state.answerB[this.state.entry4QuestIdx]}
                answerC={this.state.answerC[this.state.entry4QuestIdx]}
                answerD={this.state.answerD[this.state.entry4QuestIdx]}
                questIdx={this.state.entry4QuestIdx}
                />
                <ReviewCards
                checked={this.state.answersEnt5[this.state.entry5QuestIdx]}
                question={this.state.question[this.state.entry5QuestIdx]}
                answerA={this.state.answerA[this.state.entry5QuestIdx]}
                answerB={this.state.answerB[this.state.entry5QuestIdx]}
                answerC={this.state.answerC[this.state.entry5QuestIdx]}
                answerD={this.state.answerD[this.state.entry5QuestIdx]}
                questIdx={this.state.entry5QuestIdx}
                />
            </Grid>
        )
    }
}


export default ReviewRecr