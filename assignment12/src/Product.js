import React, {Component} from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
    '1': {id: 1, category: 'Sports', price: '$27.99', name: 'SG Bat'},
    '2': {id: 2, category: 'Electronics', price: '$120', name: 'Mac Monitor'},
    '3': {id: 3, category: 'Food', price: '$10', name: 'Lays'},
    '4': {id: 4, category: 'Sports', price: '$69.99', name: 'Gloves'},
    '5': {id: 5, category: 'Education', price: '$9.99', name: 'NoteBook'},
    '6': {id: 6, category: 'Travel', price: '$200', name: 'Travel Bag'}
}

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: "",
            products: PRODUCTS
        }
        this.handleFilter= this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleFilter(filterInput){
        this.setState(filterInput)
    }

    handleSave(product) {
        if(!product.id) {
                product.id = new Date().getTime()
        }
        this.setState((prevState) => {
                let products = prevState.products
                products[product.id] = product
                return {products}
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
                let products = prevState.products
                delete products[productId]
                return {products}
        })
    }

    render() {
        return (
            <div class="container-fluid">
                <h1 class="col-md-4">My Inventory</h1><br/>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={this.state.products} filterText={this.state.filterText} onDestroy={this.handleDestroy}/>
                <ProductForm onSave={this.handleSave}/>
            </div>
        )
    }
}

export default Product