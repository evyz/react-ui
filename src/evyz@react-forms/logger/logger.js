export class SystemLogger{
    constructor(params, enableLogs, widget) {
        this.params = params
        this.enableLogs = enableLogs ? true : false
        this.widget = widget ? widget : "not_selected"
    }

    log(message) {
        if (!this.enableLogs) {
            return
        }
        if (!message.type) {
            console.log(message)
        } else {
            let { type, data } = message

            let messageToSend = {}
            switch (type) {
                case "first_init":
                    messageToSend.data = "first_init"
                    messageToSend.widget = this.widget
                    messageToSend.params = this.params
                    break;
                case "called_useEffect":
                    messageToSend.message = data
                    break;
                default:
                    messageToSend.data = "not_found"
                    break;
            }
            console.log(messageToSend)
        }
    }
}