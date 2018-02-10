// removes annoying social buttons on pib.nic.in
window.addEventListener("load", function(event) {
    ans = document.getElementsByClassName("addthis-smartlayers");
    while (ans.length > 0) {
        ans[0].remove();
    }
})
