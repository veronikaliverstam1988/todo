import React, { Component } from "react";


class TodoItems extends Component {
    render(){
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map((item, index) => {
            return (
                <li key={index}>
                    <input type='checkbox' checked={item.checked} onClick={() => this.props.marked(index)}/>
                    <span className={item.checked ? 'checkeditem' : 'notcheckeditem'}>{item.text}</span>
                    <button onClick={()=> this.props.delete(index)}>&#128465;</button>
                </li>
            )
        });



        return (
            <div>
                <ul className="theList">
                    {listItems}
                </ul>
                <button id="remove" className={'remove'} onClick={() => this.props.deleteDone()}> Remove all done</button>
            </div>
        );
    }
}

export default TodoItems;

// &#128465;</button></li>});

//return <li key={item.key}><input type="checkbox" onClick={this.props.markedItems}/>{item.text}<button onClick={() => this.delete(item.key)}>
//    &#128465;</button></li>