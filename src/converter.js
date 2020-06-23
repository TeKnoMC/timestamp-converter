import React from 'react';
import { DateTypeEnum, TimeConverter } from './timeconverter'

export class Converter extends React.Component {
    state = {
        dateInteger: 0,
        dateType: DateTypeEnum.EPOCH_SECONDS,
        dateStr: ""
    }

    updateState = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;

        let newState = this.state;

        newState[fieldName] = value;
        newState.dateStr = TimeConverter.decode(newState.dateType, newState.dateInteger);

        this.setState(newState);
    }

    render() {
        return (
            <div>
                 <form>
                    <label htmlFor="integer">Value:</label>
                    <input 
                        type="number"
                        name="dateInteger"
                        id="dateInteger"
                        value={this.state.dateInteger}
                        onChange={this.updateState}
                    />
                    <select name="dateType" id="dateType" onChange={this.updateState}>
                        <option value={DateTypeEnum.EPOCH_SECONDS}>Unix Time (Seconds since unix epoch)</option>
                        <option value={DateTypeEnum.EPOCH_MILLISECONDS}>Unix Milliseconds (Milliseconds since unix epoch)</option>
                        <option value={DateTypeEnum.EPOCH_MICROSECONDS}>Unix Microseconds (Microseconds since unix epoch)</option>
                        <option value={DateTypeEnum.CHROME}>Google Chrome Timestamp</option>
                    </select>
                </form>
            <p>{this.state.dateStr}</p>
            </div>
        );
    }
}