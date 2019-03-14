import memeService from "./memeService";

export default class Services {
    constructor(api){
        this.memeService = new memeService(api);
    }
}