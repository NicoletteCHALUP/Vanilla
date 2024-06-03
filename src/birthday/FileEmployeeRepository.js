import fs from "fs";
import path from "path";
import { Employee } from "../domain/Employee.js";

export class FileEmployeeRepository {
  constructor(filePath) {
    this.filePath = filePath;
  }

  getEmployeesWithBirthday(date) {
    const data = fs.readFileSync(path.resolve(this.filePath), "UTF-8");

    const lines = data.split(/\r?\n/);
    lines.shift();

    return lines
      .map((line) => this.createEmployeeFromLine(line))
      .filter((employee) => employee.isBirthday(date));
  }

  createEmployeeFromLine(line) {
    const employeeData = line.split(", ");
    return new Employee(
      employeeData[1],
      employeeData[0],
      employeeData[2],
      employeeData[3]
    );
  }
}
