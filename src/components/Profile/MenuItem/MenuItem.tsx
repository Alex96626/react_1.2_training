import type { FC } from 'react';
import { ProfileIcon } from '../Icon/Icon';
import { ProfileClass } from '../Profile.classname';
import './MenuItem.css';

type ProfileMenuItem = {
    link: string;
    name: string;
    icon: string;
    key: string | number;
};

const ProfileMenuItem: FC<ProfileMenuItem> = ({ link, name, icon }) => {
    return (
        <li className={ProfileClass('Menu-item')}>
            <ProfileIcon icon={icon} />
            <a className={ProfileClass('Link')} href={link}>
                {name}
            </a>
        </li>
    );
};

export { ProfileMenuItem };
