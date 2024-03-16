function changeCSS() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'white.css') {

        stylesheet.setAttribute('href', 'dark.css');
    } else {
        stylesheet.setAttribute('href', 'white.css');
        
    }
    var progress_css = document.getElementById('progress');
    if (progress_css.getAttribute('href') === 'white.skill.css') {
        progress_css.setAttribute('href', 'dark.skill.css');
        document.getElementById('dark').style.display = "none"
        document.getElementById('light').style.display = "inline"
    } else {
        progress_css.setAttribute('href', 'white.skill.css');
        document.getElementById('dark').style.display = "inline"
        document.getElementById('light').style.display = "none"
    }

}