import React, {Component} from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        }
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
            prevState.product[name] = value
            return {product: prevState.product}
        })
    }

    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); 
    }

    render() {
        return (
            <div class="col-md-4">
                <h3>Add a new product</h3>
                <form>
                    Name<br/>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}/><br/><br/>
                    Category<br/>
                    <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category}/><br/><br/>
                    Price<br/>
                    <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price}/><br/><br/>
                    <button type="button" class="btn btn-primary" value="Save" onClick={this.handleSave}>Save</button>
                </form>
            </div>
        )
    }
}

export default ProductForm