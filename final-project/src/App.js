import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddSubscriber, EditSubscriber, Footer, Header, Sidebar, SubscriberTable } from './components';

const api = "./models/subscribers.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subscriberList: [] }
  }

  componentDidMount() {
    fetch(api)
      .then(res => res.json())
      .then(data => this.setState({ subscriberList: data }))
      .catch(err => console.log(err))
  }

  deleteSubscriber = (id) => {
    const subscriberList = [...this.state.subscriberList];
    let index = subscriberList.findIndex(s => s.id === id);
    if (index) {
      subscriberList.splice(index, 1);
      this.setState({ subscriberList });
    }
  }

  addSubscriber = (newSubscriber) => {
    this.setState(previousState => ({
      subscriberList: [...previousState.subscriberList, newSubscriber]
    }), () => console.log('adding this subscriber', this.state.subscriberList));
  }

  updateSubscriber = (id, updatedSubscriber) => {
    this.setState(previousState => ({
      subscriberList: previousState.subscriberList.map(sub => sub.id === id ? { ...sub, ...updatedSubscriber } : sub)
    }))
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/subscribers' element={<SubscriberTable subscriberList={this.state.subscriberList} deleteSubscriber={this.deleteSubscriber}></SubscriberTable>}></Route>
            <Route path='/add-new-subscriber' element={<AddSubscriber addSubscriber={this.addSubscriber}></AddSubscriber>}></Route>
            <Route path='/edit/:id' element={<EditSubscriber subscriberList={this.state.subscriberList} updateSubscriber={this.updateSubscriber}></EditSubscriber>}></Route>
            <Route path='/about.html' element={<h1>About Me</h1>}/>
            <Route path='*' element={<h1>Oops... not found!</h1>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;