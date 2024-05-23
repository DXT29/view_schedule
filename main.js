document.addEventListener("DOMContentLoaded", function() {
    const schedules = [
        {
            week: 21,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t6'], afternoon: ['t7'] }
        },
        {
            week: 22,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t6'], afternoon: ['t7'] }
        },
        {
            week: 23,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t4', 't6'], afternoon: ['t7'] }
        },
        {
            week: 24,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t4', 't6'], afternoon: ['t7'] }
        },
        {
            week: 25,
            theory: { morning: [], afternoon: [] },
            practice: { morning: ['t4', 't5', 't6'], afternoon: ['t7'] }
        },
        {
            week: 26,
            theory: { morning: [], afternoon: [] },
            practice: { morning: ['t4', 't5', 't6', 't7'], afternoon: [] }
        },
        {
            week: 27,
            theory: { morning: [], afternoon: [] },
            practice: { morning: ['t2', 't3', 't4', 't5', 't6'], afternoon: ['t2', 't3', 't4', 't5', 't6'] }
        },
        {
            week: 28,
            theory: { morning: [], afternoon: [] },
            practice: { morning: ['t2'], afternoon: ['t2'] }
        },
        {
            week: 29,
            theory: { morning: [], afternoon: [] },
            practice: { morning: ['t2', 't3', 't4', 't5', 't6', 't7'], afternoon: ['t2', 't3', 't4', 't5', 't6', 't7'] }
        }
    ];

    function getCurrentWeekNumber() {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
        const weekNumber = Math.ceil((days + startDate.getDay() + 1) / 7);
        return weekNumber;
    }

    let currentWeek = getCurrentWeekNumber() ; // Adjusting current week for demonstration
    let displayedWeek = currentWeek;

    function clearSchedule() {
        const slots = document.querySelectorAll('.sang .t, .chieu .t');
        slots.forEach(slot => slot.innerHTML = '');
    }

    function updateWeekDisplay() {
        document.getElementById('current-week-display').innerText = `Tuần ${displayedWeek + 16}`;
    }

    function fillSchedule(week) {
        clearSchedule();

        const weekOffset = week - 21;  
        if (weekOffset < 0 || weekOffset >= schedules.length) {
            console.log("No schedule available for this week.");
            return;
        }

        const schedule = schedules[weekOffset];

        schedule.theory.morning.forEach(day => {
            let element = document.querySelector(`.sang .t#${day}-morning`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Lý thuyết`;
        });
        schedule.theory.afternoon.forEach(day => {
            let element = document.querySelector(`.chieu .t#${day}-afternoon`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Lý thuyết`;
        });
        schedule.practice.morning.forEach(day => {
            let element = document.querySelector(`.sang .t#${day}-morning`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Thực hành`;
        });
        schedule.practice.afternoon.forEach(day => {
            let element = document.querySelector(`.chieu .t#${day}-afternoon`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Thực hành`;
        });

        updateWeekDisplay();
    }

    document.getElementById('prev-week').addEventListener('click', function() {
        displayedWeek = Math.max(21, displayedWeek - 1); // Week 21 is the first week in the schedules array
        fillSchedule(displayedWeek);
    });

    document.getElementById('next-week').addEventListener('click', function() {
        displayedWeek = Math.min(29, displayedWeek + 1); // Week 29 is the last week in the schedules array
        fillSchedule(displayedWeek);
    });

    fillSchedule(displayedWeek);
});
