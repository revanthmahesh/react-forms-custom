import React,{ Component } from "react";

export default class Compounded extends Component {
    constructor(props){
        super(props);
        this.check = props.display;
    }
    render(){
        return (
            <div>
                {this.check}
            </div>
        )
    }
}
// export default Compounded;