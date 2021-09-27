import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class myComponent extends Component{
    constructor(props){
       super(props)
       this.state = {
          field: value
       }
       //creates a reference for your element to use
       this.myDivToFocus = React.createRef()
    }

    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render(){
       return(
            <Button onClick={this.handleOnClick}>Click me</Button>
            <div ref={this.myDivToFocus}>
                Please, have a look around...
            </div>
       )
    }

}