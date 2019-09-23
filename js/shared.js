let closeModal = function () {
    $('.modal').removeClass('show');
    $('.modal-backdrop').removeClass('show');
};

let closeForce = function (id) {
    $('#'+id).remove();
    $('.modal-backdrop').removeClass('show');
};