import React from 'react';
import './App.css';
import hobbies from './models/hobbies.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutMe, AddSubscriber, EditSubscriber, Footer, Header, HobbyList, HobbyDetail, HomePage, NotFound, Origin, Sidebar, SubscriberTable } from './components';

const api = "./models/subscribers.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subscriberList: []}
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
          <Header />
          <Sidebar />
          <HomePage />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/subscribers' element={<SubscriberTable subscriberList={this.state.subscriberList} deleteSubscriber={this.deleteSubscriber}></SubscriberTable>} />
            <Route path='/add-new-subscriber' element={<AddSubscriber addSubscriber={this.addSubscriber}></AddSubscriber>} />
            <Route path='/edit/:id' element={<EditSubscriber subscriberList={this.state.subscriberList} updateSubscriber={this.updateSubscriber}></EditSubscriber>} />
            <Route path='/about.html' element={<AboutMe />}/>
            <Route path='/origin.html' element={<Origin />} />
            <Route path='/hobbies.html' element={<HobbyList items={hobbies}/>} />
            <Route path='/hobby/:id' element={<HobbyDetail items={hobbies}/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;