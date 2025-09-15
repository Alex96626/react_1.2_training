import { ProfileClass } from '../Profile.classname';
import { ProfileMenuItem } from '../MenuItem/MenuItem';
import './Menu.css';

const ProfileMenu = () => {
    const ProfileIcons = [
        { id: 1, text: 'Account', icon: '👤' },
        { id: 2, text: 'Chat Settings', icon: '💬' },
        { id: 3, text: 'Notifications', icon: '🔔' },
        { id: 4, text: 'Storage', icon: '💾' },
        { id: 5, text: 'Help', icon: '❓' },
        { id: 6, text: 'Invite a friend', icon: '📨' },
    ];

    return (
        <ul className={ProfileClass('Menu')}>
            {ProfileIcons.map(({ id, icon, text }) => (
                <ProfileMenuItem key={id} icon={icon} link='/' name={text} />
            ))}
        </ul>
    );
};

export { ProfileMenu };
