function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);

        console.log(`You are now subscribed to ${fn.name}.`);
    },

    unsubscribe: function (fn) {
        this.observers = this.observers.filter(item => item !== fn);

        console.log(`You are now unsubscribed from ${fn.name}.`);
    },

    fire: function () {
        this.observers.forEach(element => {
            element.call();
        });
    }
}

const click = new EventObserver();

document.querySelector(".sub-ms").addEventListener("click", () => {
    click.subscribe(getCurMilliseconds);
});
document.querySelector(".unsub-ms").addEventListener("click", () => {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", () => {
    click.subscribe(getCurSeconds);
})

document.querySelector(".unsub-s").addEventListener("click", () => {
    click.unsubscribe(getCurSeconds)
})

document.querySelector(".fire").addEventListener("click", () => {
    click.fire();
})

const getCurMilliseconds = () => {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = () => {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}