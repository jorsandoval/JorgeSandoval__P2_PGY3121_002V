function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=andr3iss&select=" + service;
}

function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}