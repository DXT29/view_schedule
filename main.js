
document.addEventListener("DOMContentLoaded", function() {
    const schedules = [
        {
            week: 21,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t6'], afternoon: ['t7'] }
        },
        {
            week: 21,
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
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t4', 't5', 't6'], afternoon: ['t7'] }
        },
        {
            week: 26,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
            practice: { morning: ['t4', 't5', 't6', 't7'], afternoon: [] }
        },
        {
            week: 27,
            theory: { morning: ['t4', 't5'], afternoon: ['t6'] },
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

    // Helper function to get the current week number
    function getCurrentWeekNumber() {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
        const weekNumber = Math.ceil((days + startDate.getDay() + 1) / 7);
        return weekNumber;
    }
    let element = document.querySelector(`.nav`);
    let tuan = getCurrentWeekNumber() +16;
    element.innerHTML += (" Tuần "+(tuan));
    function fillSchedule() {
        const currentWeek = getCurrentWeekNumber();
        const weekOffset = currentWeek - 21;  // Assuming the schedule starts at week 37
      
        if (weekOffset < 0 || weekOffset >= schedules.length) {
            console.log("No schedule available for this week.");
            return;
        }

        const schedule = schedules[weekOffset];

        schedule.theory.morning.forEach(day => {
            let element = document.querySelector(`.sang .t#${day}`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Lý thuyết`;
        });
        schedule.theory.afternoon.forEach(day => {
            let element = document.querySelector(`.chieu .t#${day}`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Lý thuyết`;
        });
        schedule.practice.morning.forEach(day => {
            let element = document.querySelector(`.sang .t#${day}`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Thực hành`;
        });
        schedule.practice.afternoon.forEach(day => {
            let element = document.querySelector(`.chieu .t#${day}`);
            if (element) element.innerHTML += (element.innerHTML ? '<br>' : '') + `Thực hành`;
        });
    }

    fillSchedule();
});
