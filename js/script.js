function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=andr3iss&select=" + service;
}


function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}

function createRowOnemiDisaster(state, post_title, alert_region, alert_date, url) {
    return '<tr><td>' + state + '</td><td>' + post_title + '</td><td>' + alert_region + '</td><td>' + alert_date + '</td><td><a href="' + url + '">' + url + '</a></td></tr>';
}

function createRowMundoDisaster(reference, magnitude, latitude, longitude, utc_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + utc_time + '</td></tr>';
}
