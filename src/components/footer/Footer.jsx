import NavBar from "../ui/NavBar";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full text-neutral-900">
      <NavBar withEmoji={true} gap="gap-10" />
    </div>
  );
}

export default Footer;
