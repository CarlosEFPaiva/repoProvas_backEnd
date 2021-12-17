import { Error } from '../protocols/error';

class StandardError extends Error {
    constructor({ message, name }: Error) {
        super(message);
        this.name = name;
    }
}

export default StandardError;
