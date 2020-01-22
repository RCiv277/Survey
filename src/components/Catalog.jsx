import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import formService from '../utils/formService'

class Catalog extends Component {
    state={
        forms: [],
    }



    async componentDidMount() {
        const forms = await formService.index();
        this.setState({ forms });
    }
    render(){
        return(
            <div>
                {this.state.forms.map(form =>(
                <div>
                <Link to={`/survey/${form._id}`} >{form.name}</Link>
                </div>
                ) )}
            </div>
        )
    }    
}

export default Catalog