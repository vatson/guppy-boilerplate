import { User } from "../domain/User";

export class UserPresenter {

    present(user: User) {
        return {
            id:         user.id(),
            firstName:  user.firstName(),
            lastName:   user.lastName(),
            email:      user.email()
        };
    }
}