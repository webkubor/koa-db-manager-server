
import Koa from 'koa';

interface User {
    id: number;
    name: string;
    email: string;
  }
  
 class UserController {
    static getUsers(ctx: Koa.Context) {
      const users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      ];
      ctx.body = users;
    }
  
    static getUserById(ctx: Koa.Context) {
      const id = Number(ctx.params.id);
      const users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      ];
      const user = users.find((u) => u.id === id);
      if (user) {
        ctx.body = user;
      } else {
        ctx.throw(404, 'User not found');
      }
    }
  
    static createUser(ctx: Koa.Context) {
      const user = ctx.request.body as User;
      user.id = 1; // Replace with real ID generation logic
      ctx.body = user;
    }
  
    static updateUserById(ctx: Koa.Context) {
      const id = Number(ctx.params.id);
      const user = ctx.request.body as User;
      user.id = id;
      ctx.body = user;
    }
  
    static deleteUserById(ctx: Koa.Context) {
      const id = Number(ctx.params.id);
      const users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      ];
      const userIndex = users.findIndex((u) => u.id === id);
      if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];
        ctx.body = deletedUser;
      } else {
        ctx.throw(404, 'User not found');
      }
    }
  }


  export default UserController;