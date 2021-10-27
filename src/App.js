import { useState } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = (files) => {
    const uploadedItems = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles((prevFiles) => [...prevFiles, uploadedItems]);
  };

  return (
    <Container>
      <Content>
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
      </Content>
      <GlobalStyle />
    </Container>
  );
}

export default App;
