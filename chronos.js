/*
 * Version: 0.1.2 - Clara Oswald
 * Created by: João Gabriel Theodoro
 * Date: 2020-12-30
 */

function Chronos(
  { formatDate, lang } = {
    formatDate: 'yyyy-mm-dd',
    lang: 'en-US',
  }
) {
  const date = new Date();

  const returnStyle = (style) => (style !== '' ? style : 'text-align: center');

  const formatUnitTime = (unit) => (unit > 9 ? unit : `0${unit}`);

  const formatTime = (h = 0, m = 0, s = 0, format = 'hh:mm:ss') => {
    const clock = [formatUnitTime(h), formatUnitTime(m), formatUnitTime(s)];

    return format
      .split(':')
      .map((_, index) => clock[index])
      .join(':');
  };

  const clockDisplay = (
    h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds()
  ) => {
    const unitsTime = [h, m, s];

    return formatTime(unitsTime[0], unitsTime[1], unitsTime[2]);
  };

  const validateUnitGraterThanZero = (seconds, minutes, hours, days) => {
    let unitTime = 0;
    if (seconds > 0) unitTime = seconds * 1000;
    if (minutes > 0) unitTime = minutes * 60 * 1000;
    if (hours > 0) unitTime = hours * 60 * 60 * 1000;
    if (days > 0) unitTime = days * 24 * 60 * 60 * 1000;
    return unitTime;
  };

  const getDateFormatted = (template, time = []) => {
    let currentDate = '';
    switch (template) {
      case 'yyyy-mm-dd':
        currentDate = `${time[0]}-${time[1]}-${time[2]}`;
        break;
      case 'dd-mm-yyyy':
        currentDate = `${time[2]}-${time[1]}-${time[0]}`;
        break;
      case 'yy-mm-dd':
        currentDate = `${time[0].toString().slice(2)}-${month}-${day}`;
        break;
      case 'dd-mm-yy':
        currentDate = `${time[2]}-${time[1]}-${time[0].toString().slice(2)}`;
        break;
      case 'yyyy/mm/dd':
        currentDate = `${time[0]}/${time[1]}/${time[2]}`;
        break;
      case 'dd/mm/yyyy':
        currentDate = `${time[2]}/${time[1]}/${time[0]}`;
        break;
      case 'yy/mm/dd':
        date = `${time[0].toString().slice(2)}/${time[1]}/${time[2]}`;
        break;
      case 'dd/mm/yy':
        date = `${time[2]}/${time[1]}/${time[0].toString().slice(2)}`;
        break;
      default:
        throw 'Bed format date';
    }
    return currentDate;
  };

  const getCalendarMonthName = (lang = 'en-US') => {
    if (lang !== 'pt-BR' && lang !== 'en-US')
      throw 'Language setted not exists';

    const monthNames = [
      lang === 'en-US' ? 'January' : lang === 'pt-BR' ? 'Janeiro' : '',
      lang === 'en-US' ? 'February' : lang === 'pt-BR' ? 'Fevereiro' : '',
      lang === 'en-US' ? 'March' : lang === 'pt-BR' ? 'Março' : '',
      lang === 'en-US' ? 'April' : lang === 'pt-BR' ? 'Abril' : '',
      lang === 'en-US' ? 'May' : lang === 'pt-BR' ? 'Maio' : '',
      lang === 'en-US' ? 'June' : lang === 'pt-BR' ? 'Junho' : '',
      lang === 'en-US' ? 'July' : lang === 'pt-BR' ? 'Julho' : '',
      lang === 'en-US' ? 'August' : lang === 'pt-BR' ? 'Agosto' : '',
      lang === 'en-US' ? 'September' : lang === 'pt-BR' ? 'Setembro' : '',
      lang === 'en-US' ? 'October' : lang === 'pt-BR' ? 'Outubro' : '',
      lang === 'en-US' ? 'November' : lang === 'pt-BR' ? 'Novembro' : '',
      lang === 'en-US' ? 'December' : lang === 'pt-BR' ? 'Dezembro' : '',
    ];

    return monthNames[date.getMonth()];
  };

  const getCalendarDayName = (lang = 'en-US') => {
    if (lang !== 'pt-BR' && lang !== 'en-US')
      throw 'Language setted not exists';

    let daysName = [
      lang === 'en-US' ? 'Sunday' : lang === 'pt-BR' ? 'Domigo' : '',
      lang === 'en-US' ? 'Monday' : lang === 'pt-BR' ? 'Segunda-feira' : '',
      lang === 'en-US' ? 'Tuesday' : lang === 'pt-BR' ? 'Terça-feira' : '',
      lang === 'en-US' ? 'Wednesday' : lang === 'pt-BR' ? 'Quarta-feira' : '',
      lang === 'en-US' ? 'Thursday' : lang === 'pt-BR' ? 'Quinta-feira' : '',
      lang === 'en-US' ? 'Friday' : lang === 'pt-BR' ? 'Sexta-feira' : '',
      lang === 'en-US' ? 'Saturday' : lang === 'pt-BR' ? 'Sabado' : '',
    ];

    return daysName[date.getDay()];
  };

  const createChronos = ({
    setYear = (year) => date.setFullYear(year),
    setMonth = (month) => date.setMonth(month),
    setDay = (day) => date.setDate(day),
    setHours = (hours) => date.setHours(hours),
    setMiniutes = (minutes) => date.setHours(minutes),
    setSeconds = (seconds) => date.setSeconds(seconds),
    getYear = () => date.getFullYear(),
    getMonth = () => date.getMonth(),
    getDay = () => date.getDate(),
    getMonthName = () => getCalendarMonthName(lang),
    getDayName = () => getCalendarDayName(lang),
    getHours = () => date.getHours(),
    getMinutes = () => date.getMinutes(),
    getSeconds = () => date.getSeconds(),
    getStringDate = () =>
      getDateFormatted(formatDate, [getYear(), getMonth(), getDay()]),
    getStringHours = () => formatTime(getHours(), getMinutes(), getSeconds()),
    executeTask = (
      taskName = '',
      task = () => {},
      { seconds, minutes, hours, days } = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
      }
    ) => {
      const taskTime = validateUnitGraterThanZero(
        seconds,
        minutes,
        hours,
        days
      );
      console.log(`\x1b[34m[${taskName}] in progress..\x1b[0m`);
      setTimeout(() => {
        task();
        console.log(`\x1b[32m[${taskName}] finished task. \x1b[0m`);
      }, taskTime);
    },
    digitalClock = function (
      elementSelector,
      { clockStyle = '', displayStyle = '', dateStyle = '' } = {
        clockStyle: '',
        displayStyle: '',
        dateStyle: '',
      }
    ) {
      const element = document.querySelector(elementSelector);
      element.setAttribute('style', displayStyle);

      if (element) {
        element.innerHTML = `
           <p style="${returnStyle(clockStyle)}">00:00:00</p>
           <p style="${returnStyle(
             dateStyle
           )}"><strong>0000-00-00 - Day</strong></p>
        `;
        setInterval(function () {
          element.innerHTML = `<p style="${returnStyle(
            clockStyle
          )}">${clockDisplay()}</p>
            <p style="${returnStyle(dateStyle)}">${getDateFormatted(
            formatDate,
            [getYear(), getMonth(), getDay()]
          )} - ${getCalendarDayName(lang)}</p>
          `;
        }, 1000);
      }
    },
    showVersion = () => {
      const style = `
        background-color: #1a1a1a;
        color: #fff;
        padding: 50px;
        font-family: Verdana, Helvetica, sans-serif;
        font-size: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 40px;
      `;

      document.querySelector('body').innerHTML = `
        <div class="chronos-version" style="${style}">
          <h1 style="color: #699">Chronos 0.1.2 Clara Oswald &#8986;</h1>
          <p>
           The time accessory to 
           <strong style="color: #fd0">JavaScript</strong>
          </p>
          <p style="color: #79f">Updated: 2020-12-30<p>
          <h2 style="color: #990012">Changelog</h2>
          <p>
            This version improves the bugs of the old "0.1.1 River Song", besides of course bringing new features,<br /> 
            like the addition of two new functions, as described below.
          </p>
          <h2 style="color: #9d0">New features</h2>
          <table>
            <thead>
              <th>Name new function</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr>
                <td>executeTask</td>
                <td>Used to execute a task</td>
              </tr>
              <tr>
                <td>showVersion</td>
                <td>Used to show this version</td>
              </tr>
            </tbody>
          </table>
         <p><h3><strong>That's all, folks!</strong></h3></p>
        </div>
      `;

      console.log(`\x1b[32mChronos 0.1.2 Clara Oswald \x1b[0m`);
      console.log(`\x1b[34mThe time accessorie to \x1b[33mJS \x1b[0m`);
      console.log(`\x1b[35mBy Joao Gabriel Theodoro - JT \x1b[0m`);
      console.log(`\x1b[31mUpdated: 2020-12-30 \x1b[0m`);
    },
  } = {}) => {
    return {
      setYear,
      setMonth,
      setDay,
      setHours,
      setMiniutes,
      setSeconds,
      getYear,
      getMonth,
      getDay,
      getMonthName,
      getDayName,
      getHours,
      getMinutes,
      getSeconds,
      getStringDate,
      getStringHours,
      executeTask,
      digitalClock,
      showVersion,
    };
  };

  const chronos = createChronos();
  this.setYear = chronos.setYear;
  this.setMonth = chronos.setMonth;
  this.setDay = chronos.setDay;
  this.setHours = chronos.setHours;
  this.setMiniutes = chronos.Miniutes;
  this.setSeconds = chronos.tSeconds;
  this.getYear = chronos.getYear;
  this.getMonth = chronos.getMonth;
  this.getDay = chronos.getDay;
  this.getMonthName = chronos.getMonthName;
  this.getDayName = chronos.getDayName;
  this.getHours = chronos.getHours;
  this.getMinutes = chronos.getMinutes;
  this.getSeconds = chronos.getSeconds;
  this.getStringDate = chronos.getStringDate;
  this.getStringHours = chronos.getStringHours;
  this.executeTask = chronos.executeTask;
  this.digitalClock = chronos.digitalClock;
  this.showVersion = chronos.showVersion;
}

Chronos.isLeapYear = function (year = new Date().getFullYear()) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
    ? true
    : false;
};
