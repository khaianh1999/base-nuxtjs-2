import MainRepository from "~/repositories/MainRepository";
import VuiHocRepository from "~/repositories/VuiHocRepository";

export default (axios, $axiosVuiHoc) => {
    return {
        repository: MainRepository(axios),
        VuiHocRepository: VuiHocRepository($axiosVuiHoc),
    };
};
