import { Bundle, Container, Config, ConfigState } from "guppy/core";

import { UserController }           from "./controllers/UserController";
import { User }                     from "./domain/User";
import { UserRepository }           from "./domain/UserRepository";
import { InMemoryUserRepository }   from "./infrastucture/InMemoryUserRepository";
import { UserPresenter }            from "./presenters/UserPresenter";
import { GreetingCommand }          from "./commands/GreetingCommand";

export class AppBundle implements Bundle {

    name(): string {
        return "app";
    }

    autoload(): string[] {
        return [
            __dirname + "/controllers"
        ];
    }

    config(config: Config) {
        config
            .section("guppy.database")
                .setFromEnvironment("url", "DATABASE_URL")
                .set("queryLogging", true)
            .end()
            .section("guppy.messaging")
                .set("driver", "amqp")
            .end();
    }

    services(container: Container, config: ConfigState): void {
        container
            .factory(
                UserRepository,
                () => new InMemoryUserRepository()
            )
            .factory(
                GreetingCommand,
                async () => new GreetingCommand(),
                { "guppy.console.command": "greeting" }
            )
            .factory(
                UserController,
                async () => new UserController(
                    await container.get(UserRepository)
                )
            )
            .factory(
                UserPresenter,
                () => new UserPresenter(),
                { "guppy.presenter": User }
            );
    }
}