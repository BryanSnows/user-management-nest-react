import {
  CloseButton,
  ContentWithFile,
  ContentWithoutFile,
  DragFileElement,
  FormFileUpload,
  InputFileUpload,
  LabelFileUpload,
  LinkToFile,
} from './styles';
import { FiUpload as UploadIcon } from 'react-icons/fi';
import { LuFolderCheck as FolderIcon } from 'react-icons/lu';
import { CgCloseO as CloseIcon } from 'react-icons/cg';
import { LabelTheme } from '../Input/StyledGlobal/styles';
import { InputLabel } from '@mui/material';
import { Body4, BodyBlue } from '../../styles/typography';
import { theme } from '../../assets/styles/themes/theme';
import { useEffect, useRef, useState } from 'react';
import {
  WrapperTextColumnLeft,
  WrapperTextRowCenter,
  WrapperTextRowLeft,
} from '../../styles/global';
import { DragAndDropProps } from './types';
import { FileTypesEnum } from '../../common/enums';

export function DragDropFile({
  setFile,
  path,
  setPath,
  acceptedFileSize,
  setAcceptedFileSize,
  acceptedFileType,
  setAcceptedFileType,
  defaultFileSize,
  mandatoryField,
  fileType,
  hideLabel,
}: DragAndDropProps) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const oneMB = 1048576;

  useEffect(() => {
    if (path) {
      setFileName(path);
    }
  }, [path]);

  useEffect(() => {
    if (setPath) {
      setPath(fileName);
    }
  }, [fileName, setPath]);

  const handleReset = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setAcceptedFileSize(true);
    setAcceptedFileType(true);
    setFileName('');
    setFile('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  function handleDrag(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      setFile(file);
      setFileSize(file.size);
      file.size <= defaultFileSize ? setAcceptedFileSize(true) : setAcceptedFileSize(false);
      file.type !== FileTypesEnum[fileType as keyof typeof FileTypesEnum]
        ? setAcceptedFileType(true)
        : setAcceptedFileType(false);
    }
  }

  function handleChange(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFile(file);
      setFileSize(file.size);
      file.size <= defaultFileSize ? setAcceptedFileSize(true) : setAcceptedFileSize(false);
      file.type == FileTypesEnum[fileType as keyof typeof FileTypesEnum]
        ? setAcceptedFileType(true)
        : setAcceptedFileType(false);
    }
  }

  const onButtonClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFile(file);
      setFileSize(file.size);
      file.size <= defaultFileSize ? setAcceptedFileSize(true) : setAcceptedFileSize(false);
      file.type == FileTypesEnum[fileType as keyof typeof FileTypesEnum]
        ? setAcceptedFileType(true)
        : setAcceptedFileType(false);
    }
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <FormFileUpload onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      {!hideLabel && (
        <InputLabel sx={LabelTheme()}>{mandatoryField ? 'Arquivo*' : 'Arquivo'}</InputLabel>
      )}
      <InputFileUpload
        ref={inputRef}
        type="file"
        multiple={true}
        onChange={handleChange}
        id="input-file-upload"
      />
      <LabelFileUpload htmlFor="input-file-upload" className={dragActive ? 'drag-active' : ''}>
        {fileName ? (
          <ContentWithFile>
            <FolderIcon className="folderIcon" />
            <WrapperTextColumnLeft>
              <WrapperTextRowLeft>
                <BodyBlue fontColor={theme.colors.primary.main}>{fileName}</BodyBlue>
                <CloseButton onClick={(e) => handleReset(e)}>
                  <CloseIcon className="closeIcon" />
                </CloseButton>
              </WrapperTextRowLeft>
              <Body4 fontColor={theme.colors.typography.gray}>
                {fileSize && fileSize > oneMB
                  ? (fileSize / (1024 * 1024)).toFixed(2) + ' MB'
                  : fileSize && fileSize <= oneMB
                  ? (fileSize / 1024).toFixed(2) + ' KB'
                  : ''}
              </Body4>
            </WrapperTextColumnLeft>
          </ContentWithFile>
        ) : (
          <ContentWithoutFile>
            <UploadIcon />
            <WrapperTextRowCenter>
              <LinkToFile onClick={onButtonClick}>
                Arraste e solte ou escolha pesquisar arquivo
              </LinkToFile>
              <Body4 fontColor={theme.colors.typography.gray}>para fazer Upload.</Body4>
            </WrapperTextRowCenter>
            <Body4 fontColor={theme.colors.typography.gray}>
              {defaultFileSize > oneMB
                ? fileType + ' com até ' + defaultFileSize / (1024 * 1024) + ' MB'
                : fileType + ' com até ' + defaultFileSize / 1024 + ' KB'}
            </Body4>
          </ContentWithoutFile>
        )}
        {!acceptedFileType ? (
          <small>Arquivo diferente do padrão {fileType}</small>
        ) : !acceptedFileSize ? (
          <small>
            {defaultFileSize > oneMB
              ? 'Arquivo excede ' + defaultFileSize / (1024 * 1024) + ' MB'
              : 'Arquivo excede ' + defaultFileSize / 1024 + ' KB'}
          </small>
        ) : (
          ''
        )}
      </LabelFileUpload>
      {dragActive && (
        <DragFileElement
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></DragFileElement>
      )}
    </FormFileUpload>
  );
}
