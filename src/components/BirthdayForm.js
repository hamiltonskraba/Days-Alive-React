import React from 'react';
import ReactDOM from 'react-dom';

class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        year: null,
        month: null,
        day: null
    }
    // this.setMonth = this.setMonth.bind(this);
    // this.setDay = this.setDay.bind(this);
    // this.setYear = this.setYear.bind(this);
  }
  
  setMonth = (e) => {
    this.setState({ month: e.target.value}, function () {
     //console.log('after change: ', this.state.month);
    });
  }
  
  setDay = (e) => {
    this.setState({day: e.target.value}, function () {
     //console.log('after change: ', this.state.day);
    });
  }
  
  setYear = (e) => {
    this.setState({year: e.target.value}, function () {
      //console.log('after change: ', this.state.year);
    });
  }
  
  onFormSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.onSubmit(this.state.year, this.state.month, this.state.day);
  }
  
  render(){
    const daysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysRendered = daysArr.map((day) => <option key={'day' + day} value={day}>{day}</option>);

    const yearsArr = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998 , 1997 , 1996 , 1995 , 1994 , 1993 , 1992, 1991, 1990, , 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1956];
    let yearsRendered = yearsArr.map((year, i) => <option key={i} value={year}>{year}</option>);
    
    return(
      <div>
        <h2>Enter your birthday</h2>
      <div className="row">
        <div id="form">
            <form onSubmit={this.onFormSubmit}>
                <label>Month </label>
                  <select onChange={this.setMonth.bind(this)} value={this.state.month}>
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                  </select><br />
                <label>Day</label>
                  <select onChange={this.setDay.bind(this)} value={this.state.day}>
                    {daysRendered}
                  </select><br />
                <label>Year</label>
                 <select onChange={this.setYear.bind(this)} value={this.state.year}>
                    {yearsRendered}
                 </select><br />
                <button className="btn">Submit</button>
              <h3>{this.state.month} - {this.state.day} , {this.state.year}</h3>
             </form>
          </div>
      </div>
      </div>
    );
  }
}

export default BirthdayForm;