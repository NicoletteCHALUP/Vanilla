import { Employee } from "../domain/Employee.js";

export class BirthdayService {
  constructor(employeeRepository, emailService) {
    this.employeeRepository = employeeRepository;
    this.emailService = emailService;
  }

  sendGreetings(ourDate) {
    const employees = this.employeeRepository.getEmployeesWithBirthday(ourDate);

    employees.forEach((employee) => {
      this.emailService.sendBirthdayGreeting(employee);
    });
  }
}
