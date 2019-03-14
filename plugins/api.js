import Services from "../services/services";

export default ({ app }, inject) => {

    inject('services', new Services(app.$axios));

}