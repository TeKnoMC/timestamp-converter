export const DateTypeEnum = {
    EPOCH_SECONDS: "epoch_seconds",
    EPOCH_MILLISECONDS: "epoch_milliseconds",
    EPOCH_MICROSECONDS: "epoch_microseconds",
    CHROME: "chrome"
};

export class TimeConverter {
    static epochSecondsDecode(value) {
        return new Date(value*1000).toString();
    }

    static epochMillisecondsDecode(value) {
        return new Date(value).toString();
    }

    static epochMicrosecondsDecode(value) {
        return new Date(value/1000).toString();
    }

    static chromeDecode(value) {
        
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
                return `Chrome date ${value}`;
            default:
                console.log("Error in timeconverter.js: unknown date type selected");
                break;
        }
    }
}