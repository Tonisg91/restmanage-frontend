class DateService{
    getDate(timestamp) {
        return new Date(timestamp).toLocaleDateString()
    }

    getTime(timestamp) {
        return new Date(timestamp).toLocaleTimeString()
    }
}

export default new DateService()