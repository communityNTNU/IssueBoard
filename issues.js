// See: https://developer.github.com/v3/issues/
var issues_numbers = [];
var api_issue_source = "https://api.github.com/repos/communityNTNU/Data-for-watchNTNU/issues?";
$.getJSON(api_issue_source, function (issues) {
    $.each(issues, function (k, d) {
        /*
            Here are the useful shit:
            d.html_url
            d.state
            d.title
            d.number
            d.body
            d.user.login
            d.user.html_url
            d.locked
            d.comments
            d.closed_at
            d.created_at
            d.update_at
        */

        issues_numbers.push(d.number);

        // Converted from CoffeeScript: "<div id=\"#{d.number}\"><h1>number=#{d.number}, url=#{d.html_url}, state=#{d.state}, title=#{d.title}, body=#{d.body}, user=#{d.user.login}, user_url=#{d.user.html_url}, locked=#{d.locked}, comment_count=#{d.comments}, closed_at=#{d.closed_at}, created_at=#{}, update_at=#{d.update_at}</h1></div>"
        var html = "<div id=\"" + d.number + "\"><h1>number=" + d.number + ", url=" + d.html_url + ", state=" + d.state + ", title=" + d.title + ", body=" + d.body + ", user=" + d.user.login + ", user_url=" + d.user.html_url + ", locked=" + d.locked + ", comment_count=" + d.comments + ", closed_at=" + d.closed_at + ", created_at=" + ", update_at=" + d.update_at + "</h1></div>";
        $("#temp").append(html);
    })

    // See: https://developer.github.com/v3/issues/comments/
    $.each(issues_numbers, function (i, num) {
        var api_comment_source = "https://api.github.com/repos/communityNTNU/WatchNTNU/issues/"+num+"/comments";
        $.getJSON(api_comment_source, function (comments) {
            $.each(comments, function (k, d) {
                /*
                    Here are the useful shit:
                    d.body
                    d.user.login
                    d.user.html_url
                    d.created_at
                    d.updated_at
                */

                // Converted from CoffeeScript: "<h2>body=#{d.body}, user=#{d.user.login}, user_url=#{d.user.html_url},, created_at=#{}, update_at=#{d.update_at}</h2>"
                var html = "<h2>body=" + d.body + ", user=" + d.user.login + ", user_url=" + d.user.html_url + ",, created_at=" + ", update_at=" + d.update_at + "</h2>";
                $("#"+num).append(html);
            })
        })
    })
})
