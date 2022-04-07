export const required = value => {
    if (value) return undefined;
    return "field is required";
}


export const maxLength = (maxLength) => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}