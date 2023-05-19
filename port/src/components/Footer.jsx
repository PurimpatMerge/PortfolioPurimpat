import "../input.css";


function Footer() {
  return (
    <div className="flex  justify-center mx-auto  ">
        <div  className="text-center">
        <p> &copy; {new Date().getFullYear()} Purimpat. All rights reserved.</p>

        </div>
    </div>
  );
}

export default Footer;
