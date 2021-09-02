// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component {
    handlefocus = () => {
        console.log('Good!')
    }
     
    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){ 
    return (
        <div>
            <button onFocus={this.handlefocus} onBlur={this.handleBlur}>Button</button>
        </div>
        )
    }
}
