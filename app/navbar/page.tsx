import Navigation from "@/app/navbar/navigation";
import Logo from "@/app/navbar/logo";
import ActionButtons from "@/app/navbar/actionButtons";

const Navbar = () => {
    return (
        <div className={"flex justify-between items-center px-10 border-b-2 h-20 text-lg"}>
            <Logo />
            <Navigation/>
            <ActionButtons/>
        </div>
    )

};

export default Navbar;