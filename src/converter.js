import React from 'react';
import { DateTypeEnum, TimeConverter } from './timeconverter'

const TimestampOutput = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Timezone</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>UTC</td>
                    <td>{props.readableDates.utc}</td>
                </tr>
                <tr>
                    <td>Local</td>
                    <td>{props.readableDates.local}</td>
                </tr>
            </tbody>
        </table>
    );
}

const TimestampInput = (props) => {
    const dropdownOptions = props.timestamps.map((timestampObj, idx) => {
        return <option value={timestampObj.value} key={idx}>{timestampObj.friendlyName}</option>;
    });

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
        <select name="dateType" id="dateType" onChange={props.updateMethod}>{dropdownOptions}</select>
        </form>
    );
}

export class Converter extends React.Component {
    state = {
        dateValue: "0",
        dateType: DateTypeEnum.EPOCH_SECONDS,
        readableDates: {
            utc: "",
            local: ""
        }
    }

    timestamps = [
        {
            value: DateTypeEnum.EPOCH_SECONDS,
            friendlyName: "Unix Time (Seconds since unix epoch)"
        },
        {
            value: DateTypeEnum.EPOCH_MILLISECONDS,
            friendlyName: "Unix Milliseconds (Milliseconds since unix epoch)"
        },
        {
            value: DateTypeEnum.EPOCH_MICROSECONDS,
            friendlyName: "Unix Microseconds (Microseconds since unix epoch)"
        },
        {
            value: DateTypeEnum.CHROME,
            friendlyName: "WebKit / Google Chrome Timestamp"
        }
    ]

    updateState = (event) => {
        // Event data
        const fieldName = event.target.name;
        const value = event.target.value;

        let newState = this.state;

        // Add changed state + decode with new data
        newState[fieldName] = value;
        newState.readableDates = TimeConverter.decode(newState.dateType, parseInt(newState.dateValue));

        this.setState(newState);
    }

    render() {
        return (
            <div id="window">
                <TimestampInput dateValue={this.state.dateValue} updateMethod={this.updateState} timestamps={this.timestamps} />
                <TimestampOutput readableDates={this.state.readableDates} />
            </div>
        );
    }
}