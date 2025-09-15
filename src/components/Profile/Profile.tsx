import { ProfileClass } from './Profile.classname';
import { ProfileContent } from './Content/Content';
import { ProfileHeader } from './Header/Header';
import avatar from '../../assets/avattar.jpg';
import './Profile.css';
import { ProfileMenu } from './Menu/Menu';
import { Button } from '../Button/Button';

const Profile = () => {
    return (
        <article className={ProfileClass()}>
            <ProfileHeader />
            <div className={ProfileClass('Content')}>
                <ProfileContent
                    name='Jane Doe'
                    description='This is a small bio description to let users express themselves'
                    avatarUrl={avatar}
                />
                <ProfileMenu />
                <Button theme='primary' />
            </div>
        </article>
    );
};

export { Profile };
