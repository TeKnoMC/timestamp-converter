import React from 'react';
import { DateTypeEnum, TimeConverter } from './timeconverter'

const TimestampOutput = (props) => {
    return <p>Output: {props.dateStr}</p>
}

const TimestampInput = (props) => {
    return (
        <form>
            <label htmlFor="integer">Value:</label>
            <input 
                type="number"
                name="dateValue"
                id="dateValue"
                value={props.dateValue}
                onChange={props.updateMethod}
            />
            <label htmlFor="dateType">Timestamp Format:</label>
            <select name="dateType" id="dateType" onChange={props.updateMethod}>
                <option value={DateTypeEnum.EPOCH_SECONDS}>Unix Time (Seconds since unix epoch)</option>
                <option value={DateTypeEnum.EPOCH_MILLISECONDS}>Unix Milliseconds (Milliseconds since unix epoch)</option>
                <option value={DateTypeEnum.EPOCH_MICROSECONDS}>Unix Microseconds (Microseconds since unix epoch)</option>
                <option value={DateTypeEnum.CHROME}>Google Chrome Timestamp</option>
            </select>
        </form>
    );
}

export class Converter extends React.Component {
    state = {
        dateValue: "0",
        dateType: DateTypeEnum.EPOCH_SECONDS,
        dateStr: ""
    }

    updateState = (event) => {
        // Event data
        const fieldName = event.target.name;
        const value = event.target.value;

        let newState = this.state;

        // Add changed state + decode with new data
        newState[fieldName] = value;
        newState.dateStr = TimeConverter.decode(newState.dateType, parseInt(newState.dateValue));

        this.setState(newState);
    }

    render() {
        return (
            <div class="window">
                <TimestampInput dateValue={this.state.dateValue} updateMethod={this.updateState}/>
                <TimestampOutput dateStr={this.state.dateStr} />
            </div>
        );
    }
}