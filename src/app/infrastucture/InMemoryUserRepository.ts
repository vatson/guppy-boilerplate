import { UserRepository }   from "../domain/UserRepository";
import { User }             from "../domain/User";

export class InMemoryUserRepository extends UserRepository {

    private lastUserId: number = 0;
    private users: Map<number, User> = new Map();

    public async nextId(): Promise<number> {

        return ++this.lastUserId;
    }

    public async all(): Promise<User[]> {

        const users = [];

        for (const user of this.users.values()) {
            users.push(user);
        }

        return users;
    }

    public async byId(userId: number): Promise<User|null> {

        if ( ! this.users.has(userId)) return null;

        return this.users.get(userId);
    }

    public async store(user: User): Promise<User> {

        this.users.set(user.id(), user);

        return user;
    }
}