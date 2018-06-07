import { getMinMaxNumbers } from './../array-operations';
import max from 'date-fns/max';
import min from 'date-fns/min';
import differenceInDays from 'date-fns/difference_in_days';
import { findDeep } from './../object-utils';
/**
 * @note: prevent retrieving range multiple times,
 * where data and requested prop is the same
 */
let minMaxCache: Object = {};

/**
 * get range when incoming property is of type Date
 * @param {any[]} data all data
 * @param {string} property property of data to retrieve range from
 * @return {[number, number]} where first index is minValue, and 2nd maxValue
 */
function getMinMaxTypeNumber(data: any[], property: string): number[]|null {
    if (!minMaxCache[property]) {
        const numbers = data.map((value) => {
            return Number(value[property]);
        });

        minMaxCache[property] = getMinMaxNumbers( ...numbers );
    }

    return minMaxCache[property];
}

/**
 *
 * @param {any[]} data all data
 * @param {string} property property of data to retrieve range from
 * @param { String } value which will be parsed to a Date
 * @return {[number, number, number]} where first index is minValue, and 2nd maxValue and 3rd value as number not Date
 */
function getMinMaxValueTypeDate(data: Object[], property: string|string[], value: any): number[]|null {
    // @ts-ignore
    if (!minMaxCache[property]) {
        const dates = data.map((value) => {
            if (typeof property === 'string') {
                return new Date(value[property]);
            } else {
                return new Date(findDeep(value, property));
            }
        });

        const minDate = min( ...dates );
        const maxDate = max( ...dates );
        const diff = differenceInDays(maxDate, minDate);

        // @ts-ignore
        minMaxCache[property] = {
            minDate: minDate,
            maxDate: maxDate,
            range: diff
        };
    }

    // @ts-ignore
    const parsedValue = differenceInDays(minMaxCache[property].maxDate, new Date(value));
    // @ts-ignore
    return [0, minMaxCache[property].range, parsedValue];
}

/**
 * examines string length of given property
 * @param {any[]} data all data
 * @param {string} property property of data to retrieve range from
 * @return {number[]} where first index is minValue, and 2nd maxValue
 */
function getMinMaxTypeString(data: any[], property: string|string[]): number[]|null {
    let propValue = typeof property === 'string'
        ? property
        : findDeep(data[0], property);

    if (!minMaxCache[propValue]) {
        const numbers = data.map((value) => {
            if (typeof property === 'string') {
                return value[property].length;
            } else {
                return findDeep(value, property).length;
            }
        });

        minMaxCache[propValue] = getMinMaxNumbers( ...numbers );
    }

    return minMaxCache[propValue];
}

/**
 * maps a value relatively from a given range into another oth
 * e.g.: 5 in range 0 - 5 equals 100 in range 0 - 100
 *
 * @param {number} value
 * @param {number} in_min
 * @param {number} in_max
 * @param {number} out_min
 * @param {number} out_max
 * @return {number} mapped value
 */
function rangeMapper(value: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function clearMinMaxCache() {
    minMaxCache = {};
}

export {
    getMinMaxValueTypeDate,
    getMinMaxTypeNumber,
    getMinMaxTypeString,
    minMaxCache,
    rangeMapper,
    clearMinMaxCache
};