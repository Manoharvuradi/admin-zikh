export function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export const convertToObjectWithCreate = (obj: any) => {
    if(Array.isArray(obj)){
        return {create: obj};
    }
    return {create: [obj]}
}