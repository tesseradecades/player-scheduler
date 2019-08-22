import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Scheduler extends React.Component{
    state={ 
        players : '',
        startDate: new Date(),
        weeks:0,
        offPlayers:0
    }

    assignStart = (e) =>{
        this.setState({startDate:e.target.value});
    }

    assignWeeks = (e)=>{
        this.setState({weeks:e.target.value});
    }

    submitParams = () =>{
        console.log(`Start ${this.state.startDate}`);
        console.log(`Weeks ${this.state.weeks}`);
        console.log(`Players ${this.state.players}`);
        console.log(`Off Players ${this.state.offPlayers}`);
        fetch('/hello').then(response => 
            response.json().then(data => {
                console.log(data);
            })
        );
    }

    updateOffPlayers = (e) =>{
        this.setState({offPlayers:e.target.value});
    }

    updatePlayers = (e) =>{
        this.setState({players:e.target.value});
    }

    render(){
        return (
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title">Welcome to the Player Scheduler</h5>
                </div>
                <div className="card-body">
                    <label className="card-text" htmlFor="startDatePicker">When does the campaign begin?</label>
                    <div className="input-group mx-auto mb-3">
                        <DatePicker 
                            id="startDatePicker"
                            selected={this.state.startDate}
                            onChange={this.assignStart}
                            placeholderText="Start date"/>
                    </div>
                    <label htmlFor="weeksInput">How long will the campaign last</label>
                    <div className="input-group">
                        <input 
                            id="weeksInput"
                            value={this.state.weeks}
                            onChange={this.assignWeeks}
                            placeholder="number of weeks"/> weeks                       
                    </div>
                    <label htmlFor="players">Players</label>
                    <div className="input-group">
                        <input
                            id="players"
                            value={this.state.players}
                            onChange={this.updatePlayers}
                            placeholder="player names"/>
                    </div>
                    <label htmlFor="offPlayers">Number of players off in a week</label>
                    <div className="input-group">
                        <input
                                id="offPlayers"
                                value={this.state.offPlayers}
                                onChange={this.updateOffPlayers}/>
                    </div>
                    <button onClick={this.submitParams}>Submit</button>
                </div>
            </div>


            
        )
    }
}

export default Scheduler