window.onload = () => {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    load1();
};

load1 = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            $("#spinner1").removeClass();
            $("#img1").show();
            resolve();
        }, 2000);
    })
    .then(() => {
        load2();
    })
    .catch((error) => alert(error));
}

load2 = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            $("#spinner2").removeClass();
            $("#img2").show();
            resolve();
        }, 4000);
    })
    .then(() => {
        load3();
    })
    .catch((error) => alert(error));
}

load3 = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            $("#spinner3").removeClass();
            $("#img3").show();
            resolve();
        }, 3000);
    })
    .catch((error) => alert(error));
}