var helper = require('sendgrid').mail;
var sg = require('sendgrid')('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');

exports.sendEmail = function(to, from, subject, content) {
    
    var fromEmail = new helper.Email (from);
    var toEmail = new helper.Email (to);
    var content = new helper.Content ('text/html', content);
    var mail = new helper.Mail (fromEmail, subject, toEmail, content);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send', 
        body: mail.toJSON()
    });
    return sg.API(request);
}