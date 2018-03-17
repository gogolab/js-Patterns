// Basic structure of module pattern

(function () {
    //Declare private variables and functions

    return {
        //Declare public variables and functions
    }
})();


const UIctrl = (function () {
    const text = "Hello world!";

    const changeText = (value) => {
        document.querySelector("h1").textContent = value;
    }

    return {
        callChangeText: () => {
            changeText(text);
            console.log("it works");
        }
    }
})();


UIctrl.callChangeText();


const itemCtrl = (function () {
    const data = [];

    const add = function (item) {
        data.push(item);
        console.log(data);
    }

    const get = function (id) {
        return data.find(item => item.id === id);
    }

    return {
        add: add,
        get: get
    }
})();

itemCtrl.add({ id: 1, name: "Batman" });
itemCtrl.add({ id: 2, name: "Superman" });

console.log(itemCtrl.get(2));