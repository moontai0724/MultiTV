window.onload = async function () {
    var videos = await getList();
    new Vue({
        el: "#TVs",
        data: {
            TVs: videos
        }
    });
}

function getList() {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            method: "GET",
            url: "https://script.google.com/macros/s/AKfycby04m1ScFh68ZqBDlg_Yv9F6EgsyWTgRenQcaeBOw/exec",
            success: function (data) {
                console.log(data);
                resolve(data);
            },
            error: reject
        });
    });
}