import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class IngredientList extends Component {

    render () {
        let allIngredients = this.props.ingredients.map((ingr, i) => (
            <li key={i}>
                < Ingredient itemKey={i} ingredient={ingr} clickFunc={this.props.add} />
            </li>
        ))
        return (
            <section className="pane">
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }
}