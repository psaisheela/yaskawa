import JSZip from "jszip";
import InputComp from "./InputComp";
import { useState } from "react";
import { Configuration, EquipmentValues, GantryLength, GantryType, PillarHeight, Xstroke, Zstroke } from "../constants/constantValues";


const MyForm = ({ setShowImage = () => { } }) => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [selectedGantry, setSelectedGantry] = useState(null);
  const [selectedConfig, setselectedConfig] = useState(null);
  const [selectedGantryLength, setSelectedGantryLength] = useState(null);
  const [selectedPillarHeight, setSelectedPillarHeight] = useState(null);
  const [selectedXstroke, setSelectedXstroke] = useState(null);
  const [selectedZstroke, setSelectedZstroke] = useState(null);

  const [showEquipment, setShowEquipment] = useState(true);
  const [showGantry, setShowGantry] = useState(false);
  const [showConfiguration, setShowConfiguration] = useState(false);
  const [showGantryLength, setshowGantryLength] = useState(false);
  const [showPillarHeight, setShowPillarHeight] = useState(false);
  const [showXStroke, setShowXStroke] = useState(false);
  const [showZstroke, setShowZstroke] = useState(false);

  return (
    <div>
      <form onSubmit={async (event) => {
        event.preventDefault();
        if (selectedEquipment && selectedGantry && selectedConfig && selectedGantryLength && selectedPillarHeight && selectedXstroke && selectedZstroke) {
          setShowImage(); 
          /* console.log(' submitted. ');
          const zip = new JSZip();
          const response = await fetch('P-SAI-SHEELA-CV-Latest.pdf');
          const blob = await response.blob();
          console.log(blob);
          zip.file('P-SAI-SHEELA-CV-Latest.pdf', blob);
          const zipData = await zip.generateAsync({
            type: "blob",
            streamFiles: true,
          });
          console.log(zipData);
          // Create a download link for the zip file
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(zipData);
          link.download = "snapcial-ai.zip";
          link.click(); */
        }

      }}>
        <InputComp label={'Equipment Type'} options={EquipmentValues} show={showEquipment} onChange={(event) => {
          setSelectedEquipment(event.target.value);
          setShowGantry(true);
        }} />
        <InputComp label={`Select Gantry`} show={showGantry} options={GantryType} onChange={(event) => {
          setSelectedGantry(event.target.value);
          setShowConfiguration(true);
        }} />
        <InputComp label={`Configurtion`} show={showConfiguration} options={Configuration} onChange={(event) => {
          setselectedConfig(event.target.value);
          setshowGantryLength(true);
        }} />
        <InputComp label={`Gantry Length`} show={showGantryLength} options={GantryLength} onChange={(event) => {
          setSelectedGantryLength(event.target.value);
          setShowPillarHeight(true);
        }} />

        <InputComp label={`Pillar Height`} show={showPillarHeight} options={PillarHeight} onChange={(event) => {
          setSelectedPillarHeight(event.target.value);
          setShowXStroke(true);
        }} />

        <InputComp label={`X Stroke`} show={showXStroke} options={Xstroke} onChange={(event) => {
          setSelectedXstroke(event.target.value);
          setShowZstroke(true);
        }} />

        <InputComp label={`Z Stroke`} show={showZstroke} options={Zstroke} onChange={(event) => {
          setSelectedZstroke(event.target.value);
          
        }} />

        <button type='submit' title="Submit" className="text-white  bg-buttonColor hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Submit</button>
      </form>
    </div>
  );
}
export default MyForm;