import { Metadata } from 'next';

export const meta: Metadata = {
    title: { absolute: 'Alex\'s absolute path' }
}

export default function Profile() {
    return <h1 className="text-3xl">Profile</h1>
}