import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import formService from '../utils/formService'
import ListItemText from '@material-ui/core/ListItemText'
import TypoGraphy from '@material-ui/core/Typography'





class UserIndex extends Component {
    state={
        forms: [],
    }



    async componentDidMount() {
        const forms = await formService.indexUser();
        forms.user = ''
        this.setState({ forms });
    }
    render(){
        return(
            <div>
            {this.state.forms.map(form =>(
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                       <Link to={`/review/${form._id}`}>{form.name}</Link>
                    </TypoGraphy>
                </ListItemText>
            ))}
            </div>
        )
    }
}

export default UserIndex

