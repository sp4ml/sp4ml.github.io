(function() {
    var latestStable = '0.0.9.6';
    var goodPaths = ['stable', 'dev', latestStable];
    var showWarning = (msg) => {
        $('.body[role=main]').prepend(
            '<p style="' +
            [
                'padding: 1em',
                'font-size: 1.5em',
                'border: 1px solid red',
                'background: pink',
            ].join('; ') +
            '">' + msg + '</p>')
    };
    if (location.hostname == 'sp4ml.github.io') {
        if (location.pathname == '/dev/versions.html') {
            // this page is specially generated and linked from all versions
            return;
        }
        var versionPath = location.pathname.split('/')[1];
        if (!goodPaths.includes(versionPath)) {
            showWarning('This is documentation for an old release of ' +
                        'sp4ml (version ' + versionPath + '). Try the ' +
                        '<a href="https://sp4ml.github.io">latest stable ' +
                        'release</a> (version ' + latestStable + ') or ' +
                        '<a href="https://sp4ml.github.io/dev">development</a> ' +
                        '(unstable) versions.')
        } else if (versionPath == 'dev') {
            showWarning('This is documentation for the unstable ' +
                        'development version of sp4ml. (To use it, ' +
                        '<a href="https://sp4ml.github.io.org/stable/developers/advanced_installation.html#installing-nightly-builds">install the nightly build</a>.) ' + 
                        'The latest stable ' +
                        'release is <a href="https://sp4ml.github.io">version ' +
                        latestStable + '</a>.')
        }
    }
})()
