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
                    <p>{form.name}</p>
                ) )}
            </div>
        )
    }
    
}


export default Catalog