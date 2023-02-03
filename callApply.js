const normalPerson = {
  firstName: "Kolim",
  lastName: "Uddin",
  salary: 15000,
  getFullName: () => console.log(`${firstName} ${lastName}`),
  chargeBill: function (amount) {
    //console.log(this);
    this.salary = this.salary - amount;
    return this.salary;
  },
};

const heroPerson = {
  firstName: "Hero",
  lastName: "Balam",
  salary: 25000,
};

const friendlyPerson = {
  firstName: "Hero",
  lastName: "Golam",
  salary: 25000,
};

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(2000);
// heroChargeBill(1500);
// console.log(heroPerson.salary);
//console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 1344);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000]);
console.log(heroPerson.salary);
