import { Request, Response, ResponseStatus } from "guppy/http";
import { Get, Post, Path } from "guppy/http/annotations";

import { User }             from "../domain/User";
import { UserRepository }   from "../domain/UserRepository";

@Path("/users")
export class UserController {

    public constructor(
        private userRepository: UserRepository
    ) {
    }

    @Get()
    public async all() {

        return Response.list(
            await this.userRepository.all()
        );
    }

    @Get("/{userId}")
    public async details(request: Request) {

        const userId = parseInt(request.route["userId"]);
        const user = await this.userRepository.byId(userId);

        if (!user) {
            return Response.notFound(`User with ID #${userId} not found`)
        }
        
        return Response.ok(user);
    }

    @Post()
    public async register(request: Request) {

        const user = User.register(
            this.userRepository.nextId(),
            request.body["firstName"],
            request.body["lastName"]
        );

        return Response.json(
            ResponseStatus.Created,
            await this.userRepository.store(user)
        );
    }
}