import React, { Component } from 'react';
import Header from './header';
import HandleResponse from './handleResponse';
import Footer from './footer';
import Form from './form';
import './index.css';

class flightSearch extends Component {
  constructor() {
    super();
    this.state = {
      response: '',
      success: false,
      return_date: '',
      departure_city: '',
      destination_city: '',
      no_of_adult: '',
      no_of_child: '',
      no_of_infant: '',
      departure_date: '',
      cabin: '',
      errorResponse: '',
    };
    this.URL = 'https://flight-project-app.herokuapp.com/v1/flight/search-flight';
    this.CONTENT_TYPE = 'application/json';
    this._isMounted = false;
  }
  fetchOption = (data) => {
    return {
      headers: { 'content-type': this.CONTENT_TYPE, 'Access-Control-Allow-Origin': '*' },
      method: 'POST',
      body: JSON.stringify(data),
    };
  };
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  checkResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  };
  timeOutHandler = () => {
    const input = document.getElementById('bk-flight-response');
    if (input) {
      input.style.display = 'none';
    }
    setTimeout(this.timeOutHandler, 20000);
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
  }
  removeParameter = ({ success, response, errorResponse, ...others }) => {
    return others;
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    const body = this.removeParameter(this.state);
    fetch(this.URL, this.fetchOption(body))
      .then((response) => this.checkResponse(response))
      .then((data) => {
        this.setState({ response: data, success: false });
        return;
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ errorResponse: { ...body }, success: false });
        });
      });
    this.setState({ success: true });
  };
  render() {
    const { errorResponse } = this.state;
    const response = HandleResponse(errorResponse);
    const submitText = !this.state.success ? 'Search Now' : 'Please wait ...';
    return (
      <>
        <Header title='Flight Search' />
        {response ? <div id='bk-flight-response'>{response}</div> : null}
        <Form
          onSubmit={this.onSubmitHandler}
          Onchange={this.onChangeHandler}
          submitText={submitText}
          no_of_adult={this.state.no_of_adult}
          destination_city={this.state.destination_city}
          departure_city={this.state.departure_city}
          return_date={this.state.return_date}
          no_of_child={this.state.no_of_child}
          no_of_infant={this.state.no_of_infant}
          departure_date={this.state.departure_date}
          cabin={this.state.cabin}
        />
        <Footer />
      </>
    );
  }
}

export default flightSearch;
