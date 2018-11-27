const Counter = (function counterIIFE() {
    let currentValue = 0;
    return {
        currentValue: function() {
          return currentValue;
        },
        incrementCounter: function() {
            currentValue += 1;
            return currentValue;
        },
        decrementCounter: function(){
            currentValue -= 1;
            return currentValue;
        }
    }
})();

const counter = document.getElementById('counter');

document.getElementById('counter').innerText = Counter.currentValue()

document.getElementById('increment').addEventListener('click', function(){
    counter.innerText = Counter.incrementCounter()
    createToast('To działa!NIESAMOWITE');
});

document.getElementById('decrement').addEventListener('click', function(){
    counter.innerText = Counter.decrementCounter()
    createToast('WOOW! Znowu się udało!!');
});

function createToast(message) {
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove()
    }, 1500)
};

