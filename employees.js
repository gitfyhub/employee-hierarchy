// Jeff
// Employees of: Jeff
//     Dave
//         Employees of: Dave
//             Andy
//             Dan
//             Jason
//             Rick
//             Suzanne
// Total salary: 275000

company = {
  employees: [
    {
      name: "Jeff",
      salary: 100,
      level: 1
    },
    {
      name: "Dave",
      salary: 100,
      level: "2"
    },
    {
      name: "Andy",
      salary: 100,
      level: "3"
    },
    {
      name: "Dan",
      salary: 100,
      level: "3"
    },
    {
      name: "Jason",
      salary: 100,
      level: "3"
    },
    {
      name: "Rick",
      salary: 100,
      level: "3"
    },
    {
      name: "Suzanne",
      salary: 100,
      level: "3"
    }
  ]
};

var emp = [];
employeeLevel = [1, 2, 3];
totalSalary = 0;

for (x in company.employees) {
  totalSalary += company.employees[x].salary;
}

tabs = ["", "\t", "\t\t"];
for (l in employeeLevel) {
  for (x in company.employees) {
    if (company.employees[x].level == employeeLevel[l]) {
      console.log(tabs[l] + company.employees[x].name);

      if (employeeLevel[l] == 1 || employeeLevel[l] == 2) {
        console.log(tabs[l] + "Employees of " + company.employees[x].name);
      }
    }
  }
}
console.log("Total salary: " + totalSalary);
