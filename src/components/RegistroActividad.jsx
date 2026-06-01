import { Alert } from "react-bootstrap";

const RegistroActividad = ({ fecha }) => {
  return (
    <Alert variant="info" className="mt-3">
      {fecha}
    </Alert>
  );
};

export default RegistroActividad;