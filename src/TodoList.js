import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.onRemoveDone = this.onRemoveDone.bind(this);

    }


    addItem(e) {
        if (this._inputElement.value.trim() !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                checked:false
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";

        }

        e.preventDefault();

    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter((item, i) => key !== i);
        this.setState({items: filteredItems});

    }

    markTodoDone(i) {
        const markedItems = this.state.items.map((item, index) => i === index ? {...item, checked: !item.checked}: item);
        this.setState({items: markedItems});

    }

    onRemoveDone() {
        const newState = this.state.items.filter((item) => {if (!item.checked) return item});
        this.setState({items: newState});
    }


    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={(e) => this.deleteItem(e)}
                           marked={(index) => this.markTodoDone(index)}
                           deleteDone={() => this.onRemoveDone()}

                />

            </div>
        );
    }
}



export default TodoList;
