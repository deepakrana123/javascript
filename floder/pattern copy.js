console.log("hii");

// factory desgin pattern
// three diff type of desgin pattern is

// factory works on resuablilty of the code
//  creating many types of object for there single use case , or which handles single use case and can be use in all over
// which reduce the code compelexity or say which gave one person on job
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}
function Manager(name) {
  this.name = name;
  this.type = "Management";
}
function EmplyeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      case 3:
        return new Manager(name);
    }
  };
}

function say() {
  console.log("hiii , I am " + this.name + this.type);
}
const emplyeeFactory = new EmplyeeFactory();
const emplyoee = [];

emplyoee.push(emplyeeFactory.create("devendra", 1));
emplyoee.push(emplyeeFactory.create("newDevendra", 2));
emplyoee.push(emplyeeFactory.create("Manager", 3));

emplyoee.forEach((exp) => {
  say.call(exp);
});
