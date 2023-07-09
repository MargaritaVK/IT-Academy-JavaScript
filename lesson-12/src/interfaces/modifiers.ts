interface Modifiers {
    // obj: {},
    set(key: string, value: any): Modifiers;
    get(key: string): Modifiers;
    delete(key: string): Modifiers;
    getObject(): Modifiers;
    [key: string]: any;
}

export { Modifiers }