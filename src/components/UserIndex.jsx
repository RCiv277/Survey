import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import formService from '../utils/formService'

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
                <div>
                <Link to={`/review/${form._id}`} >{form.name}</Link>
                </div>
                ) )}
            </div>
        )
    }
    
}


export default UserIndex

