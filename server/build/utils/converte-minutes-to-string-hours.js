"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesToStringHours = void 0;
function convertMinutesToStringHours(minutesAmount) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padEnd(2, '0')}`;
}
exports.convertMinutesToStringHours = convertMinutesToStringHours;
