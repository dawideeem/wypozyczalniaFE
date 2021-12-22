export interface Msg{
    id?: string;
    ownerId: string;
    username: string;
    email: string;
    subject: string;
    userMessage: string[];
    adminMessage: string[];
    option: boolean;
}