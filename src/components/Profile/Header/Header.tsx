import { Button } from '../../Button/Button';
import { ProfileClass } from '../Profile.classname';
import './Header.css';

const ProfileHeader = () => {
    return (
        <header className={ProfileClass('Header')}>
            <Button theme='back' />
            <h2 className={ProfileClass('Title')}>Profile</h2>
        </header>
    );
};

export { ProfileHeader };
