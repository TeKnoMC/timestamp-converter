export const DateTypeEnum = {
    EPOCH_SECONDS: "epoch_seconds",
    EPOCH_MILLISECONDS: "epoch_milliseconds",
    EPOCH_MICROSECONDS: "epoch_microseconds",
    CHROME: "chrome"
};

export class TimeConverter {
    // Have specific conversion methods
    // + General method with switch on DateTypeEnum supplied

    static decode(dateType, value) {
        switch (dateType) {
            case DateTypeEnum.EPOCH_SECONDS:
                return `Epoch seconds ${value}`;
            case DateTypeEnum.EPOCH_MILLISECONDS:
                return `Epoch milliseconds ${value}`;
            case DateTypeEnum.EPOCH_MICROSECONDS:
                return `Epoch microseconds ${value}`;
            case DateTypeEnum.CHROME:
                return `Chrome date ${value}`;
        }
    }
}