const PageState = function () {
    let currentState = new HomeState(this);

    this.init = function () {
        this.change(new HomeState());
    }

    this.change = function (state) {
        currentState = state;
    }
}

const HomeState = function (page) {
    document.querySelector("#heading").textContent = null;
    document.querySelector("#content").innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    `;
};

const AboutState = function (page) {
    document.querySelector("#heading").textContent = "About us";
    document.querySelector("#content").innerHTML = `
        <p>This is the About page</p>
    `;
};

const ContactState = function (page) {
    document.querySelector("#heading").textContent = "Contact us";
    document.querySelector("#content").innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    `;
};

const page = new PageState();

page.init();


const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
    page.change(new HomeState())
    e.preventDefault();
})

about.addEventListener("click", (e) => {
    page.change(new AboutState())
    e.preventDefault();
})

contact.addEventListener("click", (e) => {
    page.change(new ContactState())
    e.preventDefault();
})