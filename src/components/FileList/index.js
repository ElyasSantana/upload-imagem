import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

function FileList({ files, onDelete }) {
  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile[0].id}>
          <FileInfo>
            <Preview src={uploadedFile[0].preview} />
            <div>
              <strong>{uploadedFile[0].name}</strong>
              <span>
                {uploadedFile[0].readableSize}
                {!!uploadedFile[0].url && (
                  <button onClick={() => onDelete(uploadedFile[0].id)}>
                    Excluir
                  </button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!uploadedFile[0].uploaded && !uploadedFile[0].error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#7159c1' },
                }}
                strokeWidth={10}
                percentage={uploadedFile[0].progress}
              />
            )}

            {uploadedFile[0].url && (
              <a
                href={uploadedFile[0].url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MdLink style={{ marginRight: 8 }} size={24} color='#222' />
              </a>
            )}

            {uploadedFile[0].uploaded && (
              <MdCheckCircle size={24} color='#78e5d5' />
            )}
            {uploadedFile[0].error && <MdError size={24} color='#e57878' />}
          </div>
        </li>
      ))}
    </Container>
  );
}

export default FileList;
