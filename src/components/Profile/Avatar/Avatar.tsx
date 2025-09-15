import type { FC } from 'react';
import { ProfileClass } from '../Profile.classname';
import './Avatar.css';
import { Button } from '../../Button/Button';

type Avatar = {
    name: string;
    avatarUrl: string;
};

const ProfileAvatar: FC<Avatar> = ({ name, avatarUrl }) => {
    return (
        <div className={ProfileClass('Avatar-wrapper')}>
            <div className={ProfileClass('Avatar')}>
                <img src={avatarUrl} alt={name} />
                <Button theme='edit' />
            </div>
        </div>
    );
};

export { ProfileAvatar };
