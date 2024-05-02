import axios from "axios";

class sirr {
    constructor() {
        (this.lng = "az"),
        (this.baseUrl = "https://admin.sirr.az/api");
        this.baseUrlImage = "https://admin.sirr.az/storage/";
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }
    api() {
        return axios.create({
            baseURL: this.baseUrl,
            headers: this.headers,
        });
    }
}

const sirrSite = new sirr();
export default sirrSite;  
