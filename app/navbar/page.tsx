import Navigation from "@/app/navbar/navigation";
import Logo from "@/app/navbar/logo";
import ActionButtons from "@/app/navbar/actionButtons";

const Navbar = () => {
    return (
        <div className={"bg-blue-500"}>
            <Logo />
            <Navigation/>
            <ActionButtons/>
        </div>
    )

};

export default Navbar;