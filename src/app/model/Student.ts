export class Student {
  id: number;
  name: string;
  dateOfBirth: any;
  avatar: string;
  description: string;

  constructor(name: string, dateOfBirth: any) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
}
