import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
// import vi from 'vee-validate/dist/locale/vi.json'
// localize('vi', vi)
Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]); // eslint-disable-line
});
