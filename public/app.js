$(document).ready(() => {

    $.ajax({
        url: 'http://localhost:3000/tasks',
        type: 'GET',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
});