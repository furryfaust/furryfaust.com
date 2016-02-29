window.onload = function() {
    var expand     = document.querySelector(".expand");
    var expandSize = expand.clientHeight;
    expand.style.maxHeight = 0;

    document.querySelector(".fa.fa-caret-down").onclick = function() {
        if (this.className.indexOf("fa-caret-down") != -1) {
            expand.style.maxHeight = expandSize;
            this.className = "fa fa-caret-up";
        } else if (this.className.indexOf("fa-caret-up") != -1) {
            expand.style.maxHeight = 0;
            this.className = "fa fa-caret-down";
        }
    };
};
