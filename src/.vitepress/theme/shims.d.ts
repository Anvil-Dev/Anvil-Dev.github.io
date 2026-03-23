declare module '*.json' {
    const data: any;
    export default data;
}

declare module '../data/support_us.json' {
    interface SupportItem {
        name: string;
        value: string;
    }

    const data: SupportItem[];
    export default data;
}