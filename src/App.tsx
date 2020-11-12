import React,{Component} from 'react';
import { Form, Input } from './input';
import Number from './Number';

interface IState {
  counter:number;
  name:string;
}

class App extends Component<{}, IState> {
  
  state = {
    counter: 0,
    name:""
  };
  
  add = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target)
  }
  
  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  render() {
    const {counter, name} = this.state;
    return (
      <>
        <div>
          <Form onFormSubmit={this.onFormSubmit}>
            <Input value={name} onChange={this.onChange}/>
          </Form>
        </div>
        <div><Number count={counter}/><button onClick={this.add}>Add</button></div>
      </>
    );
  }
}

export default App;
