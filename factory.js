function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        if (type === "simple") {
            member = new SimpleMembership(name);
        } else if (type === "standard") {
            member = new StandardMembership(name);
        } else if (type === "super") {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function (name) {
    this.name = name;
    this.cost = "$5";
}

const StandardMembership = function (name) {
    this.name = name;
    this.cost = "$15";
}

const SuperMembership = function (name) {
    this.name = name;
    this.cost = "$25";
}


const factory = new MemberFactory();
const members = [];

members.push(factory.createMember("Clark", "super"));
members.push(factory.createMember("Peter", "standard"));
members.push(factory.createMember("Bruce", "simple"));


members.forEach(member => member.define());