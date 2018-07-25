var introStyle = {
    'width': '90%',
    'margin-top': '1.5%',
    'margin-bottom': '2%',
    'border-style': 'hidden',
    'border-radius': '2vw',
    'box-shadow': '1px 1px 3px'
}

var eduStyle = {
    'width': '90%',
    'margin-top': '1.5%',
    'margin-bottom': '2%',
    'border-style': 'hidden',
    'border-radius': '0vw',
    'box-shadow': ''
}

$(document).ready(function() {
    $('.list-group-item').click(function() {
        if ($(this).attr('href') != '#project-list') {
            $('.list-group-item').css('background-color', '#70A8DD');
            $(this).css('background-color', '#397EC3');
        }
        var itemId = $(this).attr('id');
        switch (itemId) {
            case 'item-intro':
                $("#content").fadeOut(1000, function() {
                    $("#Content").remove();
                    $.get("introduction.html", function(data) {
                        $("#content").css(introStyle).html(data).fadeIn(1000);
                    });
                });
                break;
            case 'item-edu':
                $("#content").fadeOut(1000, function() {
                    $("#Content").remove();
                    $.get("education.html", function(data) {
                        $("#content").css(eduStyle).html(data).fadeIn(1000);
                    });
                });
                break;
            case 'item-exp':
                $("#content").fadeOut(1000, function() {
                    $("#Content").remove();
                    $.get("experience.html", function(data) {
                        $("#content").css(eduStyle).html(data).fadeIn(1000);
                    });
                });
                break;
            case 'project-laneTracking':
                var converter = new showdown.Converter();
                $("#content").fadeOut(1000, function() {
                    $("#Content").remove();
                    $.get("projects/Test.md", function(data) {
                        $("#content").css(eduStyle).html(converter.makeHtml(data)).fadeIn(1000);
                    });
                });
                break;
            default:
                break;
        }
    });
});