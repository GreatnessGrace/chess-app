import { Document } from 'mongoose';

export interface Iuser extends Document{
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}