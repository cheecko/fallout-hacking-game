<button id="but-0">Button 1</button>
<button id="but-1">Button 2</button>
<button id="but-2">Button 3</button>

<script type="text/javascript">
// but-0 is not exist, so will throw an error

const prizes = ['PS5', 'IPhone', 'Headphone'];
for (let butNum = 0; butNum < prizes.length; butNum++) { // var will have scope problem so only but-3 event is registered, but not 100% sure why var will have scope
    document.getElementById(`but-${butNum}`).onclick = () => {
        alert(prizes[butNum]);
    };
}

// other options
prizes.forEach((element,butNum) => {
    document.getElementById(`but-${butNum}`).onclick = () => {
        alert(prizes[butNum]);
    };
});
</script>
