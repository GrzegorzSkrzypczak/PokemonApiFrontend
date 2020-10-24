import React, { useEffect, useState } from 'react';
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { click: 0 };
//     }
//     onButtonClick = () => {
//         this.setState({click: this.state.click + 1});
//     }
//     render() {
//         console.log('click', this.state.click);
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <button onClick={this.onButtonClick}>Click</button>
//             </div>
//         )
//     }
// }
const Header = (props) => {
    const [click, setClick] = useState(0);
    const [trigger, setTrigger] = useState(0);
    useEffect(()=>{
        console.log('click useEffect trigger', click)
    },[trigger])
    useEffect(()=>{
        console.log('click useEffect title', click)
    },[props.title])
    const onButtonClick = () => {
        setClick(click + 1);
        if (click % 5 == 0) {
            setTrigger(trigger + 1);
        }
    }
    console.log('click', click);
    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={onButtonClick}>Click</button>
        </div>
    )
}
export default Header;