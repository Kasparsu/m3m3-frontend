import Service from "./service";

export default class memeService extends Service {
    constructor(api) {
        super(api);
        this.prefix = 'meme'
    }
}