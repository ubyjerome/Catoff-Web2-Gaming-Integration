const toastColors = {
    error: '#d9534f',
    success: '#9eff00',
    warning: '#f0ad4e',
    info: '#9eff00',
    faded: '#f7f7f7',
    inverse: '#292b2c',
};

export function toast(message, backgroundColor, callback) {
    if (!toastColors.hasOwnProperty(backgroundColor)) {
        console.error('Invalid background color provided. Using default.');
        backgroundColor = 'faded'; // Use a default color
    }

    callback = typeof callback === 'function' ? callback : () => {console.log("No Callback Function")};
    Toastify({
        text: message,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: toastColors[backgroundColor],
            color:'black'
        },
        onClick: callback,
    }).showToast();
}