
import React , {Component} from 'react'
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class ReviewCards extends Component{
    state = {
        
    }

    render(){
        return(
            <div style={{width:'30%'}}>
                <Card style={{ margin:'5%', backgroundColor: 'azure'}} className={"MuiEngagementCard--01"}>
                <CardContent className={"MuiTypography--heading"}>
                <Typography
                className={"MuiTypography--subheading"}
                variant={"h6"}
                gutterBottom
                >
                {this.props.question}
                </Typography>
                <Typography
                className={"MuiTypography--heading"}
                variant={"h7"}
                gutterBottom
                >
                Q{this.props.questIdx + 1}
                </Typography>
                <FormControl component="fieldset">
                <RadioGroup aria-label="Quest" name="customized-radios">
                <FormControlLabel classes={'test'} value={this.props.answerA} control={<Radio color="primary" checked={(this.props.checked === 'a')} classes={{ checked: 'test' }}/>} label={this.props.answerA} />
                <FormControlLabel classes={'test'} value={this.props.answerB} control={<Radio color="primary" checked={(this.props.checked === 'b')} classes={{ checked: 'test' }}/>} label={this.props.answerB} />
                <FormControlLabel classes={'test'} value={this.props.answerC} control={<Radio color="primary" checked={(this.props.checked === 'c')} classes={{ checked: 'test' }}/>} label={this.props.answerC} />
                <FormControlLabel classes={'test'} value={this.props.answerD} control={<Radio color="primary" checked={(this.props.checked === 'd')} classes={{ checked: 'test' }}/>} label={this.props.answerD} />
                </RadioGroup>
                </FormControl>
                </CardContent>
                </Card>
            </div>
        )
    }
}


export default ReviewCards
