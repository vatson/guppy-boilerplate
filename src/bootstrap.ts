import { ConsoleApplication }   from "guppy/console";
import { HttpBundle }           from "guppy/http/server";
import { PresenterBundle }      from "guppy/presenter";
import { ValidationBundle }     from "guppy/validation/ValidationBundle";

import { AppBundle } from "./app/AppBundle";

const application = new ConsoleApplication([
    new HttpBundle(),
    new PresenterBundle(),
    new ValidationBundle(),
    new AppBundle()
]);

application
    .run(process.argv.slice(1))
    .catch(error => console.error(error));