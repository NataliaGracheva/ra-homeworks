import React from 'react'

const Calendar = ({ date }) => {
    if (!date) {
        return null;
    }

    const stringDate = date.toLocaleString("ru", {
        weekday: "long",
        day: "numeric",
        month: "long"
    }),
        currDay = date.getDate(),
        currMonth = date.getMonth(),
        currYear = date.getFullYear(),
        millisecInDay = 24 * 60 * 60 * 1000,
        firstDayCurrMonth = new Date(currYear, currMonth, 1),
        firstDayInCalendar = new Date(
            firstDayCurrMonth.getTime() -
            (firstDayCurrMonth.getDay() - 1) * millisecInDay
        ),
        lastDateNumber = new Date(currYear, currMonth + 1, 0).getDate(),
        weeksAmount = Math.ceil(
            (lastDateNumber + (firstDayCurrMonth.getDay() - 1)) / 7
        );

    const monthArray = [];
    let currDateNumber = firstDayInCalendar.getDate();

    for (let i = 0; i < weeksAmount; i++) {
        const weekArray = [];

        for (let j = 0; j < 7; j++) {
            weekArray.push(new Date(currYear, currMonth, currDateNumber).getDate());
            currDateNumber++;
        }
        monthArray.push(weekArray);
    }
    console.log(monthArray);

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">
                    {stringDate.split(",")[0]}
                </div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">
                        {stringDate.split(" ")[1]}
                    </div>
                    <div className="ui-datepicker-material-month">
                        {stringDate.split(" ")[2]}
                    </div>
                    <div className="ui-datepicker-material-year">{currYear}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">
                        {date.toLocaleString("ru", { month: "long" })}
                    </span>&nbsp;<span class="ui-datepicker-year">{currYear}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">
                            Пн
              </th>
                        <th scope="col" title="Вторник">
                            Вт
              </th>
                        <th scope="col" title="Среда">
                            Ср
              </th>
                        <th scope="col" title="Четверг">
                            Чт
              </th>
                        <th scope="col" title="Пятница">
                            Пт
              </th>
                        <th scope="col" title="Суббота">
                            Сб
              </th>
                        <th scope="col" title="Воскресенье">
                            Вс
              </th>
                    </tr>
                </thead>
                <tbody>
                    {monthArray.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, index) => (
                                <td
                                    className={
                                        (((weekIndex === 0 && day > 7) ||
                                            (weekIndex > 3 && day < 21)) &&
                                            "ui-datepicker-other-month") ||
                                        (day === currDay && "ui-datepicker-today")
                                    }
                                    key={index}
                                >
                                    {day}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;