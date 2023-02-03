import { Button } from "react-bootstrap";
export default function Darkmode() {  
  const handleClick = () => {
    document.body.classList.toggle('dark_mode');
  };

  return (
    <div>
      <Button className="dark_modebtn border-0" onClick={handleClick}>
        Dark Mode
      </Button>
    </div>
  );
}