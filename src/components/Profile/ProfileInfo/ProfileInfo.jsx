import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <img src='https://www.spacedesk.net/wp-content/uploads/2021/07/map.png'/>
            <div>Header+description</div>
        </div>
    )
}
export default ProfileInfo;