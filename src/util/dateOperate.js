const addZero = (num) => {
  return num > 9 ? num : '0' + num;
}

export const getStandardDate = (Date, sign = '-') => {
  if (typeof Date === 'string') return Date;
  return Date.getFullYear() + sign + addZero(Date.getMonth() + 1) + sign + addZero(Date.getDate()) + ' ' + Date.toTimeString().split(' ')[0];
}

export const getFullNow = (n = 0, sign = '-') => { // n为天数 +1 -1
  const now = new Date();
  let milliSec = now.getTime();
  milliSec += n * 1000 * 60 * 60 * 24;
  now.setTime(milliSec);
  return now.getFullYear() + sign + addZero(now.getMonth() + 1) + sign + addZero(now.getDate());
}
