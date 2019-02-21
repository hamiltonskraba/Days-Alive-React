import React from 'react';
import ReactDOM from 'react-dom';
import BirthdayForm from './BirthdayForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      daysAlive: null,
      tenKDay: null,
      twenKDay: null,
    }
  }
  
  calcDate = (day, month, year) => {
    var today = new Date();
    var bDay = new Date(day, month, year);
    var tenKDay = new Date(0);
    //console.log(today.toString());
    //console.log(bDay.toString());
    
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const TENK_DAY = ONE_DAY * 10000;

    // Convert both dates to milliseconds
    var date1_ms = today.getTime();
    var date2_ms = bDay.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days 
    var daysAlive = Math.round(difference_ms/ONE_DAY);
    console.log(daysAlive);

    
    if(daysAlive > 9999){
      tenKDay.setTime(date2_ms + TENK_DAY);
      console.log(tenKDay.toString());
    }
 
    this.setState({daysAlive: daysAlive});
    this.setState({tenKDay: tenKDay.toDateString()});
  }

  render10K () {
  	if(this.state.tenKDay === null){
  		return null;
  	} else{
  		return(
  		<div>
          	<h4>10,000th Day</h4>
          	<p>{this.state.tenKDay}</p>
        </div>
  		);
  	}
  }
  
  render() {
    return(
        <div>
          <div className="container">
              <div className="jumbotron text-center">
                  <h1>Days Alive Calculator!</h1>
              </div>
              <div className="row">
                <div className="col-5 bdayForm">
                  <BirthdayForm onSubmit={this.calcDate}/>
                </div>
                <div className="col">
                </div>
                <div className="col-6 results">
                  <h2>Results</h2>
                  <h4>Days Alive</h4>
                  <p>{this.state.daysAlive}</p>
                  {this.render10K()}
                </div>
              </div>
         </div>
      </div>
    );
  }
}

export default App;