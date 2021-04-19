import fname, { createfile } from "./ExampleImportExportData";

const ExampleImportExport = () => {
  return (
    <div className="container mt-5">
      <ul>
        <li className="fw-bold"> Import Export Example</li>
        <li>{fname}</li>
        <li>{`I'm Document file for data.js ${createfile()}`}</li>
      </ul>
    </div>
  );
};

export default ExampleImportExport;
