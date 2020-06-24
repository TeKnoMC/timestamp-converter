export const DateTypeEnum = {
    EPOCH_SECONDS: "epoch_seconds",
    EPOCH_MILLISECONDS: "epoch_milliseconds",
    EPOCH_MICROSECONDS: "epoch_microseconds",
    CHROME: "chrome"
};

export class TimeConverter {
    static _formatTimestamp(value) {
        return {
            utc: new Date(value).toLocaleString("en-GB", { timeZone: "UTC", timeZoneName: "short" }),
            local: new Date(value).toLocaleString("en-GB", { timeZoneName: "short" })
        };
    }

    static epochSecondsDecode(value) {
        return this._formatTimestamp(value*1000);
    }

    static epochMillisecondsDecode(value) {
        return this._formatTimestamp(value);
    }

    static epochMicrosecondsDecode(value) {
        return this._formatTimestamp(value/1000);
    }

    static chromeDecode(value) {
        return this._formatTimestamp((value - 11644473600000000)/1000);
    }

    static decode(dateType, value) {
        switch (dateType) {
            case DateTypeEnum.EPOCH_SECONDS:
                return this.epochSecondsDecode(value);
            case DateTypeEnum.EPOCH_MILLISECONDS:
                return this.epochMillisecondsDecode(value);
            case DateTypeEnum.EPOCH_MICROSECONDS:
                return this.epochMicrosecondsDecode(value);
            case DateTypeEnum.CHROME:
                return this.chromeDecode(value);
            default:
                console.log("Error in timeconverter.js: unknown date type selected");
                break;
        }
    }
}