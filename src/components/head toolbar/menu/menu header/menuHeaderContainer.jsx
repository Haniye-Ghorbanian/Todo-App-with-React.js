import ProfileImage from "./menuHeaderProfileImage";
import ProfileName from "./menuHeaderProfleName";

export default function MenuHeader() {
    return (
        <div className="flex flex-col justify-start items-start space-y-3">
            <ProfileImage />
            <ProfileName />
        </div>
    )
}