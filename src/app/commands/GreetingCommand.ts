import { Command }          from "guppy/console/Command";
import { ConsoleInput }     from "guppy/console/ConsoleInput";
import { ConsoleOutput }    from "guppy/console/ConsoleOutput";

export class GreetingCommand implements Command {

    public inputArguments(): string[] {
        return [
            'name'
        ];
    }

    public async execute(input: ConsoleInput, output: ConsoleOutput) {
        output.message(`Hello, ${input.argument('name')}!`);
    }
}