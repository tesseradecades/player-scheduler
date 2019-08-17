import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Scheduler extends React.Component{
    state={ 
        players : [],
        startDate: new Date(),
        weeks:0
    }

    addPlayer = ()=>{
        this.setState(state=>{
            const list = state.players.push('');
            return{list}
        });
    }

    assignStart = (date) =>{
        this.setState({startDate:date});
    }

    assignWeeks = (numWeeks)=>{
        this.setState({weeks:numWeeks});
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
                            onChange={this.assignWeeks}/> weeks                       
                    </div>
                    <label>Players</label>
                    <ol className="list-group">
                        {
                            this.state.players.map(player=>(
                                    <li key={player}><input value={player}></input></li>
                                )
                            )
                        }
                    </ol>
                    <button onClick={this.addPlayer}>Add Player</button>
                </div>
            </div>


            
        )
    }
}

export default Scheduler