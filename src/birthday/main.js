import { OurDate } from "./OurDate.js";
import { FileEmployeeRepository } from "./infrastructure/FileEmployeeRepository.js";
import { EmailService } from "./infrastructure/EmailService.js";
import { BirthdayService } from "./application/BirthdayService.js";

const SMTP_PORT = 465;
const SMTP_URL = "smtp.gmail.com";
const FILENAME = "employee_data.txt";
const SENDER_EMAIL = "csdkleer@gmail.com";
const AUTH = {
  user: "csdkleer@gmail.com",
  pass: "ubcn zwyj bhjs ngsk",
};
const employeeRepository = new FileEmployeeRepository(FILENAME);
const emailService = new EmailService(SMTP_URL, SMTP_PORT, SENDER_EMAIL, AUTH);
const birthdayService = new BirthdayService(employeeRepository, emailService);

birthdayService.sendGreetings(new OurDate("2008/10/08"));

