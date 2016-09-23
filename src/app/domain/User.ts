export class User {

    public constructor(
        private _id: number,
        private _firstName: string,
        private _lastName: string
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

    public static register(userId, firstName, lastName): User {
        return new User(userId, firstName, lastName);
    }
}