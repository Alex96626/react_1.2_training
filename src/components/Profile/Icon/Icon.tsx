import type { FC } from 'react';

type ProfileIcon = {
    icon: string;
};

const ProfileIcon: FC<ProfileIcon> = ({ icon }) => {
    return <div>{icon}</div>;
};

export { ProfileIcon };
