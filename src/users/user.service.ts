import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private dump = [
    {
      name: 'Rahul Fernando',
      email: 'rahul@gmail.com',
      age: 23,
      username: 'rahul',
      id: 'efe659ba-aeac-4157-a229-1d273e50ba7a',
    },
    {
      name: 'Akila Dhananjaya',
      email: 'akila@gmail.com',
      age: 23,
      username: 'akila',
      id: 'efe659ba-aeac-4143-a229-1d273e50ba7a',
    },
    {
      name: 'Upul Tharanga',
      email: 'tharanga@gmail.com',
      age: 23,
      username: 'tharanga',
      id: 'aae659ba-aeac-4157-a229-1d273e50ba7a',
    },
  ];
  private users: User[] = this.dump;

  insertUser(user: User) {
    user.id = uuidv4();
    this.users.push(user);
    return user.id;
  }

  getAllUsers() {
    return this.users;
  }

  getUser(id: string) {
    const user = this.users.filter((user) => user.id === id);
    const userObj = {
      id: user[0].id,
      name: user[0].name,
      age: user[0].age,
      email: user[0].email,
      username: user[0].username,
    };

    return userObj;
  }

  updateUser(id: string, user: User) {
    const index = this.users.findIndex((u) => u.id === id);
    const userObj = this.users[index];
    if (userObj) {
      userObj.id = id;
      userObj.name = user.name;
      userObj.email = user.email;
      userObj.age = user.age;
      userObj.username = user.username;

      this.users[index] = userObj;

      return userObj;
    }
    return 'No user found!';
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((u) => u.id === id);
    this.users.splice(index, 1);
    return `User ${id} deleted!`;
  }
}
