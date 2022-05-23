import { QRCodeSVG } from "qrcode.react";

function App() {
  return (
    <div>
      <h1 className="text-lg text-alpha font-proxima">Kinepolis</h1>
      <QRCodeSVG value="https://www.kinepolis.com" />
    </div>
  );
}

export default App;
