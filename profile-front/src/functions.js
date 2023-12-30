import Swal from "sweetalert2";
import axios from "axios";
// Import the FontAwesome icon as needed here
import { icon } from "@fortawesome/fontawesome";

export function showAlert(title, iconType, focus = '') {
    if (focus !== '') {
        document.getElementById(focus).focus();
    }
    Swal.fire({
        title: title,
        icon: iconType,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoomIn' },
        buttonsStyling: false
    });
}

export function confirm(urlConSlash, id, title, message) {
    var url = urlConSlash + id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' },
    });

    swalWithBootstrapButton.fire({
        title: title,
        text: message,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Yes, Delete',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            sendRequest('DELETE', { id: id }, url, 'successfully removed');
        } else {
            showAlert('Operation canceled', 'info');
        }
    });
}

export function sendRequest(method, parameters, url, message){
    axios({method: method, url: url, data: parameters})
    .then(function(res) {
        var status = res.status;
        if(status === 200){
            showAlert(message, 'success');
            window.setTimeout(function(){
                window.location.href = '/';
            }, 1000);
        }else {
            showAlert('Could not retrieve response', 'error');
        }
    })
    .catch(function(error){
        showAlert('Server not available', 'error');
    });
}