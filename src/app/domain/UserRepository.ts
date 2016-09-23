import { User } from "./User";

export abstract class UserRepository {
    public abstract nextId(): number;
    public abstract all(): Promise<User[]>;
    public abstract byId(userId: number): Promise<User|null>;
    public abstract store(user: User): Promise<User>;
}