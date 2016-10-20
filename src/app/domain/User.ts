export class User {

    public constructor(
        private _id: number,
        private _firstName: string,
        private _lastName: string,
        private _email: string
    ) {
    }

    public id(): number {
        return this._id;
    }

    public firstName(): string {
        return this._firstName;
    }

    public lastName(): string {
        return this._lastName;
    }

    public email(): string {
        return this._email;
    }

    public static register(
        userId: number,
        firstName: string,
        lastName: string,
        email: string
    ): User {
        return new User(userId, firstName, lastName, email);
    }
}