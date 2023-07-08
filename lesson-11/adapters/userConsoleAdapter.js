import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class UserConsoleAdapter { 
    async ask(question) {
        const rl = readline.createInterface({ input, output });
        const answer = await rl.question(question);
        rl.close();
        return answer;
    }
}

export { UserConsoleAdapter }