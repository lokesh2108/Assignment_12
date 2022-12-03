import React, {Component} from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }

    render() {
        const {products, filterText} = this.props
        let productArray = Object.values(products)
        let rows = productArray.map(
            (product, i) => {
                if (product.name === filterText || filterText === "")
                    return <ProductRow
                                key={i}
                                Name={product.name}
                                Category={product.category}
                                Price={product.price}
                                Id={product.id}
                                onDestroy={this.handleDestroy}
                            />
                else
                    return null
            }

        )

        return (
            <div class="col-md-4">
                <table class="table table-sm table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Price
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(
                            (product) => product
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable