import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Scheduler extends React.Component{
    state={ 
        players : [],
        startDate: new Date()
    }

    assignStart = (date) =>{
        this.setState({startDate:date});
        console.log(this.state.startDate);
    }

    render(){
        return (
            <div className="card text-center">
                <div className="card-header">
                    Welcome to the Belaheim Player Scheduler
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <label for="startDatePicker">When does the campaign start?</label>
                        <DatePicker 
                            id="startDatePicker"
                            selected={this.state.startDate}
                            onChange={this.assignStart}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Scheduler