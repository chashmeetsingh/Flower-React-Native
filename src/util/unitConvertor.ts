const KILOS_IN_POUNDS = 0.453592;
const METERS_IN_CENTIMETERS = 0.1;
export enum Metrics {
    KG='KG',
    CM='CM',
    POUNDS='POUNDS',
    METERS='METERS'
}

export function convertToWeightMetricUnits(weight:number) {
    return parseInt((weight/KILOS_IN_POUNDS).toFixed(2));
}

export function convertToHeightMetricUnits(height:number) {
    return parseInt((height/METERS_IN_CENTIMETERS).toFixed(2));
}