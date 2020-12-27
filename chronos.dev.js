/*
 * Version: 1.1 - River
 * Created by: João Gabriel Theodoro
 * Date: 2020-12-26
 * changelog: bugs fix, rename of functions and propertties
 */

Chronos.createErrorInterface = function ({
  name = 'Chronos',
  message = 'An error as ocurred',
  errorCode = 0,
} = {}) {
  const error = new Error(message);
  error.name = name;
  error.message = message;
  error.code = errorCode;

  throw `${error.name}: ${error.message} - code: ${error.code}`;
};

Chronos.createCalendarError = function ({
  message = 'An calendar error',
  errorCode = 0,
} = {}) {
  const name = 'Calendar';
  Chronos.createErrorInterface({
    name,
    message,
    errorCode,
  });
};

Chronos.createDigitalClock = function () {
  const formatClockDisplay = (
    h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds()
  ) => {
    const unitsTime = [h, m, s];

    const formatUnitsTime = (i) => (i < 10 ? `0${i}` : i);

    const clockFormatted = unitsTime.map(formatUnitsTime).join(':');

    return clockFormatted;
  };

  const setDOMElementSelector = (elementSelector = '#chronos', h, m, s) => {
    const element = document.querySelector(elementSelector);
    const formatted = formatClockDisplay(h, m, s);
    return {
      showDigitalClock() {
        if (element) {
          setInterval(function () {
            element.innerHTML =
              formatted === undefined || formatted === ''
                ? '00:00:00'
                : formatClockDisplay();
          }, 1000);
        }
      },
    };
  };

  return {
    setDOMElementSelector,
  };
};

Chronos.isLeapYear = function (year = new Date().getFullYear()) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
};

Chronos.diffDaysDate = function (
  initial_date = [
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ],
  end_date = [
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ]
) {
  const DAY = 24 * 3600 * 1000;
  const initial = new Date(initial_date[0], initial_date[1], initial_date[2]);
  const end = new Date(end_date[0], end_date[1], end_date[2]);

  const diff = Math.abs(initial - end);

  const days = Math.round(diff / DAY);

  return isNaN(days)
    ? Chronos.createCalendarError({
        errorCode: 2,
        message:
          'Invalid date calc! try ([year, month (0 to 11), day], [year (Number), month (0 to 11) (Number), day (Number)])',
      })
    : days;
};

Chronos.setDateTemplate = function (template, [day, month, year] = []) {
  let date = '';
  switch (template) {
    case 'yyyy-mm-dd':
      date = `${year}-${month}-${day}`;
      break;
    case 'dd-mm-yyyy':
      date = `${day}-${month}-${year}`;
      break;
    case 'yy-mm-dd':
      date = `${year.toString().slice(2)}-${month}-${day}`;
      break;
    case 'dd-mm-yy':
      date = `${day}-${month}-${year.toString().slice(2)}`;
      break;
    case 'yyyy/mm/dd':
      date = `${year}/${month}/${day}`;
      break;
    case 'dd/mm/yyyy':
      date = `${day}/${month}/${year}`;
      break;
    case 'yy/mm/dd':
      date = `${year.toString().slice(2)}/${month}/${day}`;
      break;
    case 'dd/mm/yy':
      date = `${day}/${month}/${year.toString().slice(2)}`;
      break;
    default:
      Chronos.createCalendarError({
        message: 'Bad date format',
        code: 1,
      });
      break;
  }
  return date;
};

Chronos.showDate = function ({
  template = 'yy-mm-dd',
  d = new Date().getDate(),
  m = new Date().getMonth(),
  y = new Date().getFullYear(),
} = {}) {
  const dateWithTemplate = Chronos.setDateTemplate(template, [d, m, y]);
  return dateWithTemplate;
};

Chronos.prototype.calendarInterface = function ({
  day = new Date().getDate(),
  month = new Date().getMonth() + 1,
  year = new Date().getFullYear(),
  calendarTemplate = 'yyyy-mm-dd',
  date = Chronos.setDateTemplate(calendarTemplate, [
    (day = new Date().getDate()),
    (month = new Date().getMonth()),
    (year = new Date().getFullYear()),
  ]),
} = {}) {
  return {
    day,
    month,
    year,
    calendarTemplate,
    date,
  };
};

Chronos.prototype.clockInterface = function ({
  hours = new Date().getHours(),
  minutes = new Date().getMinutes(),
  seconds = new Date().getSeconds(),
  milliseconds = new Date().getMilliseconds(),
} = {}) {
  return {
    hours,
    minutes,
    seconds,
    milliseconds,
  };
};

function Chronos(calendarTemplate = 'yyyy-mm-dd', lang = 'en-US') {
  const current = new Date();

  const calendarMonth = (lang = 'en-US') => {
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

    return monthNames[new Date().getMonth()];
  };

  const calendarDay = (lang = 'en-US') => {
    let daysName = [
      lang === 'en-US' ? 'Sunday' : lang === 'pt-BR' ? 'Domigo' : '',
      lang === 'en-US' ? 'Monday' : lang === 'pt-BR' ? 'Segunda-feira' : '',
      lang === 'en-US' ? 'Tuesday' : lang === 'pt-BR' ? 'Terça-feira' : '',
      lang === 'en-US' ? 'Wednesday' : lang === 'pt-BR' ? 'Quarta-feira' : '',
      lang === 'en-US' ? 'Thursday' : lang === 'pt-BR' ? 'Quinta-feira' : '',
      lang === 'en-US' ? 'Friday' : lang === 'pt-BR' ? 'Sexta-feira' : '',
      lang === 'en-US' ? 'Saturday' : lang === 'pt-BR' ? 'Sabado' : '',
    ];

    return daysName[new Date().getDay()];
  };

  const interfaceCalendar = this.calendarInterface({
    day: current.getDate(),
    month: current.getMonth() + 1,
    year: current.getFullYear(),
    calendarTemplate: calendarTemplate,
  });

  const interfaceClock = this.clockInterface({
    hours: current.getHours(),
    minutes: current.getMinutes(),
    seconds: current.getSeconds(),
    milliseconds: current.getMilliseconds(),
  });

  this.calendar = {
    calendarMonth: calendarMonth(lang),
    calendarDay: calendarDay(lang),
    ...interfaceCalendar,
  };

  this.clock = interfaceClock;
}
