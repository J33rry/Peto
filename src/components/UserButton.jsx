import { HiOutlineUser } from "react-icons/hi";
function UserButton({ handleEnter, handleLeave }) {
    return (
        <div>
            <div
                className="cursor-pointer flex items-center justify-center rounded-lg shadow-sm border-1 shadow-zinc-300 p-2"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <HiOutlineUser
                    style={{
                        scale: "1.5",
                        color: "#000",
                    }}
                />
            </div>
        </div>
    );
}

export default UserButton;
