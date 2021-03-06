export const isNoSpace = (email: string): boolean => {
    const tempEmail: string = email.split(" ")[0];
    if (tempEmail === email) return true;
    return false;
};
export const isDotCom = (email: string): boolean => {
    const validString = isNoSpace(email);
    const noMultiDotCom = email.split(".").length === 2;
    const noMultiAt = email.split("@").length === 2;
    const emailSubstring: string = email.substring(email.length - 4);
    const dotCom: boolean = emailSubstring === ".com";
    if (!noMultiDotCom || !noMultiAt || !validString) return false;
    if (dotCom) return true;
    return false;
};
export const findDomain = (email: string): string | null => {
    const domain: string = email.split("@")[1];
    if (!isDotCom(email)) return null;
    if (!domain) return null;
    return domain;
};
export const isEmailDomainsAllowed = (email: string): boolean => {
    const emailList = ["google", "gmail", "yahoo", "aol", "icloud"];
    const checkDoamin = findDomain(email);
    const domain = checkDoamin ? checkDoamin.split(".")[0] : false;
    if (!domain) return false;
    if (emailList.indexOf(domain) !== -1) return true;
    return false;
};
export const isEmailValid = (email: string): boolean => {
    const isValidSapcing = isNoSpace(email);
    const isdotCom: boolean = isDotCom(email);
    const isValidDomain: boolean = isEmailDomainsAllowed(email);
    if (!isValidSapcing) return false;
    if (isdotCom && isValidDomain) return true;
    return false;
};
export const hasSpecialChar = (password: string) => {
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const hasSpecialChar = specialChar.test(password);
    if (hasSpecialChar) return true;
    return false;
};
export const hasNumber = (password: string) => {
    const number = /[0-9]/;
    const hasNumber = number.test(password);
    if (hasNumber) return true;
    return false;
};
export const hasUpperCase = (password: string) => {
    const upperCase = /[A-Z]/;
    const hasUpperCase = upperCase.test(password);
    if (hasUpperCase) return true;
    return false;
};
export const hasLowerCase = (password: string) => {
    const lowerCase = /[a-z]/;
    const hasLowerCase = lowerCase.test(password);
    if (hasLowerCase) return true;
    return false;
};
export const getPasswordLength = (password: string) => {
    const length = password.length;
    return length;
};
export const isPasswordValid = (password: string): boolean => {
    const hasSpecialCharacter = hasSpecialChar(password);
    const hassNumber = hasNumber(password);
    const hasUpperCaseChar = hasUpperCase(password);
    const hasLowerCaseChar = hasLowerCase(password);
    const passwordLength = getPasswordLength(password);
    if (
        hasSpecialCharacter &&
        hassNumber &&
        hasUpperCaseChar &&
        hasLowerCaseChar &&
        passwordLength >= 8
    )
        return true;
    return false;
};