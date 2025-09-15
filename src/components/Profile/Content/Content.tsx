import type { FC } from 'react';
import { ProfileClass } from '../Profile.classname';
import './Content.css';
import { ProfileAvatar } from '../Avatar/Avatar';

type User = {
    name: string;
    description: string;
    avatarUrl: string;
};

const ProfileContent: FC<User> = ({ name, description, avatarUrl }) => {
    return (
        <>
            <ProfileAvatar name={name} avatarUrl={avatarUrl} />
            <h2 className={ProfileClass('Name')}>{name}</h2>
            <p className={ProfileClass('Description')}>{description}</p>
        </>
    );
};

export { ProfileContent };
