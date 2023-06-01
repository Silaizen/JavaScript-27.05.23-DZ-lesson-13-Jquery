$(document).ready(function() {
    $('#generate').click(function() {
        const length = parseInt($('#length').val());
        const useDigits = $('#digits').is(':checked');
        const useUppercase = $('#uppercase').is(':checked');
        const useLowercase = $('#lowercase').is(':checked');

        let characters = '';
        if (useDigits) characters += '0123456789';
        if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';

        let result = '';
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        $('#result').val(result);
    });
});
