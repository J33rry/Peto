import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
function UserButton({ handleEnter, handleLeave }) {
    return (
        <div>
            <Link
                className="cursor-pointer flex items-center justify-center rounded-lg  p-2"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                href="/signin"
            >
                <HiOutlineUser
                    style={{
                        scale: "1.5",
                        color: "#fff",
                    }}
                />
            </Link>
        </div>
    );
}

export default UserButton;
