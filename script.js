// DOM Element -- button
// EVent: click
document.getElementById('themeToggle').addEventListener('click', function(){
    // DOM element
    // Toggle Class
    document.body.classList.toggle('dark-theme');

    // DOM Element -- button
    // Toggle alert
    if(this.innerText === 'Dark Theme'){
        this.innerText = 'Light Theme';
    }else{
        this.innerText = 'Dark Theme'
    }
});