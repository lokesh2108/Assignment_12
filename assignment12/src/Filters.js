import React, {Component} from 'react'

class Filters extends Component {
    
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        this.props.onFilter({
             [name]: value
        });
    }

    render() {
        return (
            <div class="col-md-4">
                <form>
                    <input type="text" class="col-md-12" placeholder="Search..." name="filterText" onChange= {this.handleChange}/><br/><br/>
                </form>
            </div>
        )
    }
}

export default Filters