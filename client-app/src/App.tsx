import React, {Component} from 'react';
import './App.css';
import {Header, Icon, List} from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {

  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then(res => {
      this.setState({
        values: res.data
      })
    })
    
  }

  render() {
    return (
    <div className="App">
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>
        <List>
          {this.state.values.map((el: any) => (<List.Item key={el.id}>{el.name}</List.Item>))}
        </List>
    </div>
  );
  }
  
}

export default App;
