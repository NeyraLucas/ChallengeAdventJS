/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
    const isoFromTime = cleanElfoTime(fromTime);
    const isoTakeOffTime = cleanElfoTime(takeOffTime);

    const dateFrom = new Date(isoFromTime);
    const dateTakeOff = new Date(isoTakeOffTime);

    const diffMs = dateTakeOff.getTime() - dateFrom.getTime();

    const diffSeconds = Math.floor(diffMs / 1000);
    console.log(diffSeconds);

    return diffSeconds;
}

function cleanElfoTime(elfoTime) {
    const isoLike = elfoTime
        .replace(/\*/g, '-')
        .replace('@', 'T')
        .replace(/\|/g, ':');
    const isoFormat = isoLike.replace(' NP', '').trim() + '.000Z';
    return isoFormat;
}

const takeoff = '2025*12*25@00|00|00 NP'

timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
