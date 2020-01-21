import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import formService from '../utils/formService'

class UserIndex extends Component {
    state={
        forms: [],
    }



    async componentDidMount() {
        const forms = await formService.indexUser();
        this.setState({ forms });
    }
    render(){
        return(
            <div>
                {this.state.forms.map(form =>(
                    <p>{form.name}</p>
                ) )}
            </div>
        )
    }
    
}


export default UserIndex

