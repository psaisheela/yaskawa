import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import Header from './components/Header';
import { useState } from 'react';
import JSZip from 'jszip';

function App() {
  const [showImage, setShowImage] = useState(false)
  const handleDownload = async()=>{
    const zip = new JSZip(); 
    const folder = zip.folder('myFolder');

    const response = await fetch('144572_710_Cable_chain_kit_single_TSL_2000_4000_L_10m_.hsf'); 
    const blob = await response.blob();
    folder.file('144572_710_Cable_chain_kit_single_TSL_2000_4000_L_10m_.hsf', blob);

    const response1 = await fetch('153445_710_Track_TSL_gantry_L_10_m_.hsf'); 
    const blob1 = await response1.blob();
    folder.file('153445_710_Track_TSL_gantry_L_10_m_.hsf', blob1);

    const response2 = await fetch('166761_700_On_Track_Gantry_Y_Gallow_H_4000_L_2000_.hsf'); 
    const blob2 = await response2.blob();
    folder.file('166761_700_On_Track_Gantry_Y_Gallow_H_4000_L_2000_.hsf', blob2);

    const response3 = await fetch('ModelInfo.dat'); 
    const blob3 = await response3.blob();
    folder.file('ModelInfo.dat', blob3);

    const zipData = await folder.generateAsync({
      type: "blob",
      streamFiles: true,
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(zipData);
    link.download = "test.zip";
    link.click();

  }
  return (
    <div className="App">
      <Header />

      <div className='grid grid-cols-2'>
        <div className='mt-10'>
          <label className=' text-2xl '>Motosim Model Configurator</label>
          <MyForm setShowImage={() => setShowImage(true)} />
        </div>
        {
          showImage && <div className=' flex flex-col justify-center items-center'>
            <img src={require('./assets/images/sample.webp')} alt = {'logo'} className=' h-80 w-80 object-cover object-center ' />
            <button onClick={handleDownload} className="text-white bg-gradient-to-r m-9 from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download</button>
          </div>
        }
      </div>

    </div>
  );
}

export default App;
