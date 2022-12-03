import React, {Component} from 'react'

class ProductRow extends Component {
    
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.Id);
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.Name}</td>
                <td>{this.props.Category}</td>
                <td>{this.props.Price}</td>
                <td><input type="button" class="btn btn-primary" value="Delete" onClick={this.destroy}/></td>
            </tr>
        )
    }
}

export default ProductRow