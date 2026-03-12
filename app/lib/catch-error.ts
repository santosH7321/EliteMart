import MessageInterface from "../interface/message.interface"

const catchError = (err: unknown): MessageInterface => {
    if(err instanceof Error) {
        return {message: err.message}
    }

    return {message: "Unkown Error"}
}

export default catchError;