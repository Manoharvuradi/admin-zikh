export interface IInput {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    options?: { label: string, value: string }[]
}
export interface IEvent {
    target: ITarget;
}
export interface ITarget {
    name: string;
    value: string;
    checked?: boolean;
}