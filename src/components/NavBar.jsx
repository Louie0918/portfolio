

export const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-lg z-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-foreground">Portfolio</div>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="text-foreground hover:text-primary">Home</a></li>
                    <li><a href="#about" className="text-foreground hover:text-primary">About</a></li>
                    <li><a href="#projects" className="text-foreground hover:text-primary">Projects</a></li>
                    <li><a href="#contact" className="text-foreground hover:text-primary">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}